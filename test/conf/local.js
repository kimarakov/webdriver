module.exports = {
    testPage: {
        url: 'http://127.0.0.1:8080/test/site/www/index.html',
        url2: 'http://127.0.0.1:8080/test/site/www/two.html'
    },
    host: 'localhost',
    port: 4444,
    logLevel: 'silent',
    desiredCapabilities: {
        browserName: 'phantomjs'
    }
};