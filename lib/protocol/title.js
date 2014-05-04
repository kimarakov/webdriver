/**
 *
 * Get the current page title.
 *
 * @returns {String} The current page title.
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/title
 *
 */

module.exports = function title () {

    this.requestHandler.createsa(
        '/session/:sessionId/title',
        arguments[arguments.length - 1]
    );

};