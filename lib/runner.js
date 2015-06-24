var ConfigParser = require('./utils/ConfigParser'),
    WebdriverIO = require('../');

process.on('message', function(m) {
    switch(m.command) {
        case 'run':

            var configParser = new ConfigParser();
            configParser.addConfigFile(m.configFile);

            var config = configParser.getConfig(),
                framework;

            if(config.framework === 'mocha') {
                framework = require(__dirname + '/frameworks/mocha');
            } if(config.framework === 'jasmine') {
                framework = require(__dirname + '/frameworks/jasmine');
            } else {
                throw new Error('Don\'t know the framework "' + config.framework + '"');
            }

            process.send({
                event: 'runner:start',
                capabilities: m.capabilities,
                pid: process.pid
            });

            config.desiredCapabilities = m.capabilities;
            global.browser = WebdriverIO.remote(config);

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


            global.browser.init().then(function() {
                try {
                    return framework.run(config, m.specs, m.capabilities);
                } catch(e) {
                    console.error(e.stack);
                }
            }).then(function(failures) {
                return global.browser.end().then(function() {
                    process.send({
                        event: 'runner:end',
                        failures: failures,
                        pid: process.pid
                    });

                    process.exit(0);
                }, function() {
                    process.exit(1);
                });
            });

        break;
        default:
            throw new Error('Can\'t recognise "' + m.command + '" command');
    }


});