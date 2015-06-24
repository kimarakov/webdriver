var q = require('q');

/**
 * Constructor
 */
function Multibrowser(instances) {
    this.instances = {};
    this.promiseBucket = [];
}

Multibrowser.prototype.addInstance = function(browserName, client) {
    if(this.instances[browserName]) {
        throw new Error('webdriver instance "' + browserName + '" is already defined');
    }
    this.instances[browserName] = client;
}

/**
 * modifier for multibrowser instance
 */
Multibrowser.prototype.getModifier = function() {
    var browserNames = Object.keys(this.instances),
        multibrowser = this;

    return function(client) {
        client.next = function() {
            var self = this,
                promises = [],
                args = Array.prototype.slice.apply(arguments),
                fnName = args.pop(),
                instance;

            /**
             * no need for actual function here
             */
            args.shift();

            /**
             * flush promise bucket
             */
            multibrowser.promiseBucket = [];

            return this.lastPromise.done(function() {
                browserNames.forEach(function(browserName) {
                    instance = multibrowser.instances[browserName];
                    instance = instance[fnName].apply(instance, args[0]);
                    promises.push(instance.promise);
                });

                return q.all(promises).then(
                    self.defer.resolve.bind(self.defer),
                    self.defer.reject.bind(self.defer)
                );
            });
        };

        client.select = function(browserName) {
            var instance = multibrowser.instances[browserName];

            if(!instance) {
                throw new Error('browser name "' + browserName + '" was not defined');
            }

            instance.isMultibrowser = false;
            return instance;
        };

        client.sync = function() {
            var bucket = multibrowser.flushPromiseBucket();

            return this.call(function() {
                return q.all(bucket);
            });

        };

        return client;
    };
};

/**
 * flush bucket and return current pending promises
 */
Multibrowser.prototype.flushPromiseBucket = function() {
    var bucket = this.promiseBucket.filter(function(promise) {
        return promise.inspect().state === 'pending';
    });
    this.promiseBucket = [];
    return bucket;
};

/**
 * modifier for single webdriverio instances
 */
Multibrowser.prototype.getInstanceModifier = function() {
    var multibrowser = this;

    return function(client) {
        var _next = client.next;

        /**
         * Overwrite next (bind) method to put each command into a bucket.
         * This provides us useful information about all current running
         * commands.
         */
        client.next = function() {
            multibrowser.promiseBucket.push(this.promise);
            return _next.apply(this, arguments);
        }

        return client;
    }
};

module.exports = Multibrowser;