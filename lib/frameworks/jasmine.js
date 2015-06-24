var q = require('q'),
    co = require('co'),
    hasES6Support = require('../helpers/detectHarmony');

var JasmineReporter = function(capabilities) {
    this._capabilities = capabilities;
    this._parent = [];
};

JasmineReporter.prototype.suiteStarted = function(suite) {
    this._suiteStart = new Date();
    suite.type = 'suite';
    this.emit('suite:start', suite);
    this._parent.push(suite.description);
};

JasmineReporter.prototype.specStarted = function(test) {
    this._testStart = new Date();
    test.type = 'test';
    this.emit('test:start', test);
};

JasmineReporter.prototype.specDone = function(test) {
    var e = 'test:' + test.status.replace(/ed/, '');
    test.type = 'test';
    test.duration = new Date() - this._testStart;
    this.emit(e, test);
};

JasmineReporter.prototype.suiteDone = function(suite) {
    this._parent.pop();
    suite.type = 'suite';
    suite.duration = new Date() - this._suiteStart;
    this.emit('suite:end', suite);
};

JasmineReporter.prototype.emit = function(event, payload) {
    var message = {
        event: event,
        pid: process.pid,
        title: payload.description,
        pending: payload.status === 'pending',
        parent: this._parent.length ? this._parent[this._parent.length - 1] : null,
        type: payload.type,
        file: '',
        err: payload.failedExpectations.length ? payload.failedExpectations[0] : {},
        duration: payload.duration,
        runner: {}
    };

    message.runner[process.pid] = this._capabilities;
    process.send(message);
};


/**
 * Jasmine 2.x runner
 */
exports.run = function(config, specs, capabilities) {
    var Jasmine = require('jasmine'),
        jrunner = new Jasmine(),
        jasmineNodeOpts = config.jasmineNodeOpts,
        defer = q.defer();

    jrunner.projectBaseDir = '';
    jrunner.specDir = '';
    jrunner.addSpecFiles(specs);

    if (jasmineNodeOpts && jasmineNodeOpts.defaultTimeoutInterval) {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = jasmineNodeOpts.defaultTimeoutInterval;
    }

    var reporter = new JasmineReporter(capabilities);
    jrunner.addReporter(reporter);

    // Filter specs to run based on jasmineNodeOpts.grep and jasmineNodeOpts.invert.
    jasmine.getEnv().specFilter = function(spec) {
        var grepMatch = !jasmineNodeOpts || !jasmineNodeOpts.grep || spec.getFullName().match(new RegExp(jasmineNodeOpts.grep)) !== null;
        var invertGrep = !!(jasmineNodeOpts && jasmineNodeOpts.invertGrep);
        if (grepMatch == invertGrep) {
            spec.pend();
        }
        return true;
    };

    ['it', 'beforeEach', 'beforeAll', 'afterEach', 'afterAll'].forEach(promisify);

    /**
     * enable generators if supported
     */
    if(hasES6Support) {
        ['it', 'beforeEach', 'beforeAll', 'afterEach', 'afterAll'].forEach(runInGenerator);
    }

    jrunner.onComplete(function() {
        defer.resolve(reporter.failedCount);
    });

    q(config.before()).then(function() {
        jrunner.execute();
    }, defer.reject.bind(defer));

    return defer.promise;
};

function promisify(fnName) {
    var origFn = global[fnName],
        specTitle, specFn, specTimeout;

    var runHook = function(specFn, specTimeout) {
        return origFn.call(null, function(done) {
            var result = specFn();
            if(!result.finally) {
                return;
            }

            return result.finally(done);
        }, specTimeout);
    };

    var runSpec = function(specTitle, specFn) {
        return origFn.call(null, specTitle, function(done) {
            var result = specFn();

            if(typeof result.finally !== 'function') {
                return;
            }

            return result.finally(done);
        });
    };

    global[fnName] = function() {
        var args = Array.prototype.slice.call(arguments);

        if(fnName === 'it') {

            specTitle = args[0];
            specFn = args[1];

            /**
             * callback arguments got request, user handles async
             */
            if(specFn.length === 1) {
                return origFn.call(null, specTitle, specFn);
            }

            return runSpec(specTitle, specFn);

        }

        specFn = args[0];
        specTimeout = args[1];

        /**
         * callback arguments got request, user handles async
         */
        if(specFn.length === 1) {
            return origFn.call(null, specFn, specTimeout);
        }

        return runHook(specFn, specTimeout);

    };
}

var runInGenerator = function (fnName) {
    var origFn = global[fnName],
        specTitle, specFn, specTimeout;

    var runSpec = function(specTitle, specFn) {
        return origFn.call(null, specTitle, function(done) {
            co(specFn).then(done.bind(null, null), done.bind(null));
        });
    };

    var runHook = function(specFn, specTimeout) {
        return origFn.call(null, function(done) {
            co(specFn).then(done.bind(null, null), done.bind(null));
        }, specTimeout);
    };

    global[fnName] = function() {
        var args = Array.prototype.slice.call(arguments);

        if(fnName === 'it') {
            specTitle = args[0];
            specFn = args[1];

            /**
             * only run in a generator if * is set
             */
            if(specFn.toString().slice(0, 9) !== 'function*') {
                return origFn.call(null, specTitle, specFn);
            }

            return runSpec(specTitle, specFn);
        }

        specFn = args[0];
        specTimeout = args[1];

        /**
         * only run in a generator if * is set
         */
        if(specFn.toString().slice(0, 9) !== 'function*') {
            return origFn.call(null, specFn, specTimeout);
        }

        return runHook(specFn, specTimeout);
    };
};