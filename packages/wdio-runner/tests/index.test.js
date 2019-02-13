import fs from 'fs'

import WDIORunner from '../src'

jest.mock('fs')
jest.mock('util', () => ({ promisify: (fn) => fn }))

describe('wdio-runner', () => {
    describe('_fetchDriverLogs', () => {
        it('not do anything if driver does not support log commands', async () => {
            const runner = new WDIORunner()
            global.browser = { sessionId: '123' }

            const result = await runner._fetchDriverLogs({ outputDir: '/foo/bar' })
            expect(result).toBe(undefined)
        })

        it('should fetch logs', async () => {
            const runner = new WDIORunner()
            runner.cid = '0-1'

            global.browser = {
                getLogTypes: () => Promise.resolve(['foo', 'bar']),
                getLogs: (type) => Promise.resolve([`#1 ${type} log`, `#2 ${type} log`]),
                sessionId: '123'
            }

            await runner._fetchDriverLogs({ outputDir: '/foo/bar' })
            expect(fs.writeFile.mock.calls[0]).toEqual(['/foo/bar/wdio-0-1-foo.log', '"#1 foo log"\n"#2 foo log"', 'utf-8'])
            expect(fs.writeFile.mock.calls[1]).toEqual(['/foo/bar/wdio-0-1-bar.log', '"#1 bar log"\n"#2 bar log"', 'utf-8'])
            fs.writeFile.mockClear()
        })

        it('should not fail if logs can not be received', async () => {
            const runner = new WDIORunner()
            runner.cid = '0-1'

            global.browser = {
                getLogTypes: () => Promise.resolve(['corrupt']),
                getLogs: () => Promise.reject(new Error('boom')),
                sessionId: '123'
            }

            await runner._fetchDriverLogs({ outputDir: '/foo/bar' })
            expect(fs.writeFile).toHaveBeenCalledTimes(0)
        })

        it('should not write to file if no logs exist', async () => {
            const runner = new WDIORunner()
            runner.cid = '0-1'

            global.browser = {
                getLogTypes: () => Promise.resolve(['foo', 'bar']),
                getLogs: () => Promise.resolve([]),
                sessionId: '123'
            }

            await runner._fetchDriverLogs({ outputDir: '/foo/bar' })
            expect(fs.writeFile.mock.calls).toHaveLength(0)
        })

        afterEach(() => {
            delete global.browser
        })
    })

    describe('endSession', () => {
        it ('should work normally when called after framework run', async () => {
            const hook = jest.fn()
            const runner = new WDIORunner()
            runner._shutdown = jest.fn()
            global.browser = {
                deleteSession: jest.fn(),
                sessionId: '123',
                config: { afterSession: [hook] }
            }
            await runner.endSession()
            expect(hook).toBeCalledTimes(1)
            expect(global.browser.deleteSession).toBeCalledTimes(1)
            expect(!global.browser.sessionId).toBe(true)
            expect(runner._shutdown).toBeCalledTimes(0)
        })

        it('should do nothing when triggered by run method without session', async () => {
            const hook = jest.fn()
            const runner = new WDIORunner()
            runner._shutdown = jest.fn()
            await runner.endSession()
            expect(hook).toBeCalledTimes(0)
        })

        it('should wait for session to be created until shutting down', async () => {
            const hook = jest.fn()
            const runner = new WDIORunner()
            runner._shutdown = jest.fn()
            global.browser = {
                deleteSession: jest.fn(),
                config: { afterSession: [hook] }
            }
            setTimeout(() => {
                global.browser.sessionId = 123
            }, 200)

            const start = Date.now()
            await runner.endSession(true)
            const end = Date.now()
            expect(hook).toBeCalledTimes(1)
            expect(global.browser.deleteSession).toBeCalledTimes(1)
            expect(!global.browser.sessionId).toBe(true)
            expect(runner._shutdown).toBeCalledTimes(1)
            expect(end - start).toBeGreaterThanOrEqual(200)
        })
    })

    describe('run', () => {
        it('should fail if log file is corrupted', async () => {
            const runner = new WDIORunner()
            runner._shutdown = jest.fn()
            runner.configParser.addConfigFile = jest.fn().mockImplementation(
                () => { throw new Error('boom') })
            await runner.run({})

            expect(runner._shutdown).toBeCalledWith(1)
        })

        it('should fail if init session fails', async () => {
            const runner = new WDIORunner()
            const beforeSession = jest.fn()
            const caps = { browserName: '123' }
            const specs = ['foobar']
            const config = {
                reporters: [],
                beforeSession: [beforeSession]
            }
            runner.configParser.getConfig = jest.fn().mockReturnValue(config)
            runner._shutdown = jest.fn()
            runner._initSession = jest.fn().mockReturnValue(null)
            await runner.run({
                argv: { reporters: [] },
                cid: '0-0',
                caps,
                specs
            })

            expect(runner._shutdown).toBeCalledWith(1)
            expect(beforeSession).toBeCalledWith(config, caps, specs)
        })
    })

    describe('_shutdown', () => {
        it('should emit exit', async () => {
            const runner = new WDIORunner()
            runner.reporter = { waitForSync: jest.fn()
                .mockReturnValue(Promise.resolve()) }
            runner.emit = jest.fn()

            expect(await runner._shutdown(123)).toBe(123)
            expect(runner.reporter.waitForSync).toBeCalledTimes(1)
            expect(runner.emit).toBeCalledWith('exit', 1)
        })
    })
})
