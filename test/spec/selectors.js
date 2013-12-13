describe('test different selector strategies', function () {
    before(h.setup);

    it('should find an element using "css selector" method',function(done) {
        this.client
            .isVisible('.red',function(err,isVisible) {
                assert.equal(null, err);
                assert.equal(isVisible,true);
            })
            .call(done);
    });

    it('should find an element using "id" method',function(done) {
        this.client
            .isVisible('#purplebox',function(err,isVisible) {
                assert.equal(null, err);
                assert.equal(isVisible,true);
            })
            .call(done);
    });

    it('should find an element using "name" method',function(done) {
        this.client
            .isVisible('[name="searchinput"]',function(err,isVisible) {
                assert.equal(null, err);
                assert.equal(isVisible,true);
            })
            .call(done);
    });

    it('should find an element using "link text" method',function(done) {
        this.client
            .isVisible('=GitHub Repo',function(err,isVisible) {
                assert.equal(null, err);
                assert.equal(isVisible,true);
            })
            .call(done);
    });

    it('should find an element using "partial link text" method',function(done) {
        this.client
            .isVisible('*=Repo',function(err,isVisible) {
                assert.equal(null, err);
                assert.equal(isVisible,true);
            })
            .call(done);
    });

    it('should find an element using "tag name" method and tag format <XXX />',function(done) {
        this.client
            .isVisible('<textarea />',function(err,isVisible) {
                assert.equal(null, err);
                assert.equal(isVisible,true);
            })
            .call(done);
    });

    it('should find an element using "tag name" method and tag format <XXX>',function(done) {
        this.client
            .isVisible('<textarea>',function(err,isVisible) {
                assert.equal(null, err);
                assert.equal(isVisible,true);
            })
            .call(done);
    });

    it('should find an element using "xpath" method',function(done) {
        this.client
            .isVisible('//BODY/DIV[6]/DIV[1]/SPAN[1]',function(err,isVisible) {
                assert.equal(null, err);
                assert.equal(isVisible,true);
            })
            .call(done);
    });
});
