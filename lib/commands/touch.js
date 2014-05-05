/**
 *
 * Put finger on an element (only in mobile context).
 *
 * @param {String} selector element to put finger on
 * @uses properties/getLocation, protocol/touchDown
 *
 */

var async = require('async'),
    isMobileHelper = require('../helpers/isMobile'),
    ErrorHandler = require('../utils/ErrorHandler.js');

module.exports = function touch (selector) {

    /*!
     * make sure that callback contains chainit callback
     */
    var callback = arguments[arguments.length - 1];

    /*!
     * parameter check
     */
    if(typeof selector !== 'string') {
        return callback(new ErrorHandler.CommandError('number or type of arguments don\'t agree with touch command'));
    }

    if(!isMobileHelper(this.desiredCapabilities)) {
        return callback(new ErrorHandler.CommandError('touch command is not supported on non mobile platforms'));
    }

    var self = this,
        response = {};

    async.waterfall([
        function(cb) {
            self.getLocation(selector, cb);
        },
        function(val, res, cb) {
            response.getLocation = res;
            self.touchDown(val.x, val.y, cb);
        },
        function(res, cb) {
            response.touchDown = res;
            cb();
        }
    ], function(err) {

        callback(err, null, response);

    });

};