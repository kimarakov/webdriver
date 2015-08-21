describe('setViewportSize/getViewportSize', function() {
    before(h.setup());

    it('should change viewport size of current window and should return the exact value', function() {
        return this.client.setViewportSize({
            width: 500,
            height: 500
        }, true).getViewportSize().then(function(size) {
            size.width.should.be.exactly(500);
            size.height.should.be.exactly(500);
        });
    });

    it('should set window size exactly when parameter \'type\' is true by default', function() {
        return this.client.setViewportSize({
            width: 500,
            height: 500
        }).windowHandleSize().then(function(res) {
            res.value.width.should.be.exactly(500);
            res.value.height.should.be.exactly(500);
        });
    });

    it('should let windowHandleSize return bigger values since it includes menu and status bar heights', function() {
        return this.client.setViewportSize({
            width: 500,
            height: 500
        }, false).windowHandleSize().then(function(res) {
            res.value.width.should.be.greaterThan(500);
        });
    });
});