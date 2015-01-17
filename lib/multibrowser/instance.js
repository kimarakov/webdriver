var webdriverio = require('../webdriverio'),
    child_process = require('child_process'),
    EventHandler = require('../utils/EventHandler'),
    nonSeleniumCommands = require('./static').nonSeleniumCommands,
    path = require('path');

/**
 * Instance instance
 */
function Instance(instanceName, capabilities) {
    /**
     * assign bitmask
     */
    this.name = instanceName;
    this.origin = 'instance';

    this.commandId = 0;
    this.eventHandler = new EventHandler(this);

    /**
     * register listener for error to avoid breaking tests if no listener is registered
     */
    this.eventHandler.on('error', function(){});

    /**
     * process disconnect listener
     * gets called once an instance called the `end` method
     */
    this.onDisconnect = function(e) {
        /**
         * ToDo handle disconnects
         */
        // this.cp.kill();
    };

    this.onMessage = function(message) {
        /**
         * only handle messages executed by multibrowser
         */
        if(message.origin !== this.origin) {
            return;
        }

        /**
         * handling events
         */
        if(message.action === 'event') {
            message.args.unshift(message.type);
            message.args.push(message.instanceName);
            return this.eventHandler.emit.apply(this.eventHandler, message.args);
        }

        this.eventHandler.emit(message.origin + '_' + message.commandId, message);
    };

    this.onError = function(err) {
        /**
         * ToDo handle errors
         */
    };

    this.cp = child_process.fork(__dirname + path.sep + 'runner.js');
    this.cp.on('disconnect', this.onDisconnect.bind(this));
    this.cp.on('message', this.onMessage.bind(this));
    this.cp.on('error', this.onError.bind(this));

    /**
     * populate child process methods
     */
    this.send = this.cp.send.bind(this.cp);
    this.on = this.cp.on.bind(this.cp);

    /**
     * initialise process instance
     */
    this.cp.send({
        action: 'initiate',
        instanceName: this.name,
        capabilities: capabilities
    });
};

/**
 * assign custom instance methods to each WebdriverIO command to make sure they'll get chained
 */
Object.keys(webdriverio.prototype).forEach(function(fnName) {
    /**
     * skip non selenium commands so they still get handled like
     * normal chained commands
     */
    if(nonSeleniumCommands.indexOf(fnName) === 0) {
        return Instance.prototype[fnName] = webdriverio.prototype[fnName];
    }

    /**
     * handle Selenium methods as real chained methods but instead of doing
     * HTTP requests we listen on the result from all instances.
     * Therefor is the actual Instance command just the event listener
     * and gets triggered once one intances finishes the command
     */
    Instance.prototype[fnName] = function(){
        var self = this,
            args = Array.prototype.slice.call(arguments),
            callback;

        if(typeof args[args.length - 1] === 'function') {
            callback = args.pop();
        }

        var processMessage = {
            origin: this.origin,
            action: 'command',
            fnName: fnName,
            args: args,
            commandId: this.commandId
        };

        this.send(processMessage);

        if(callback) {
            this.eventHandler.on(this.origin + '_' + this.commandId, function(message) {
                return callback.apply(self, message.args);
            });
        }

        this.commandId++;

        return this;
    };
});

module.exports = Instance;