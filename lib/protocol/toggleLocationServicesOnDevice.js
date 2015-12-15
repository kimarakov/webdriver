/**
 *
 * Toggle location services on device.
 *
 * <example>
    :toggleLocationServicesOnDevice.js
    client.toggleLocationServicesOnDevice();
 * </example>
 *
 * @type mobile
 * @for android
 *
 */

let toggleLocationServicesOnDevice = function () {
    return this.requestHandler.create({
        path: '/session/:sessionId/appium/device/toggle_location_services',
        method: 'POST'
    })
}

export default toggleLocationServicesOnDevice
