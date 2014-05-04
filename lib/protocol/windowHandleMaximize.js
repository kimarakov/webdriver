/**
 *
 * Maximize the specified window if not already maximized. If the :windowHandle URL parameter is "current",
 * the currently active window will be maximized.
 *
 * @param {String=} windowHandle window to maximize (if parameter is falsy the currently active window will be maximized)
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/window/:windowHandle/maximize
 *
 */

module.exports = function windowHandleMaximize (windowHandle) {

    if (typeof windowHandle !== 'string') {
        windowHandle = 'current';
    }

    var requestOptions = {
        path: '/session/:sessionId/window/' + windowHandle + '/maximize',
        method: 'POST'
    };

    this.requestHandler.create(requestOptions, arguments[arguments.length - 1]);

};
