/**
 *
 * Get informations about the current network connection (Data/WIFI/Airplane).
 *
 * @type mobile
 * @for selendroid
 *
 */

let getNetworkConnection = function () {
    return this.requestHandler.create({
        path: '/session/:sessionId/network_connection',
        method: 'GET'
    })
}

export default getNetworkConnection
