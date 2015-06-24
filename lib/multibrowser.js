var q = require('q');

/**
 * Constructor
 */
function Multibrowser(instances) {
    var browserNames = Object.keys(instances);

    return function modifier(client) {

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

            return this.lastPromise.done(function() {
                browserNames.forEach(function(browserName) {
                    instance = instances[browserName];
                    instance = instance[fnName].apply(instance, args[0]);
                    promises.push(instance.promise);
                });

                return q.all(promises).then(
                    self.defer.resolve.bind(self.defer),
                    self.defer.reject.bind(self.defer)
                );
            });
        };

        return client;

    };
}

module.exports = Multibrowser;