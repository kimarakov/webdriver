
/**
 *
 * This command helps you to debug your integration tests. It stops the running browser and gives
 * you time to jump into it and check the state of your application (e.g. using dev tools).
 * Your terminal transforms into a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)
 * interface that will allow you to try out certain commands, find elements and test actions on
 * them.
 *
 * [![WebdriverIO REPL](http://webdriver.io/images/repl.gif)](http://webdriver.io/images/repl.gif)
 *
 * If you run the WDIO testrunner make sure you increase the timeout property of the test framework
 * you are using (e.g. Mocha or Jasmine) in order to prevent test termination due to a test timeout.
 * Also avoid executing the command with multiple capabilities running at the same time.
 *
 * <iframe width="560" height="315" src="https://www.youtube.com/embed/xWwP-3B_YyE" frameborder="0" allowfullscreen></iframe>
 *
 * <example>
    :debug.js
    it('should demonstrate the debug command', () => {
        $('#input').setValue('FOO')
        browser.debug() // jumping into the browser and change value of #input to 'BAR'
        const value = $('#input').getValue()
        console.log(value) // outputs: "BAR"
    })
 * </example>
 *
 * @alias browser.debug
 * @type utility
 *
 */

import vm from 'vm'
import repl from 'repl'

import { runFnInFiberContext, hasWdioSyncSupport } from '@wdio/config'

import { STATIC_RETURNS, INTRO_MESSAGE } from './constants'

export default class WDIORepl {
    static introMessage = INTRO_MESSAGE

    constructor (config) {
        this.config = Object.assign({
            commandTimeout: 5000,
            eval: ::this.eval,
            prompt: '\u203A ',
            useGlobal: true,
            useColor: true
        }, config)

        this.commandIsRunning = false
    }

    eval (cmd, context, filename, callback) {
        if (this.commandIsRunning) {
            return
        }

        if (cmd && STATIC_RETURNS[cmd.trim()]) {
            return callback(null, STATIC_RETURNS[cmd.trim()])
        }

        vm.createContext(context)
        this.commandIsRunning = true
        if (hasWdioSyncSupport) {
            return runFnInFiberContext(() => {
                return this._runCmd(cmd, context, callback)
            })()
        }

        return this._runCmd(cmd, context, callback)
    }

    _runCmd (cmd, context, callback) {
        try {
            const result = vm.runInContext(cmd, context)
            return this._handleResult(result, callback)
        } catch (e) {
            this.commandIsRunning = false
            return callback(e)
        }
    }

    _handleResult (result, callback) {
        if (!result || typeof result.then !== 'function') {
            this.commandIsRunning = false
            return callback(null, result)
        }

        const timeout = setTimeout(
            () => callback(new Error('Command execution timed out')),
            this.config.commandTimeout
        )

        result.then((res) => {
            this.commandIsRunning = false
            clearTimeout(timeout)
            return callback(null, res)
        }, (e) => {
            this.commandIsRunning = false
            clearTimeout(timeout)
            const commandError = new Error(e.message)
            delete commandError.stack
            return callback(commandError)
        })
    }

    start () {
        if (this.replServer) {
            throw new Error('a repl was already initialised')
        }

        this.replServer = repl.start(this.config)

        return new Promise(
            (resolve) => this.replServer.on('exit', resolve))
    }
}
