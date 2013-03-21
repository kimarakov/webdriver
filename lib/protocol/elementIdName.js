exports.command = function (id, callback) {

    var requestOptions = {
        path:"/session/:sessionId/element/:id/name",
        method:"GET"
    };

    requestOptions.path = requestOptions.path.replace(/:id/gi, id);

    this.executeProtocolCommand(
        requestOptions,
        this.proxyResponse(callback),
        {}
    );
};
