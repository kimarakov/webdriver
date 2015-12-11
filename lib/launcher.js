import child from 'child_process'
import DotReporter from 'wdio-dot-reporter'

import ConfigParser from './utils/ConfigParser'
import BaseReporter from './utils/BaseReporter'


class Launcher {
    constructor (configFile, argv) {
        this.configParser = new ConfigParser()
        this.configParser.addConfigFile(configFile)
        this.configParser.merge(argv)

        this.reporter = this.initReporter()

        this.argv = argv
        this.configFile = configFile

        this.exitCode = 0
        this.hasTriggeredExitRoutine = false
        this.hasStartedAnyProcess = false
        this.processes = []
        this.schedule = []
    }

    /**
     * check if multiremote or wdio test
     */
    isMultiremote () {
        let caps = this.configParser.getCapabilities()
        return !Array.isArray(caps)
    }

    /**
     * initialise reporter
     */
    initReporter () {
        let reporter = new BaseReporter()
        let config = this.configParser.getConfig()

        /**
         * if no reporter is set or config property is in a wrong format
         * just use the dot reporter
         */
        if (!config.reporter || !Array.isArray(config.reporter) || !config.reporter.length) {
            reporter.add(new DotReporter(reporter, config))
            return reporter
        }

        const baseReporterOptions = config.reporterOptions || {}

        for (let reporterType of config.reporter) {
            config.reporterOptions = {}
            for (let option of Object.keys(baseReporterOptions)) {
                if (option === reporterType && typeof baseReporterOptions[reporterType] === 'object') {
                    // Copy over options specifically for this reporter type
                    for (let reporterOption of Object.keys(baseReporterOptions[reporterType])) {
                        config.reporterOptions[reporterOption] = baseReporterOptions[reporterType][reporterOption]
                    }
                } else if (config.reporter.indexOf(option) >= 0) {
                    // Don't copy options for other reporters
                    continue
                } else {
                    // Copy over generic options
                    config.reporterOptions[option] = baseReporterOptions[option]
                }
            }

            try {
                let Reporter = require(`wdio-${reporterType}-reporter`)
                reporter.add(new Reporter(reporter, config))
            } catch (e) {
                throw new Error(`reporter "wdio-${reporterType}-reporter" is not installed. Error: ${e.stack}`)
            }
        }

        // Restore the base options
        config.reporterOptions = baseReporterOptions

        return reporter
    }

    /**
     * run sequence
     * @return  {Promise} that only gets resolves with either an exitCode or an error
     */
    async run () {
        let config = this.configParser.getConfig()
        let caps = this.configParser.getCapabilities()

        this.reporter.handleEvent('start')
        await config.onPrepare(config, caps)

        /**
         * if it is an object run multiremote test
         */
        if (this.isMultiremote()) {
            return this.startInstance(this.configParser.getSpecs(), caps)
        }

        /**
         * schedule test runs
         */
        for (let capabilities of caps) {
            this.schedule.push({
                specs: this.configParser.getSpecs(capabilities.specs, capabilities.exclude),
                availableInstances: capabilities.maxInstances || config.maxInstances || 1,
                runningInstances: 0
            })
        }

        /**
         * catches ctrl+c event
         */
        process.on('SIGINT', this.exitHandler.bind(this))

        /**
         * make sure the program will not close instantly
         */
        process.stdin.resume()

        let exitCode = await new Promise((resolve, reject) => {
            this.resolve = resolve
            this.reject = reject
            this.runSpecs()
        })

        await config.onComplete(exitCode)
        return exitCode
    }

    /**
     * run multiple single remote tests
     */
    runSpecs () {
        let specsLeft = 0
        let isRunning = false

        this.schedule.forEach((capability, cid) => {
            let specFiles = capability.specs.length
            specsLeft += specFiles

            for (let i = 0; capability.availableInstances > 0 && i < specFiles; i++) {
                this.startInstance([capability.specs.pop()], cid)
                capability.availableInstances--
                capability.runningInstances++
            }
            isRunning = isRunning || capability.runningInstances > 0
        })

        return specsLeft === 0 && !isRunning
    }

    /**
     * Start instance in a child process.
     * @param  {Object|Object[]} capabilities  desired capabilities of instance
     */
    startInstance (specs, i) {
        let childProcess = child.fork(__dirname + '/runner.js', [], {
            cwd: process.cwd()
        })

        this.processes.push(childProcess)

        childProcess
            .on('message', this.messageHandler.bind(this))
            .on('exit', this.endHandler.bind(this))

        childProcess.send({
            cid: i,
            command: 'run',
            configFile: this.configFile,
            argv: this.argv,
            specs: specs,
            isMultiremote: this.isMultiremote()
        })
    }

    /**
     * emit event from child process to reporter
     * @param  {Object} m  event object
     */
    messageHandler (m) {
        this.hasStartedAnyProcess = true

        /**
         * update schedule
         */
        if (m.event === 'runner:end' || m.event === 'runner:error') {
            this.schedule[m.cid].availableInstances++
            this.schedule[m.cid].runningInstances--
        }

        if (m.event === 'runner:error') {
            this.reporter.handleEvent('error', m)
        }

        this.reporter.handleEvent(m.event, m)
    }

    /**
     * Closes test runner process once all instances finished and excited process.
     * @param  {Number} childProcessExitCode  exit code of child process
     */
    endHandler (childProcessExitCode) {
        this.exitCode = this.exitCode || childProcessExitCode

        if (!this.isMultiremote() && !this.runSpecs()) {
            return
        }

        this.reporter.handleEvent('end', {
            sigint: this.hasTriggeredExitRoutine,
            exitCode: this.exitCode
        })

        if (this.exitCode === 0) {
            return this.resolve(this.exitCode)
        }

        return this.reject(new Error(`test failed with exitcode ${this.exitCode}`))
    }

    /**
     * Make sure all started selenium sessions get closed properly and prevent
     * having dead driver processes. To do so let the runner end its Selenium
     * session first before killing
     */
    exitHandler () {
        if (this.hasTriggeredExitRoutine || !this.hasStartedAnyProcess) {
            console.log('\nKilling process, bye!')
            return this.reject(1)
        }

        console.log(`

End selenium sessions properly ...
(press crtl+c again to hard kill the runner)
`)

        this.hasTriggeredExitRoutine = true
    }
}

export default Launcher
