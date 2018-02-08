/**
 * Main class for a runnable class (e.g. test, suite or a hook)
 * mainly used to capture its running duration
 */
export default class RunnableStats {
    constructor (type) {
        this.type = type
        this.start = new Date()
        this.duration = 0
    }

    complete () {
        this.end = new Date()
        this.duration = this.end - this.start
    }

    get duration () {
        if (this.end) {
            return this.duration
        }
        return new Date() - this.start
    }

    static getIdentifier (runner) {
        return runner.uid || runner.title
    }
}
