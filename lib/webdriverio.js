'use strict';

var Q = require('q'),
    util = require('util'),
    merge = require('deepmerge'),
    EventEmitter = require('events').EventEmitter,
    safeExecute = require('./utils/safeExecute'),
    RequestHandler = require('./utils/RequestHandler'),
    Logger = require('./utils/Logger');

/**
 * WebdriverIO v3
 */
var WebdriverIO = module.exports = function WebdriverIO(options) {

    var prototype = Object.create(null),
        eventHandler = new EventEmitter(),
        fulFilledPromise = Q();

    /**
     * enable user to attach to a running selenium session by
     * passing a selenium session id from type of string
     */
    if (typeof options !== 'string') {
        options = merge({
            host: '127.0.0.1',
            port: 4444,
            protocol: 'http',
            waitforTimeout: 500,
            coloredLogs: true,
            logLevel: 'silent'
        }, options);
    }

    var logger = new Logger(options.logLevel, options.coloredLogs, eventHandler),
        requestHandler = new RequestHandler(options, eventHandler, logger);

    /**
     * only set globals we wouldn't get otherwise
     */
    GLOBAL.WDIO_GLOBALS = {
        coloredLogs: options.coloredLogs
    };

    var desiredCapabilities = merge({
        browserName: 'firefox',
        version: '',
        javascriptEnabled: true,
        locationContextEnabled: true,
        handlesAlerts: true,
        rotatable: true,
        platform: 'ANY'
    }, options.desiredCapabilities || {});

    /**
     * WebdriverIO Monad
     */
    function unit(lastPromise) {

        var client = Object.create(prototype),
            defer = Q.defer(),
            promise = defer.promise;

        client.defer = defer;
        client.promise = promise;
        client.lastPromise = lastPromise || fulFilledPromise;

        client.desiredCapabilities = desiredCapabilities;
        client.requestHandler = requestHandler;
        client.logger = logger;

        /**
         * actual bind function
         */
        client.next = function (func, args) {
            /**
             * if last promise is already fulfilled execute promise in the
             * current event loop (enables to have "then" as last method call)
             */
            var self = this;
            if(this.lastPromise.inspect().state === 'fulfilled') {
                return setImmediate(function() {
                    return resolve.call(self, safeExecute(func, args));
                });
            }

            return this.lastPromise.finally(resolve.bind(this, safeExecute(func, args)));
        };

        var resolve = function(result) {
            if(typeof result === 'function') {
                this.isExecuted = true;
                result = result.call(this);
            }

            var resolveMethod = result instanceof Error ? 'reject' : 'resolve';
            this.defer[resolveMethod](result);

            /**
             * return result to propagate promises
             */
            return result;
        };

        client.finally = function(callback) {
            return unit(this.lastPromise.finally(callback.bind(this)));
        };

        client.then = function(onFulfilled, onRejected) {
            var self = this;

            if(typeof onFulfilled !== 'function' && typeof onRejected !== 'function') {
                return this;
            }

            /**
             * execute then function in context of the new instance
             * but resolve result with this
             */
            var client = unit(this.promise.then(function() {
                return resolve.call(client, safeExecute(onFulfilled, arguments).bind(self));
            }, function(e) {

                if(!onRejected) {
                    return resolve.call(client, e);
                }

                return resolve.call(client, safeExecute(onRejected, arguments).bind(self));
            }));

            return client;
        };

        client.catch = function(onRejected) {
            return client.then(null, onRejected);
        };

        client.inspect = function() {
            return this.promise.inspect();
        };

        /**
         * internal helper method to handle command results
         *
         * @param  {Promise[]} promises      list of promises
         * @param  {Boolean}   extractValue  if true extract value property from selenium result
         */
        client.unify = function(promises, extractValue) {
            promises = Array.isArray(promises) ? promises : [promises];

            return Q.all(promises)
                /**
                 * extract value property from result if desired
                 */
                .then(function(result) {

                    if(!extractValue && !Array.isArray(result)) {
                        return result;
                    }

                    return result.map(function(res) {
                        return res.value && typeof res.value === 'string' ? res.value.trim() : res.value;
                    });

                /**
                 * flatten result for better assertion
                 */
                }).then(function(result) {

                    if(Array.isArray(result) && result.length === 1) {
                        return result[0]
                    }

                    return result;

                });
        };

        client.addCommand = function(name, func) {
            prototype[name] = function() {
                this.next(func, arguments);
                return unit(this.promise);
            };

            return this;
        };

        if (typeof modifier === 'function') {
            options = modifier(client, options, client.lastPromise);
        }

        return client;
    }

    /**
     * enhance base monad prototype with methods
     */
    unit.lift = function (name, func) {
        prototype[name] = function () {
            var nextPromise = this.promise;

            if(this.lastPromise.inspect().state === 'rejected') {
                setImmediate(function propagateError(e) {
                    throw new Error(e);
                }, this.lastPromise.inspect().reason);
                return this;
            }

            if(this.isExecuted) {
                nextPromise = fulFilledPromise;
            }

            var client = unit(nextPromise);
            client.next(func, arguments);

            return client;
        };

        return unit;
    };

    /**
     * register event emitter
     */
    Object.keys(eventHandler.__proto__).forEach(function(eventCommand) {
        unit.lift(eventCommand, eventHandler[eventCommand]);
    });

    return unit;
};