/**
 *
 * Long press on an element using finger motion events. This command works only in a
 * mobile context.
 *
 * @param {String} selector element to hold on
 * @uses protocol/element, protocol/touchLongClick
 *
 */

var async = require('async'),
    isMobileHelper = require('../helpers/isMobile'),
    ErrorHandler = require('../utils/ErrorHandler.js');

module.exports = function hold (selector) {

    /*!
     * make sure that callback contains chainit callback
     */
    var callback = arguments[arguments.length - 1];

    /*!
     * compatibility check
     */
    if(!isMobileHelper(this.desiredCapabilities)) {
        return callback(new ErrorHandler.CommandError('hold command is not supported on non mobile platforms'));
    }

    /*!
     * parameter check
     */
    if(typeof selector !== 'string') {
        return callback(new ErrorHandler.CommandError('number or type of arguments don\'t agree with hold command'));
    }

    var self = this,
        response = {};

    async.waterfall([
        function(cb) {
            self.element(selector, cb);
        },
        function(res, cb) {
            response.element = res;
            self.touchLongClick(res.value.ELEMENT, cb);
        },
        function(res, cb) {
            response.touchLongClick = res;
            cb();
        }
    ], function(err) {

        callback(err, null, response);

    });

};