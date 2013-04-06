/* jshint -W024 */
/* jshint expr:true */

var chai           = require('chai'),
    assert         = chai.assert,
    should         = chai.should(),
    expect         = chai.expect;
    fs             = require('fs'),
    webdriverjs    = require('../index'),
    startSelenium  = require('./startSelenium'),
    testpageURL    = 'http://webdriverjs.christian-bromann.com/',
    githubTitle    = 'GitHub · Build software better, together.',
    testpageTitle  = 'WebdriverJS Testpage',
    testpageSource = "",
    capabilities   = {};

describe('test webdriverjs API', function(){

    this.timeout(99999999);

    var client = {};

    before(function(done){
        // start selenium server if not running
        startSelenium(function() {

            // init client
            capabilities =  {
                'browserName': 'phantomjs',
                // 'chrome.binary': '/Applications/Browser/Google Chrome.app/Contents/MacOS/Google Chrome'
                // 'firefox_binary': '/Applications/Browser/Firefox.app/Contents/MacOS/firefox'
            };

            client = webdriverjs.remote({logLevel:'verbose',desiredCapabilities:capabilities});
            client.init();

            // load source of testpage for getSource() test
            fs.readFile('./test/index.html', function (err, html) {
                if (err) {
                    throw err;
                }
                testpageSource = html.toString();
            });

            done();
        });
    });

    describe('test commands', function(){
        it('get commands should return the evaluated value', function(done){
            client
                .url(testpageURL)
                .getAttribute('.nested', 'style', function(err,result) {
                    expect(err).to.be.null;
                    assert.strictEqual(result,'text-transform: uppercase; ');
                })
                .getElementCssProperty('css selector', '.red', 'background-color', function(err,result) {
                    expect(err).to.be.null;
                    assert.strictEqual('rgba(255, 0, 0, 1)',result);
                })
                .getCssProperty('.green', 'float', function(err,result) {
                    expect(err).to.be.null;
                    assert.strictEqual('left',result);
                })
                .getElementCssProperty('class name', 'yellow', 'width', function(err,result) {
                    expect(err).to.be.null;
                    assert.strictEqual('100px',result);
                })
                .getCssProperty('.black', 'background-color', function(err,result) {
                    expect(err).to.be.null;
                    assert.strictEqual('rgba(0, 0, 0, 1)',result);
                })
                .getElementCssProperty('id', 'purplebox', 'margin-right', function(err,result) {
                    expect(err).to.be.null;
                    assert.strictEqual('10px',result);
                })
                .getCssProperty('.purple', 'margin-right', function(err,result) {
                    expect(err).to.be.null;
                    assert.strictEqual('10px',result);
                })
                .getElementSize('.red', function(err,result) {
                    expect(err).to.be.null;
                    assert.strictEqual(result.width,102);
                    assert.strictEqual(result.height,102);
                })
                .getLocation('.green', function(err,result) {
                    expect(err).to.be.null;
                    assert.strictEqual(result.x,120);
                    assert(result.y === 89 || result.y === 94);
                })
                .getLocationInView('.green', function(err,result) {
                    expect(err).to.be.null;
                    assert.strictEqual(result.x,120);
                    assert(result.y === 89 || result.y === 94);
                })
                .getSource(function(err,result) {
                    expect(err).to.be.null;
                    assert.strictEqual(result,testpageSource);
                })
                .getTagName('.black', function(err,result) {
                    expect(err).to.be.null;
                    assert.strictEqual(result,'div');
                })
                .getTagName('#githubRepo', function(err,result) {
                    expect(err).to.be.null;
                    assert.strictEqual(result,'a');
                })
                .getText('#githubRepo', function(err,result) {
                    expect(err).to.be.null;
                    assert.strictEqual(result,'GitHub Repo');
                })
                .getTitle(function(err,title) {
                    expect(err).to.be.null;
                    assert.strictEqual(title,testpageTitle);
                })
                .call(done);
        });

        it('should set, get and delete cookies',function(done) {
            client
                .url(testpageURL)
                .setCookie({name: 'test',value: 'cookie saved!'})
                .getCookie('test', function(err,result) {
                    expect(err).to.be.null;
                    assert.strictEqual(result.name,'test');
                    assert.strictEqual(result.value,'cookie saved!');
                })
                .deleteCookie('test')
                .getCookie('test', function(err,result) {
                    expect(err).to.be.null;
                    assert.strictEqual(result,null);
                })
                .call(done);
        });

        it('back/foward should return to the previous/next page', function(done) {
            client
                .url(testpageURL)
                .getTitle(function(err,title) {
                    expect(err).to.be.null;
                    assert.strictEqual(title,testpageTitle);
                })
                .click('#githubRepo')
                // waitFor fix, to get safari a little bit more time to load
                .waitFor('.teaser-illustration',5000)
                .getTitle(function(err,title) {
                    expect(err).to.be.null;
                    assert.strictEqual(title,githubTitle);
                })
                .back()
                // waitFor fix, to get safari a little bit more time to load
                .waitFor('.public',5000)
                .getTitle(function(err,title) {
                    expect(err).to.be.null;
                    assert.strictEqual(title,testpageTitle);
                })
                .forward()
                .waitFor('.teaser-illustration',5000)
                .getTitle(function(err,title) {
                    expect(err).to.be.null;
                    assert.strictEqual(title,githubTitle);
                })
                .call(done);
        });

        it('click command test',function(done) {
            client
                .url(testpageURL)
                .isVisible('.btn1',function(err,result) {
                    expect(err).to.be.null;
                    if(result) {
                        client.click('.btn1',function(err,result) {
                            expect(err).to.be.null;
                            result.status.should.equal(0);
                        });
                    }
                })
                .isVisible('.btn1_clicked',function(err,result){
                    expect(err).to.be.null;
                    assert(result, '.btn1 was clicked');
                })
                .isVisible('.btn2',function(err,result) {
                    expect(err).to.be.null;
                    if(result) {
                        client.click('.btn2',function(err,result) {
                            expect(err).to.be.null;
                            result.status.should.equal(0);
                        });
                    }
                })
                .isVisible('.btn2_clicked',function(err,result){
                    expect(err).to.be.null;
                    assert(!result, '.btn2 wasn\'t clicked');
                })
                .isVisible('.btn3',function(err,result) {
                    expect(err).to.be.null;
                    if(result) {
                        client.click('.btn3',function(err,result) {
                            expect(err).to.be.null;
                            // phantomjs is able to click on a not clickable button
                            if(capabilities.browserName === 'phantomjs') {
                                result.status.should.equal(0);
                            } else {
                                result.status.should.equal(13);
                            }
                        });
                    }
                })
                .saveScreenshot('test.png')
                .isVisible('.btn3_clicked',function(err,result){
                    expect(err).to.be.null;

                    // phantomjs is able to click on a not clickable button
                    if(capabilities.browserName === 'phantomjs') {
                        assert(result, '.btn3 wasn\'t clicked');
                    } else {
                        assert(!result, '.btn3 was clicked');
                    }
                })
                .isVisible('.btn4',function(err,result) {
                    expect(err).to.be.null;
                    if(result) {
                        client.click('.btn4',function(err,result) {
                            expect(err).to.be.null;
                            result.status.should.equal(0);
                        });
                    }
                })
                .isVisible('.btn4_clicked',function(err,result){
                    expect(err).to.be.null;

                    // it is possible to click on a button with width/height = 0
                    assert(result, '.btn3 was clicked');
                })
                .call(done);
        });

        it('test addCommand feature',function(done) {
            client
                .addCommand("getUrlAndTitle", function(callback) {
                    this.url(function(err,urlResult) {
                        this.getTitle(function(err,titleResult) {
                            var specialResult = {url: urlResult.value, title: titleResult};
                            if (typeof callback == "function") {
                                callback(err,specialResult);
                            }
                        });
                    });
                })
                .url('http://www.github.com')
                .getUrlAndTitle(function(err,result){
                    expect(err).to.be.null;
                    assert.strictEqual(result.url,'https://github.com/');
                    assert.strictEqual(result.title,'GitHub · Build software better, together.');
                })
                .call(done);
        });

    });

    after(function() {
        client.end();
    });
});