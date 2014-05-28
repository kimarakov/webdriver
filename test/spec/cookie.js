
describe('cookie command test', function() {

    before(h.setup());

    it('getCookie should return null / [] if no cookie(s) is/are set', function(done){
        this.client
            .getCookie('test', function(err,cookie) {
                assert.ifError(err);
                (cookie === null).should.be.true;
            })
            .getCookie(function(err,cookies) {
                assert.ifError(err);
                cookies.should.have.length(0);
            })
            .call(done);
    });

    it('getCookie should return multiple cookies if no name is given', function(done){
        this.client
            .setCookie({name: 'test',value: 'cookie saved!'})
            .setCookie({name: 'test2',value: 'cookie saved2!'})
            .getCookie(function(err,cookies) {
                assert.ifError(err);
                cookies.should.be.an.instanceOf(Array);
                cookies.should.have.length(2);
                cookies.should.containDeep([{ value: 'cookie saved!' }]);
                cookies.should.containDeep([{ value: 'cookie saved2!' }]);
                cookies.should.containDeep([{ name: 'test' }]);
                cookies.should.containDeep([{ name: 'test2' }]);
                cookies.should.containDeep([{ path: '/' }]);
                cookies.should.containDeep([{ domain: '127.0.0.1' }]);
                cookies.should.containDeep([{ secure: false }]);
                cookies.should.containDeep([{ httpOnly: false }]);
            })
            .call(done);
    });

    it('getCookie should return a single cookies if name is given', function(done){
        this.client
            .setCookie({name: 'test',value: 'cookie saved!'})
            .setCookie({name: 'test2',value: 'cookie saved2!'})
            .getCookie('test2',function(err,cookie) {
                assert.ifError(err);
                cookie.should.be.an.instanceOf(Object);
                cookie.value.should.be.exactly('cookie saved2!');
                cookie.name.should.be.exactly('test2');
                cookie.path.should.be.exactly('/');
                cookie.domain.should.be.exactly('127.0.0.1');
                cookie.secure.should.be.exactly(false);
                cookie.httpOnly.should.be.exactly(false);
            })
            .call(done);
    });

    it('deleteCookie should delete a specific cookie', function(done) {
        this.client
            .setCookie({ name: 'test', value: 'cookie saved!' })
            .setCookie({ name: 'test2', value: 'cookie2 saved!' })
            .deleteCookie('test')
            .getCookie('test', function(err, result) {
                assert.ifError(err);
                assert.strictEqual(result, null);
            })
            .getCookie(function(err, result) {
                assert.ifError(err);
                assert.notStrictEqual(result, null);
            })
            .call(done);
    });

    it('deleteCookie should delete all cookies', function(done) {
        this.client
            .setCookie({ name: 'test', value: 'cookie saved!' })
            .setCookie({ name: 'test2', value: 'cookie2 saved!' })
            .deleteCookie()
            .getCookie(function(err, result) {
                assert.ifError(err);
                assert.strictEqual(result.length, 0);
            })
            .call(done);
    });

});