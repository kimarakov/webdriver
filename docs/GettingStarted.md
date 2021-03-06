---
id: gettingstarted
title: Getting Started
---

Welcome to the WebdriverIO documentation. It will help you to get started fast. If you run into problems you can find help and answers on our [Gitter Channel](https://gitter.im/webdriverio/webdriverio) or you can hit me on [Twitter](https://twitter.com/webdriverio). Also, if you encounter problems in starting up the server or running the tests after following this tutorial, ensure that the server and the geckodriver are listed in your project directory. If not, re-download them per steps 2 and 3 below.

> __Note:__ These are the docs for the latest version (>= v5.0.0) of WebdriverIO. If you are still using v4 or older please use the legacy docs website [v4.webdriver.io](http://v4.webdriver.io)!

The following will give you a short step by step introduction to get your first WebdriverIO script up and running.

## Taking the first step

Let's suppose you have [Node.js](http://nodejs.org/) already installed. If you don't have Node installed, we recommend installing [NVM](https://github.com/creationix/nvm) to assist managing multiple active Node.js versions. First thing we need to do is to download a browser driver that helps us automate the browser. To do so we create an example folder first:

### Create a simple test folder

```sh
$ mkdir webdriverio-test && cd webdriverio-test
```

*While still in this test folder:*

### Download Geckodriver

Download the latest version of geckodriver for your environment and unpack it in your project directory:

Linux 64 bit

```sh
$ curl -L https://github.com/mozilla/geckodriver/releases/download/v0.21.0/geckodriver-v0.21.0-linux64.tar.gz | tar xz
```

OSX

```sh
$ curl -L https://github.com/mozilla/geckodriver/releases/download/v0.21.0/geckodriver-v0.21.0-macos.tar.gz | tar xz
```

Windows 64 bit

Simple setup: ([Chocolatey](https://chocolatey.org/))
```sh
choco install selenium-gecko-driver
```

For advanced users (Powershell):
```sh
# Run as privileged session. Right-click and set 'Run as Administrator'
# Use geckodriver-v0.21.0-win32.zip for 32 bit Windows
$url = "https://github.com/mozilla/geckodriver/releases/download/v0.21.0/geckodriver-v0.21.0-win64.zip"
$output = "geckodriver.zip" # will drop into current directory unless defined otherwise
$unzipped_file = "geckodriver" # will unzip to this folder name

# By default, Powershell uses TLS 1.0 the site security requires TLS 1.2
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

# Downloads Geckodriver
Invoke-WebRequest -Uri $url -OutFile $output

# Unzip Geckodriver
Expand-Archive $output -DestinationPath $unzipped_file
cd $unzipped_file

# Globally Set Geckodriver to PATH
[System.Environment]::SetEnvironmentVariable("PATH", "$Env:Path;$pwd\geckodriver.exe", [System.EnvironmentVariableTarget]::Machine)
```

Note: Other geckodriver releases are available [here](https://github.com/mozilla/geckodriver/releases). In order to automate other browser you need to run different drivers. You can find a list with all drivers in the [awesome-selenium](https://github.com/christian-bromann/awesome-selenium#driver) readme.

### Start Browser Driver

Start Geckodriver by running:

```sh
$ /path/to/binary/geckodriver --port 4444
```

This will start Geckodriver on `localhost:4444` with the WebDriver endpoint set to `/`. Keep this running in the background and open a new terminal window. Next step is to download WebdriverIO via NPM:

### Download WebdriverIO

By calling:

```sh
$ npm install webdriverio
```

### Create Test File

Create a test file (e.g. `test.js`) with the following content:

```js
const { remote } = require('webdriverio');

(async () => {
    const browser = await remote({
        logLevel: 'error',
        path: '/',
        capabilities: {
            browserName: 'firefox'
        }
    });

    await browser.url('https://webdriver.io');

    const title = await browser.getTitle();
    console.log('Title was: ' + title);

    await browser.deleteSession();
})().catch((e) => console.error(e));
```

### Run your test file

Make sure you have at least Node.js v8.11.2 or higher installed. To update your current running Node.js version install [nvm](https://github.com/creationix/nvm) and follow their instructions. Once that is done run the test script by calling:

```sh
$ node test.js
```

this should output the following:

```sh
Title was: WebdriverIO ?? Next-gen WebDriver test framework for Node.js
```

Yay, Congratulations! You've just run your first automation script with WebdriverIO. Let's step it up a notch and create a real test.

## Let's get serious

*(If you haven't already, navigate back to the project root directory)*

This was just a warm up. Let's move forward and run WebdriverIO with the test runner. If you want to use WebdriverIO in your project for integration testing we recommend to use the test runner because it comes with a lot of useful features that makes your life easier. With WebdriverIO v5 and up the testrunner has moved into the [`@wdio/cli`](https://www.npmjs.com/package/@wdio/cli) NPM package. To get started, we need to install this first:

```sh
$ npm i --save-dev @wdio/cli
```

### Generate Configuration File

To do that just run the configuration utility:

```sh
$ ./node_modules/.bin/wdio config
```

A question interface pops up. It will help to create the config easy and fast. If you are not sure what to answer follow this answers:

__Q: Where should your tests be launched?__<br>
A: _local_<br>
<br>
__Q: Shall I install the runner plugin for you?__<br>
A: _Yes_<br>
<br>
__Q: Where is your automation backend located?__<br>
A: _On my local machine_<br>
<br>
__Q: Which framework do you want to use?__<br>
A: _mocha_<br>
<br>
__Q: Shall I install the framework adapter for you?__<br>
A: _Yes_ (just press enter)<br>
<br>
__Q: Do you want to run WebdriverIO commands synchronous or asynchronous?__<br>
A: _sync_ (just press enter, you can also run commands async and handle promises by yourself but for the sake of simplicity let's run them synchronously)<br>
<br>
__Q: Where are your test specs located?__<br>
A: _./test/specs/**/*.js_ (just press enter)<br>
<br>
__Q: Which reporter do you want to use?__<br>
A: _dot_ (just press space and enter)<br>
<br>
__Q: Shall I install the reporter library for you?__<br>
A: _Yes_ (just press enter)<br>
<br>
__Q: Do you want to add a service to your test setup?__<br>
A: none (just press enter, let's skip this for simplicity)<br>
<br>
__Q: Level of logging verbosity:__<br>
A: _trace_<br>
<br>
__Q: What is the base url?__<br>
A: _http://localhost_ (just press enter)<br>

That's it! The configurator now installs all required packages for you and creates a config file with the name `wdio.conf.js`. As we're using Geckodriver, we need to override the default path (which uses the Selenium's default of `/wd/hub`). Then, we'll be ready to create your first spec file (test file).

### Configure the path
Edit the `wdio.conf.js` file to specify the path (e.g. right after the baseUrl setting):

```
    //
    // Override the default path of /wd/hub
    path: '/',
```


### Create Spec Files

For that create a test folder like this:

```sh
$ mkdir -p ./test/specs
```

Now let's create a simple spec file in that new folder:

```js
const assert = require('assert');

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io');
        const title = browser.getTitle();
        assert.equal(title, 'WebdriverIO ?? Next-gen WebDriver test framework for Node.js');
    });
});
```

### Kick Off Testrunner

The last step is to execute the test runner. To do so just run:

```sh
$ ./node_modules/.bin/wdio wdio.conf.js
```

Hurray! The test should pass and you can start writing integration tests with WebdriverIO. If you are interested in more in depth video on-boarding tutorials, feel free to check out our very own course called [learn.webdriver.io](https://learn.webdriver.io/?coupon=wdio). Also our community has collected a lot of [boilerplate projects](BoilerplateProjects.md) that can help you to get started.
