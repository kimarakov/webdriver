/**
 *
 * Given a selector corresponding to an `<input type=file>`, will upload the local
 * file to the browser machine and fill the form accordingly. It does not submit
 * the form for you.
 *
 * @param {String} selector   input element
 * @param {String} localPath  local path to file to be uploaded
 * @callbackParameter error
 *
 * @uses utility/uploadFile, action/addValue
 * @type utility
 *
 */

var fs = require('fs'),
    Q = require('q'),
    ErrorHandler = require('../utils/ErrorHandler.js');

module.exports = function chooseFile(selector, localPath) {

    /*!
     * parameter check
     */
    if(typeof localPath !== 'string') {
        return new ErrorHandler.CommandError('number or type of arguments don\'t agree with chooseFile command');
    }

    /*!
     * mobile check
     */
    if(this.isMobile) {
        return new ErrorHandler.CommandError('chooseFile command is not supported on mobile platforms');
    }

    var self = this,
        defer = Q.defer();

    fs.exists(localPath, function(exists) {

        /* istanbul ignore next */
        if (!exists) {
            throw new ErrorHandler.CommandError('File to upload does not exists on your system');
        }

        self.uploadFile(localPath).then(function(res) {
            return this.addValue(selector, res.value);
        }).then(
            defer.resolve,
            defer.reject
        );

    });

    return defer.promise;

};