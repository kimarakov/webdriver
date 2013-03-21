exports.command = function (id, keys, callback) {

    var requestOptions = {
        path:"/session/:sessionId/element/:id/value",
        method:"POST"
    };

    requestOptions.path = requestOptions.path.replace(/:id/gi, id);

    this.executeProtocolCommand(
        requestOptions,
        this.proxyResponseNoReturn(callback),
        {"value":keys}
    );

};
