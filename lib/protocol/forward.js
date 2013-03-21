exports.command = function (callback) {

    if(this.desiredCapabilities.browserName === 'safari') {

        this.execute('history.go(+1)');

    } else {

        var commandOptions = {
            path:"/session/:sessionId/forward",
            method:"POST"
        };

        this.executeProtocolCommand(
            commandOptions,
            this.proxyResponseNoReturn(callback),
            {}
        );

    }
};
