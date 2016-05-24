/**
 *
 * Apply right click on an element. If selector is not provided, click on the last
 * moved-to location.
 *
 * @param {String} selector element to click on
 *
 * @uses protocol/element, protocol/buttonPress
 * @type action
 *
 */

import handleMouseButtonCommand from '../helpers/handleMouseButtonCommand'

let rightClick = function (selector, xoffset, yoffset) {
    return handleMouseButtonCommand.call(this, selector, 'right', xoffset, yoffset)
}

export default rightClick
