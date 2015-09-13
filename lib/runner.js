var ConfigParser = require('./utils/ConfigParser'),
    wrapAsync = require('./helpers/wrapAsync'),
    request = require('request'),
    Fiber = require('fibers'),
    q = require('q'),
    WebdriverIO = require('../'),
    haltSIGINT = false,
    sigintWasCalled = false,
    hasSessionID = false;

process.on('message', function(m) {
    switch(m.command) {
        case 'run':

            var configParser = new ConfigParser();
            configParser.addConfigFile(m.configFile);
            configParser.merge(m.argv);

            var config = configParser.getConfig(),
                capabilities = configParser.getCapabilities(m.cid),
                framework;

            if(typeof config.framework !== 'string') {
                throw new Error('You haven\'t defined a valid framework\nPlease checkout http://webdriver.io/guide/testrunner/frameworks.html');
            }

            if(config.framework.toLowerCase() === 'mocha') {
                framework = require(__dirname + '/frameworks/mocha');
            } else if(config.framework.toLowerCase() === 'jasmine') {
                framework = require(__dirname + '/frameworks/jasmine');
            } else if(config.framework.toLowerCase() === 'cucumber') {
                framework = require(__dirname + '/frameworks/cucumber');
            } else {
                throw new Error('Don\'t know the framework "' + config.framework + '"');
            }

            process.send({
                event: 'runner:start',
                cid: m.cid,
                capabilities: capabilities,
                config: config,
            });

            if(m.isMultiremote) {
                var options = capabilities;

                Object.keys(options).forEach(function(browserName) {
                    options[browserName] = merge(config, options[browserName]);
                });

                global.browser = WebdriverIO.multiremote(options);

                /**
                 * put browser name into global scope
                 */
                Object.keys(options).forEach(function(browserName) {
                    global[browserName] = global.browser.select(browserName);
                });

            } else {
                config.desiredCapabilities = capabilities;
                global.browser = WebdriverIO.remote(config);
            }

            wrapAsync(global.browser);

            /**
             * initialise WebdriverIO compliant plugins
             */
            if(typeof config.plugins === 'object') {
                Object.keys(config.plugins).forEach(function(pluginName) {
                    var plugin = require(pluginName);

                    if(!plugin.init) {
                        throw new Error('The plugin "' + pluginName + '" is not WebdriverIO compliant');
                    }

                    plugin.init(global.browser, config.plugins[pluginName]);
                });
            }

            /**
             * register runner events
             */
            global.browser.on('init', function(payload) {
                process.send({
                    event: 'runner:init',
                    cid: m.cid,
                    sessionID: payload.sessionID,
                    options: payload.options,
                    desiredCapabilities: payload.desiredCapabilities
                });

                hasSessionID = true;
            });

            global.browser.on('command', function(payload) {
                process.send({
                    event: 'runner:command',
                    cid: m.cid,
                    method: payload.method,
                    uri: payload.uri,
                    data: payload.data
                });
            });

            global.browser.on('result', function(payload) {
                process.send({
                    event: 'runner:result',
                    cid: m.cid,
                    requestData: payload.requestData,
                    requestOptions: payload.requestOptions,
                    body: payload.body // ToDo figure out if this slows down the execution time
                });
            });

            global.browser.on('error', function(payload) {
                process.send({
                    event: 'runner:error',
                    cid: m.cid,
                    err: payload.err,
                    requestData: payload.requestData,
                    requestOptions: payload.requestOptions,
                    body: payload.body
                });
            });

            /**
             * make sure we prevent process from getting killed
             */
            haltSIGINT = true;

            var failures;
            global.browser.initAsync().then(function() {
                haltSIGINT = false;

                /**
                 * kill session of SIGINT signal showed up while trying to
                 * get a session ID
                 */
                if (sigintWasCalled) {
                    return global.browser.end().finally(function() {
                        process.exit(1);
                    });
                }

                try {
                    return framework.run(m.cid, config, m.specs, capabilities);
                } catch(e) {
                    throwError(e);
                    throw e;
                }
            }, throwError).then(function(f) {
                failures = f;

                var afterDefer = q.defer();

                console.log(111);
                Fiber(function() {
                    try {
                        afterDefer.resolve(config.after(failures, process.pid, m.capabilities));
                    } catch(e) {
                        console.log(e);
                        afterDefer.reject(e);
                    }
                }).run();

                return afterDefer.promise;
            }, function(e) {
                throwError(e);
                failures = 1;
            }).finally(function() {
                return global.browser.endAsync();
            }).then(function(res) {
                if(!config.updateJob || config.host.indexOf('saucelabs') === -1 || !res || !res.sessionId) {
                    return;
                }

                /**
                 * update Sauce Labs job
                 */
                return q.nfcall(request.put, 'https://saucelabs.com/rest/v1/' + config.user + '/jobs/' + res.sessionId, {
                    json: true,
                    auth: {
                        user: config.user,
                        pass: config.key
                    },
                    body: {
                        'passed': failures === 0,
                        'name': capabilities.name,
                        'tags': capabilities.tags,
                        'public': capabilities.public || false,
                        'build': capabilities.build,
                        'custom-data': capabilities['custom-data']
                    }
                });
            }).finally(function() {
                return q(config.after(failures, capabilities));
            }).finally(function() {
                process.send({
                    event: 'runner:end',
                    failures: failures,
                    cid: m.cid,
                });

                process.exit(failures === 0 ? 0 : 1);
            });

            function throwError(e) {
                process.send({
                    event: 'error',
                    cid: m.cid,
                    capabilities: capabilities,
                    error: {
                        message: e.message,
                        stack: e.stack
                    }
                });
                return 1;
            }

        break;
        default:
            throw new Error('Can\'t recognise "' + m.command + '" command');
    }
});

/**
 * catches ctrl+c event
 */
process.on('SIGINT', function() {
    if(sigintWasCalled) {
        return;
    }

    sigintWasCalled = true;

    if(haltSIGINT) {
        return;
    }

    if(!hasSessionID) {
        return process.kill(1);
    }

    global.browser.removeAllListeners();
    global.browser.end().finally(function() {
        process.exit(1);
    });
});