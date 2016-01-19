/**
 *
 * Search for multiple elements on the page, starting from the document root. The located
 * elements will be returned as a WebElement JSON objects. The table below lists the
 * locator strategies that each server should support. Elements should be returned in
 * the order located in the DOM.
 *
 * @param {String} selector selector to query the elements
 * @returns {Object[]} A list of WebElement JSON objects for the located elements.
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/elements
 * @type protocol
 *
 */

import findStrategy from '../helpers/findElementStrategy'

let elements = function (selector) {
    let requestPath = '/session/:sessionId/elements'
    let lastPromise = this.lastPromise.inspect()

    if (lastPromise.state === 'fulfilled' && lastPromise.value && lastPromise.value.value && lastPromise.value.value.ELEMENT) {
        if (!selector) {
            lastPromise.value.value = [lastPromise.value.value]
            return lastPromise.value
        }

        var elem = lastPromise.value.value.ELEMENT
        requestPath = `/session/:sessionId/element/${elem}/elements`
    }

    let found = findStrategy(selector)
    return this.requestHandler.create(requestPath, {
        using: found.using,
        value: found.value
    }).catch((err) => {
        if (err.message === 'no such element') {
            return []
        }

        throw err
    })
}

export default elements
