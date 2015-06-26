var ConfigParser = require('./utils/ConfigParser'),
    request = require('request'),
    q = require('q'),
    WebdriverIO = require('../');

process.on('message', function(m) {
    switch(m.command) {
        case 'run':

            var configParser = new ConfigParser();
            configParser.addConfigFile(m.configFile);
            configParser.merge(m.argv);

            var config = configParser.getConfig(),
                framework;

            if(config.framework === 'mocha') {
                framework = require(__dirname + '/frameworks/mocha');
            } else if(config.framework === 'jasmine') {
                framework = require(__dirname + '/frameworks/jasmine');
            } else if(config.framework === 'cucumber') {
                framework = require(__dirname + '/frameworks/cucumber');
            } else {
                throw new Error('Don\'t know the framework "' + config.framework + '"');
            }

            process.send({
                event: 'runner:start',
                capabilities: m.capabilities,
                config: config,
                pid: process.pid
            });

            config.desiredCapabilities = m.capabilities;
            global.browser = WebdriverIO.remote(config);

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
                    pid: process.pid,
                    sessionID: payload.sessionID,
                    options: payload.options,
                    desiredCapabilities: payload.desiredCapabilities
                });
            });

            global.browser.on('command', function(payload) {
                process.send({
                    event: 'runner:command',
                    pid: process.pid,
                    method: payload.method,
                    uri: payload.uri,
                    data: payload.data
                });
            });

            global.browser.on('result', function(payload) {
                process.send({
                    event: 'runner:result',
                    pid: process.pid,
                    requestData: payload.requestData,
                    requestOptions: payload.requestOptions,
                    body: payload.body // ToDo figure out if this slows down the execution time
                });
            });

            global.browser.on('end', function(payload) {
                process.send({
                    event: 'runner:end',
                    pid: process.pid,
                    sessionId: payload.sessionId
                });
            });

            global.browser.on('error', function(payload) {
                process.send({
                    event: 'runner:error',
                    pid: process.pid,
                    err: payload.err,
                    requestData: payload.requestData,
                    requestOptions: payload.requestOptions,
                    body: payload.body
                });
            });

            var failures;
            global.browser.init().then(function() {
                try {
                    return framework.run(config, m.specs, m.capabilities);
                } catch(e) {
                    return throwError(e);
                }
            }, throwError).then(function(f) {
                failures = f;
                return global.browser.end();
            }, throwError).then(function(res) {
                if(!config.updateJob || config.host.indexOf('saucelabs') === -1) {
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
                        'name': m.capabilities.name,
                        'tags': m.capabilities.tags,
                        'public': m.capabilities.public || false,
                        'build': m.capabilities.build,
                        'custom-data': m.capabilities['custom-data']
                    }
                });
            }, throwError).then(function() {
                process.send({
                    event: 'runner:end',
                    failures: failures,
                    pid: process.pid
                });

                return q(config.after(undefined, failures, process.pid));
            }, throwError).then(function() {
                process.exit(failures === 0 ? 0 : 1);
            }, throwError);

            function throwError(e) {
                process.send({
                    event: 'error',
                    pid: process.pid,
                    capabilities: m.capabilities,
                    error: {
                        message: e.message,
                        stack: e.stack
                    }
                });
                return q(config.after(e));
            }

        break;
        default:
            throw new Error('Can\'t recognise "' + m.command + '" command');
    }

});