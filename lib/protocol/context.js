/**
 *
 * appium specific command
 *
 * @see http://appium.io/slate/en/v1.1.0/?javascript#automating-hybrid-ios-apps
 * @see https://github.com/admc/wd/blob/master/lib/commands.js#L279
 * @type protocol
 *
 */

module.exports = function context (id) {

    var requestOptions = {
        path: '/session/:sessionId/context',
        method: 'GET'
    };

    var data = {};

    if(typeof id === 'string') {
        requestOptions.method = 'POST';
        data.name = id;
    }

    this.requestHandler.create(requestOptions, data, arguments[arguments.length - 1]);

};