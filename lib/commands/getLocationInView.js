var async = require('async'),
    ErrorHandler = require('../utils/ErrorHandler.js');

module.exports = function getLocationInView (selector) {

    /**
     * make sure that callback contains chainit callback
     */
    var callback = arguments[arguments.length - 1];

    /**
     * parameter check
     */
    if(typeof selector !== 'string') {
        return callback(new ErrorHandler.CommandError('number or type of arguments don\'t agree with getLocationInView command'));
    }

    var self = this,
        response = {};

    async.waterfall([
        function(cb) {
            self.elements(selector, cb);
        },
        function(res, cb) {
            response.elements = res;
            response.elementIdLocationInView = [];

            async.eachSeries(res.value, function(val, seriesCallback) {
                self.elementIdLocationInView(val.ELEMENT, function(err,res) {
                    response.elementIdLocationInView.push(res);
                    seriesCallback(err);
                });
            }, cb);
        }
    ], function(err) {

        var value = null;

        if(response.elementIdLocationInView && response.elementIdLocationInView.length === 1) {

            value = {
                x: parseInt(response.elementIdLocationInView[0].value.x, 10),
                y: parseInt(response.elementIdLocationInView[0].value.y, 10)
            };

        } else if(response.elementIdLocationInView && response.elementIdLocationInView.length > 1) {

            value = response.elementIdLocationInView.map(function(res) {
                return {
                    x: parseInt(res.value.x, 10),
                    y: parseInt(res.value.y, 10)
                };
            });

        }

        callback(err, value, response);

    });

};