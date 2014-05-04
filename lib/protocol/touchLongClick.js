/**
 *
 * Long press on the touch screen using finger motion events.
 *
 * @param {String} id ID of the element to long press on
 *
 * @see http://code.google.com/p/selenium/wiki/JsonWireProtocol#session/:sessionId/touch/longclick
 *
 */

module.exports = function touchLongClick (id) {

    if(typeof id !== 'string' && typeof id !== 'number') {
        return callback(new ErrorHandler.ProtocolError('number or type of arguments don\'t agree with touchLongClick protocol command'));
    }

    this.requestHandler.create(
        '/session/:sessionId/touch/longclick',
        { element: id.toString() },
        arguments[arguments.length - 1]
    );

};