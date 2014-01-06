module.exports = function tap (selector, tapCount, touchCount, duration, x, y, callback) {

    if(arguments.length === 0) {
        throw 'command tap requires at least one argument';
    }

    if(arguments.length === 2 && typeof tapCount === 'function') {
        callback = tapCount;
        tapCount = null;
    } else if(arguments.length === 3 && typeof touchCount === 'function') {
        callback = touchCount;
        touchCount = null;
    } else if(arguments.length === 4 && typeof duration === 'function') {
        callback = duration;
        duration = null;
    } else if(arguments.length === 5 && typeof x === 'function') {
        callback = x;
        x = null;
    } else if(arguments.length === 6 && typeof y === 'function') {
        callback = y;
        y = null;
    }

    if(typeof selector === 'string' && selector !== '') {

        this.element(selector, function(err,res) {

            if(err === null && res.value) {

                this.touchTap(tapCount, touchCount, duration, x, y, res.value.ELEMENT, callback);

            } else {

                if(typeof callback === 'function') {

                    callback(err,res);

                }

            }

        });

    } else {

        this.touchTap(tapCount, touchCount, duration, x, y, null, callback);

    }

};

