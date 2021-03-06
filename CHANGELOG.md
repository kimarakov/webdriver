# Changelog

> **Tags:**
> - :boom:       [Breaking Change]
> - :eyeglasses: [Spec Compliancy]
> - :rocket:     [New Feature]
> - :bug:        [Bug Fix]
> - :memo:       [Documentation]
> - :house:      [Internal]
> - :nail_care:  [Polish]

_Note: Gaps between patch versions are faulty, broken or test releases._

See [CHANGELOG - v4](https://github.com/webdriverio-boneyard/v4/blob/master/CHANGELOG.md).

---



## 5.4.16 (2019-02-07)

#### :bug: Bug Fix
* `wdio-allure-reporter`
  * [#3521](https://github.com/webdriverio/webdriverio/pull/3521) wdio-allure-reporter: fix test skip ([@mgrybyk](https://github.com/mgrybyk))

#### :memo: Documentation
* [#3522](https://github.com/webdriverio/webdriverio/pull/3522) Highlight talk from Selenium meetup ([@christian-bromann](https://github.com/christian-bromann))
* [#3519](https://github.com/webdriverio/webdriverio/pull/3519) Webdriverio: fix Hooks interface ([@erwinheitzman](https://github.com/erwinheitzman))

#### Committers: 3
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))
- Erwin Heitzman ([@erwinheitzman](https://github.com/erwinheitzman))
- Mykola Grybyk ([@mgrybyk](https://github.com/mgrybyk))

## 5.4.15 (2019-02-06)

#### :eyeglasses: Spec Compliancy
* `webdriver`
  * [#3511](https://github.com/webdriverio/webdriverio/pull/3511) webdriver: hack to make chrome support element.saveScreenshot() ([@abjerstedt](https://github.com/abjerstedt))

#### :nail_care: Polish
* `wdio-allure-reporter`, `wdio-reporter`
  * [#3510](https://github.com/webdriverio/webdriverio/pull/3510) wdio-reporter: create outputDir directory if does not exist ([@klamping](https://github.com/klamping))

#### Committers: 2
- Adam Bjerstedt ([@abjerstedt](https://github.com/abjerstedt))
- Kevin Lamping ([@klamping](https://github.com/klamping))

## 5.4.14 (2019-02-05)

#### :bug: Bug Fix
* `wdio-config`
  * [#3496](https://github.com/webdriverio/webdriverio/pull/3496) Fix/3492 fix multi remote ([@wswebcreation](https://github.com/wswebcreation))
* `wdio-runner`, `webdriverio`
  * [#3506](https://github.com/webdriverio/webdriverio/pull/3506) Fix Appium reload session ([@mgrybyk](https://github.com/mgrybyk))

#### :memo: Documentation
* Other
  * [#3503](https://github.com/webdriverio/webdriverio/pull/3503) Update GettingStarted.md ([@pablopaul](https://github.com/pablopaul))
  * [#3508](https://github.com/webdriverio/webdriverio/pull/3508) Update GettingStarted.md ([@goatsy](https://github.com/goatsy))
  * [#3500](https://github.com/webdriverio/webdriverio/pull/3500) Update contributing docs now that v5 is fully released ([@klamping](https://github.com/klamping))
* `wdio-jasmine-framework`, `wdio-mocha-framework`, `wdio-selenium-standalone-service`
  * [#3497](https://github.com/webdriverio/webdriverio/pull/3497) fix Suite and Test typings for #3495 ([@mgrybyk](https://github.com/mgrybyk))

#### :house: Internal
* `wdio-cli`
  * [#3501](https://github.com/webdriverio/webdriverio/pull/3501) wdio-cli: remove timeline option from reporters ([@klamping](https://github.com/klamping))

#### Committers: 5
- Kevin Lamping ([@klamping](https://github.com/klamping))
- Mykola Grybyk ([@mgrybyk](https://github.com/mgrybyk))
- Paul Vincent Beigang ([@pablopaul](https://github.com/pablopaul))
- Wim Selles ([@wswebcreation](https://github.com/wswebcreation))
- [@goatsy](https://github.com/goatsy)

## 5.4.13 (2019-02-02)

#### :rocket: New Feature
* `wdio-cli`, `wdio-config`
  * [#3468](https://github.com/webdriverio/webdriverio/pull/3468) Add automatically determination of the RDC hostname for US/EU ([@wswebcreation](https://github.com/wswebcreation))

#### :bug: Bug Fix
* `webdriver`
  * [#3487](https://github.com/webdriverio/webdriverio/pull/3487) Fixing element not found for iPhone ([@abjerstedt](https://github.com/abjerstedt))

#### Committers: 2
- Adam Bjerstedt ([@abjerstedt](https://github.com/abjerstedt))
- Wim Selles ([@wswebcreation](https://github.com/wswebcreation))

## 5.4.12 (2019-02-02)

#### :bug: Bug Fix
* `webdriver`
  * [#3486](https://github.com/webdriverio/webdriverio/pull/3486) Fixing Regression for chrome stale elements ([@abjerstedt](https://github.com/abjerstedt))

#### Committers: 1
- Adam Bjerstedt ([@abjerstedt](https://github.com/abjerstedt))

## 5.4.11 (2019-02-02)

#### :nail_care: Polish
* `wdio-browserstack-service`, `wdio-config`
  * [#3485](https://github.com/webdriverio/webdriverio/pull/3485) Updating Browserstack to use SSL ([@abjerstedt](https://github.com/abjerstedt))

#### Committers: 1
- Adam Bjerstedt ([@abjerstedt](https://github.com/abjerstedt))

## 5.4.10 (2019-02-02)

#### :bug: Bug Fix
* `wdio-cli`
  * [#3422](https://github.com/webdriverio/webdriverio/pull/3422) Fix handling of yarn-managed node_modules ([@ccope](https://github.com/ccope))

#### :nail_care: Polish
* `wdio-webdriver-mock-service`, `webdriver`, `webdriverio`
  * [#3482](https://github.com/webdriverio/webdriverio/pull/3482) Updating stale element handling ([@abjerstedt](https://github.com/abjerstedt))
* `wdio-cli`
  * [#3469](https://github.com/webdriverio/webdriverio/pull/3469) Update config.js ([@daphnemcrossbrowser](https://github.com/daphnemcrossbrowser))
* `webdriverio`
  * [#3481](https://github.com/webdriverio/webdriverio/pull/3481) Fix 3480 ([@needforspeed](https://github.com/needforspeed))

#### :memo: Documentation
* Other
  * [#3474](https://github.com/webdriverio/webdriverio/pull/3474) Fixed type error for CSSProperty #3473 ([@dalenguyen](https://github.com/dalenguyen))
  * [#3470](https://github.com/webdriverio/webdriverio/pull/3470) add missing allure-reporter typings template ([@mgrybyk](https://github.com/mgrybyk))
* `wdio-jasmine-framework`, `wdio-mocha-framework`, `wdio-selenium-standalone-service`
  * [#3477](https://github.com/webdriverio/webdriverio/pull/3477) Extendable typings ([@ablok](https://github.com/ablok))
* `webdriverio`
  * [#3478](https://github.com/webdriverio/webdriverio/pull/3478) changed browser.close() to browser.closeWindow() ([@balukov](https://github.com/balukov))

#### :house: Internal
* `webdriverio`
  * [#3484](https://github.com/webdriverio/webdriverio/pull/3484) webdriverio: adding more addCommand UTs ([@abjerstedt](https://github.com/abjerstedt))

#### Committers: 8
- Adam Bjerstedt ([@abjerstedt](https://github.com/abjerstedt))
- Arjan Blok ([@ablok](https://github.com/ablok))
- Cam Cope ([@ccope](https://github.com/ccope))
- Dale Nguyen ([@dalenguyen](https://github.com/dalenguyen))
- Daphne Magsby ([@daphnemcrossbrowser](https://github.com/daphnemcrossbrowser))
- Mykola Grybyk ([@mgrybyk](https://github.com/mgrybyk))
- Yuncong Zhang ([@needforspeed](https://github.com/needforspeed))
- [@balukov](https://github.com/balukov)

## 5.4.9 (2019-01-31)

#### :bug: Bug Fix
* `webdriver`
  * [#3465](https://github.com/webdriverio/webdriverio/pull/3465) Fix type generation ([@christian-bromann](https://github.com/christian-bromann))
* `wdio-cli`
  * [#3464](https://github.com/webdriverio/webdriverio/pull/3464) Exit program on next tick ([@christian-bromann](https://github.com/christian-bromann))

#### :memo: Documentation
* `wdio-junit-reporter`
  * [#3463](https://github.com/webdriverio/webdriverio/pull/3463) Fix image path for jenkins job ([@christian-bromann](https://github.com/christian-bromann))
* `wdio-allure-reporter`
  * [#3461](https://github.com/webdriverio/webdriverio/pull/3461) wdio-allure-reporter: generate typings ([@mgrybyk](https://github.com/mgrybyk))

#### Committers: 2
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))
- Mykola Grybyk ([@mgrybyk](https://github.com/mgrybyk))

## 5.4.8 (2019-01-29)

#### :bug: Bug Fix
* `wdio-allure-reporter`
  * [#3444](https://github.com/webdriverio/webdriverio/pull/3444) Fix allure multiremote ([@mgrybyk](https://github.com/mgrybyk))

#### :nail_care: Polish
* `wdio-jasmine-framework`
  * [#3453](https://github.com/webdriverio/webdriverio/pull/3453) Fix jasmine logger name ([@christian-bromann](https://github.com/christian-bromann))
* `wdio-sauce-service`
  * [#3446](https://github.com/webdriverio/webdriverio/pull/3446) feat: add RDC API to service ([@wswebcreation](https://github.com/wswebcreation))
* `webdriver`, `webdriverio`
  * [#3428](https://github.com/webdriverio/webdriverio/pull/3428) Temporary workaround for addValue and setValue ([@mgrybyk](https://github.com/mgrybyk))
* `wdio-mocha-framework`
  * [#3423](https://github.com/webdriverio/webdriverio/pull/3423) mocha-framework: add file property ([@ablok](https://github.com/ablok))
* `webdriverio`
  * [#3436](https://github.com/webdriverio/webdriverio/pull/3436) Improve regexp to support custom elements that contain multiple dashes ([@erwinheitzman](https://github.com/erwinheitzman))
  * [#3435](https://github.com/webdriverio/webdriverio/pull/3435) Fix the findStrategy for querying elements by tagname and content ([@erwinheitzman](https://github.com/erwinheitzman))

#### :memo: Documentation
* `wdio-junit-reporter`
  * [#3452](https://github.com/webdriverio/webdriverio/pull/3452) Update README.md ([@bearnecessities](https://github.com/bearnecessities))
* Other
  * [#3438](https://github.com/webdriverio/webdriverio/pull/3438) doc: fix xpath position ([@morokosi](https://github.com/morokosi))

#### Committers: 7
- Arjan Blok ([@ablok](https://github.com/ablok))
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))
- Danny ([@bearnecessities](https://github.com/bearnecessities))
- Erwin Heitzman ([@erwinheitzman](https://github.com/erwinheitzman))
- Mykola Grybyk ([@mgrybyk](https://github.com/mgrybyk))
- Wim Selles ([@wswebcreation](https://github.com/wswebcreation))
- Yohei Kishimoto ([@morokosi](https://github.com/morokosi))

## 5.4.7 (2019-01-26)

#### :eyeglasses: Spec Compliancy
* `webdriver`
  * [#3432](https://github.com/webdriverio/webdriverio/pull/3432) Add new performance command for sauce protocol ([@christian-bromann](https://github.com/christian-bromann))

#### Committers: 1
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))

## 5.4.6 (2019-01-26)

#### :nail_care: Polish
* `wdio-cli`, `wdio-interface`, `webdriverio`
  * [#3430](https://github.com/webdriverio/webdriverio/pull/3430) Allow displaying logs in realtime ([@christian-bromann](https://github.com/christian-bromann))
* `wdio-logger`
  * [#3427](https://github.com/webdriverio/webdriverio/pull/3427) change logger imports/exports for optimized webpack bundling ([@jlipps](https://github.com/jlipps))

#### Committers: 2
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))
- Jonathan Lipps ([@jlipps](https://github.com/jlipps))

## 5.4.5 (2019-01-25)

#### :nail_care: Polish
* `wdio-cli`
  * [#3420](https://github.com/webdriverio/webdriverio/pull/3420) Fix param for getRunnerName ([@christian-bromann](https://github.com/christian-bromann))

#### Committers: 1
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))

## 5.4.4 (2019-01-25)

#### :house: Internal
* `wdio-applitools-service`
  * [#3419](https://github.com/webdriverio/webdriverio/pull/3419) use eyes.webdriverio fork version to support v5 ([@christian-bromann](https://github.com/christian-bromann))

#### Committers: 1
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))

## 5.4.3 (2019-01-24)

#### :bug: Bug Fix
* `wdio-allure-reporter`, `wdio-runner`
  * [#3418](https://github.com/webdriverio/webdriverio/pull/3418) Allow custom services with options ([@christian-bromann](https://github.com/christian-bromann))
* `wdio-webdriver-mock-service`, `webdriverio`
  * [#3415](https://github.com/webdriverio/webdriverio/pull/3415) Fix waitForXXX calls ([@christian-bromann](https://github.com/christian-bromann))

#### :nail_care: Polish
* `wdio-reporter`, `wdio-spec-reporter`
  * [#3417](https://github.com/webdriverio/webdriverio/pull/3417) Include link to job details page from Sauce Labs ([@christian-bromann](https://github.com/christian-bromann))
* `wdio-runner`
  * [#3414](https://github.com/webdriverio/webdriverio/pull/3414) Ignore if logs can't be received ([@christian-bromann](https://github.com/christian-bromann))
* `wdio-cli`
  * [#3413](https://github.com/webdriverio/webdriverio/pull/3413) Better identify runner when running mobile tests ([@christian-bromann](https://github.com/christian-bromann))
* `wdio-config`, `wdio-runner`
  * [#3411](https://github.com/webdriverio/webdriverio/pull/3411) Better error handling when config file is corrupted ([@christian-bromann](https://github.com/christian-bromann))

#### :memo: Documentation
* [#3409](https://github.com/webdriverio/webdriverio/pull/3409) Update typescript setup docs ([@mgrybyk](https://github.com/mgrybyk))

#### Committers: 2
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))
- Mykola Grybyk ([@mgrybyk](https://github.com/mgrybyk))

## 5.4.2 (2019-01-24)

#### :bug: Bug Fix
* `wdio-config`, `wdio-repl`, `wdio-sync`, `webdriver`, `webdriverio`
  * [#3403](https://github.com/webdriverio/webdriverio/pull/3403) Run custom commands in fiber context ([@christian-bromann](https://github.com/christian-bromann))

#### :memo: Documentation
* [#3401](https://github.com/webdriverio/webdriverio/pull/3401) webdriverio: improve typing for remote() function ([@CrispusDH](https://github.com/CrispusDH))
* [#3402](https://github.com/webdriverio/webdriverio/pull/3402) Update TypeScript.md ([@domoritz](https://github.com/domoritz))
* [#3391](https://github.com/webdriverio/webdriverio/pull/3391) Updated Boilerplate Projects ([@amiya-pattnaik](https://github.com/amiya-pattnaik))

#### Committers: 4
- Amiya Pattanaik ([@amiya-pattnaik](https://github.com/amiya-pattnaik))
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))
- Dominik Moritz ([@domoritz](https://github.com/domoritz))
- Oleksii ([@CrispusDH](https://github.com/CrispusDH))

## 5.4.1 (2019-01-23)

#### :nail_care: Polish
* `wdio-logger`
  * [#3398](https://github.com/webdriverio/webdriverio/pull/3398) guard against bad console method access in web version of logger ([@jlipps](https://github.com/jlipps))

#### Committers: 1
- Jonathan Lipps ([@jlipps](https://github.com/jlipps))

## 5.4.0 (2019-01-23)

#### :eyeglasses: Spec Compliancy
* `webdriver`
  * [#3383](https://github.com/webdriverio/webdriverio/pull/3383) Add command to open a new top-level browsing context ([@christian-bromann](https://github.com/christian-bromann))
  * [#3374](https://github.com/webdriverio/webdriverio/pull/3374) Webdriver: Fix support on touchId documentation ([@marthinus-engelbrecht](https://github.com/marthinus-engelbrecht))
  * [#3375](https://github.com/webdriverio/webdriverio/pull/3375) Webdriver: Fix endpoint for Appium sendSms ([@marthinus-engelbrecht](https://github.com/marthinus-engelbrecht))

#### :bug: Bug Fix
* `wdio-cli`, `webdriver`
  * [#3377](https://github.com/webdriverio/webdriverio/pull/3377) Logging Changes ([@abjerstedt](https://github.com/abjerstedt))

#### :memo: Documentation
* Other
  * [#3397](https://github.com/webdriverio/webdriverio/pull/3397) webdriverio: update types for remote() ([@CrispusDH](https://github.com/CrispusDH))
  * [#3376](https://github.com/webdriverio/webdriverio/pull/3376) Added Accessibility Test to TypeScript boilerplate ([@dalenguyen](https://github.com/dalenguyen))
  * [#3261](https://github.com/webdriverio/webdriverio/pull/3261) Update GettingStarted.md ([@dmhalejr](https://github.com/dmhalejr))
  * [#3369](https://github.com/webdriverio/webdriverio/pull/3369) Update TypeScript.md ([@domoritz](https://github.com/domoritz))
* `wdio-allure-reporter`
  * [#3380](https://github.com/webdriverio/webdriverio/pull/3380) Fix allure docs ([@BorisOsipov](https://github.com/BorisOsipov))

#### :house: Internal
* `wdio-mocha-framework`
  * [#3394](https://github.com/webdriverio/webdriverio/pull/3394) wdio-mocha-framework: upgrading mocha version ([@abjerstedt](https://github.com/abjerstedt))
* `wdio-testingbot-service`
  * [#3382](https://github.com/webdriverio/webdriverio/pull/3382) Removing flaky test - this should not be a UT ([@abjerstedt](https://github.com/abjerstedt))
* Other
  * [#3371](https://github.com/webdriverio/webdriverio/pull/3371) Update --question.md ([@domoritz](https://github.com/domoritz))

#### Committers: 9
- Adam Bjerstedt ([@abjerstedt](https://github.com/abjerstedt))
- Boris Osipov ([@BorisOsipov](https://github.com/BorisOsipov))
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))
- Dale Nguyen ([@dalenguyen](https://github.com/dalenguyen))
- David Hale ([@dmhalejr](https://github.com/dmhalejr))
- Dominik Moritz ([@domoritz](https://github.com/domoritz))
- Marthinus Engelbrecht ([@marthinus-engelbrecht](https://github.com/marthinus-engelbrecht))
- Nami Varthakavi ([@nami-varthakavi](https://github.com/nami-varthakavi))
- Oleksii ([@CrispusDH](https://github.com/CrispusDH))

## 5.3.5 (2019-01-18)

#### :nail_care: Polish
* `webdriver`
  * [#3364](https://github.com/webdriverio/webdriverio/pull/3364) Webdriver truncate log screenshot ([@mgrybyk](https://github.com/mgrybyk))

#### Committers: 1
- Mykola Grybyk ([@mgrybyk](https://github.com/mgrybyk))

## 5.3.4 (2019-01-18)

#### :bug: Bug Fix
* `webdriver`
  * [#3368](https://github.com/webdriverio/webdriverio/pull/3368) Acknowledge responses with body as string ([@christian-bromann](https://github.com/christian-bromann))
* `wdio-browserstack-service`
  * [#3352](https://github.com/webdriverio/webdriverio/pull/3352) wdio-browserstack-service: Remove erroneous call to resolve ([@torgeilo](https://github.com/torgeilo))

#### :nail_care: Polish
* `wdio-browserstack-service`
  * [#3353](https://github.com/webdriverio/webdriverio/pull/3353) wdio-browserstack-service: correcting error message ([@abjerstedt](https://github.com/abjerstedt))

#### :memo: Documentation
* `wdio-allure-reporter`
  * [#3363](https://github.com/webdriverio/webdriverio/pull/3363) Update allure docs ([@BorisOsipov](https://github.com/BorisOsipov))
* `webdriverio`
  * [#3356](https://github.com/webdriverio/webdriverio/pull/3356) Multiple fixes in typings ([@ablok](https://github.com/ablok))
* `webdriver`
  * [#3355](https://github.com/webdriverio/webdriverio/pull/3355) Fix some webdriver and webdriverio typings ([@mgrybyk](https://github.com/mgrybyk))

#### Committers: 6
- Adam Bjerstedt ([@abjerstedt](https://github.com/abjerstedt))
- Arjan Blok ([@ablok](https://github.com/ablok))
- Boris Osipov ([@BorisOsipov](https://github.com/BorisOsipov))
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))
- Mykola Grybyk ([@mgrybyk](https://github.com/mgrybyk))
- Torgeir Lorange ??stby ([@torgeilo](https://github.com/torgeilo))

## 5.3.3 (2019-01-16)

#### :eyeglasses: Spec Compliancy
* `webdriverio`
  * [#3340](https://github.com/webdriverio/webdriverio/pull/3340) Fix error message in webdriverio constants ([@ablok](https://github.com/ablok))

#### :bug: Bug Fix
* `webdriverio`
  * [#3349](https://github.com/webdriverio/webdriverio/pull/3349) missing lodash in dependencies require('lodash') node_modules/webdriverio/build/commands/element/$.js ([@jimmielemontgomery](https://github.com/jimmielemontgomery))
* `wdio-local-runner`, `wdio-runner`, `wdio-webdriver-mock-service`, `webdriverio`
  * [#3348](https://github.com/webdriverio/webdriverio/pull/3348) Fix multiremote with wdio testrunner ([@christian-bromann](https://github.com/christian-bromann))
* `wdio-local-runner`
  * [#3341](https://github.com/webdriverio/webdriverio/pull/3341) Fix VSCode debug mode marking tests as failed ([@mgrybyk](https://github.com/mgrybyk))

#### :nail_care: Polish
* `webdriver`
  * [#3338](https://github.com/webdriverio/webdriverio/pull/3338) Better error handling for webdriver responses ([@christian-bromann](https://github.com/christian-bromann))

#### :memo: Documentation
* Other
  * [#3343](https://github.com/webdriverio/webdriverio/pull/3343) Fix addCommand typings and docs ([@mgrybyk](https://github.com/mgrybyk))
* `webdriverio`
  * [#3336](https://github.com/webdriverio/webdriverio/pull/3336) Tiny fixes of docs ([@yepninja](https://github.com/yepninja))
  * [#3335](https://github.com/webdriverio/webdriverio/pull/3335) More typings improvements ([@ablok](https://github.com/ablok))

#### Committers: 5
- Arjan Blok ([@ablok](https://github.com/ablok))
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))
- Jim Montgomery ([@jimmielemontgomery](https://github.com/jimmielemontgomery))
- Mykola Grybyk ([@mgrybyk](https://github.com/mgrybyk))
- Yevgeny Petukhov ([@yepninja](https://github.com/yepninja))

## 5.3.2 (2019-01-15)

#### :bug: Bug Fix
* `wdio-config`
  * [#3334](https://github.com/webdriverio/webdriverio/pull/3334) fix hook bug - Closes [#3333](https://github.com/webdriverio/webdriverio/issues/3333) ([@christian-bromann](https://github.com/christian-bromann))

#### Committers: 1
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))

## 5.3.1 (2019-01-15)

#### :eyeglasses: Spec Compliancy
* `webdriverio`
  * [#3331](https://github.com/webdriverio/webdriverio/pull/3331) webdriverio: Fixes webdriverio constants and adds tests for services, execArgv and capabilities ([@ablok](https://github.com/ablok))

#### :bug: Bug Fix
* `webdriverio`
  * [#3325](https://github.com/webdriverio/webdriverio/pull/3325) Don't do instanceof check for set cookie and rather look for type ([@christian-bromann](https://github.com/christian-bromann))
* `wdio-cli`, `wdio-repl`
  * [#3315](https://github.com/webdriverio/webdriverio/pull/3315) Bugfix service scope ([@stsvilik](https://github.com/stsvilik))
* `wdio-webdriver-mock-service`, `webdriver`
  * [#3312](https://github.com/webdriverio/webdriverio/pull/3312) Keep scope when calling custom command on browser ([@christian-bromann](https://github.com/christian-bromann))

#### :nail_care: Polish
* `wdio-allure-reporter`
  * [#3321](https://github.com/webdriverio/webdriverio/pull/3321) wdio-allure-reporter: make step attachments optional ([@sskorol](https://github.com/sskorol))
* `webdriver`, `webdriverio`
  * [#3313](https://github.com/webdriverio/webdriverio/pull/3313) ability for addCommand to add to element scope ([@abjerstedt](https://github.com/abjerstedt))

#### :memo: Documentation
* `wdio-firefox-profile-service`, `webdriver`, `webdriverio`
  * [#3329](https://github.com/webdriverio/webdriverio/pull/3329) Remove desiredCapabilities in docs ([@christian-bromann](https://github.com/christian-bromann))
* `webdriverio`
  * [#3330](https://github.com/webdriverio/webdriverio/pull/3330) Mention isSelected for checkbox and radio inputs ([@kimek](https://github.com/kimek))
  * [#3326](https://github.com/webdriverio/webdriverio/pull/3326) webdriverio: Changed setCookie => setCookies in examples ([@ayoolaao](https://github.com/ayoolaao))
* `wdio-cli`, `wdio-config`, `wdio-junit-reporter`, `webdriverio`
  * [#3319](https://github.com/webdriverio/webdriverio/pull/3319) Add missing typings ([@ablok](https://github.com/ablok))
* Other
  * [#3320](https://github.com/webdriverio/webdriverio/pull/3320) Update ConfigurationFile.md ([@TuHuynhVan](https://github.com/TuHuynhVan))
  * [#3311](https://github.com/webdriverio/webdriverio/pull/3311) Fixes type generation for URL variables ([@ablok](https://github.com/ablok))
  * [#3308](https://github.com/webdriverio/webdriverio/pull/3308) Added new TypeScript boilerplate for WebdriverIO ([@dalenguyen](https://github.com/dalenguyen))
* `wdio-allure-reporter`
  * [#3247](https://github.com/webdriverio/webdriverio/pull/3247) README fix: move addAttachment args into a correct place ([@vgrigoruk](https://github.com/vgrigoruk))

#### Committers: 10
- Adam Bjerstedt ([@abjerstedt](https://github.com/abjerstedt))
- Arjan Blok ([@ablok](https://github.com/ablok))
- Ayoola Abimbola ([@ayoolaao](https://github.com/ayoolaao))
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))
- Dale Nguyen ([@dalenguyen](https://github.com/dalenguyen))
- Kimek ([@kimek](https://github.com/kimek))
- Sergey Korol ([@sskorol](https://github.com/sskorol))
- Simon Tsvilik ([@stsvilik](https://github.com/stsvilik))
- Tu Huynh ([@TuHuynhVan](https://github.com/TuHuynhVan))
- Vitalii Grygoruk ([@vgrigoruk](https://github.com/vgrigoruk))

## 5.3.0 (2019-01-11)

#### :eyeglasses: Spec Compliancy
* `webdriver`
  * [#3299](https://github.com/webdriverio/webdriverio/pull/3299) Vendor specific protocol commands for Sauce Labs ([@christian-bromann](https://github.com/christian-bromann))
  * [#3296](https://github.com/webdriverio/webdriverio/pull/3296) Fix HTTP method of getCurrentActivity ([@christian-bromann](https://github.com/christian-bromann))

#### :bug: Bug Fix
* `wdio-runner`
  * [#3303](https://github.com/webdriverio/webdriverio/pull/3303) Don't log error if service only contains a launcher ([@christian-bromann](https://github.com/christian-bromann))

#### :memo: Documentation
* `webdriverio`
  * [#3292](https://github.com/webdriverio/webdriverio/pull/3292) webdriverio: TypeScript defintions of $ - Closes [#3282](https://github.com/webdriverio/webdriverio/issues/3282) ([@mgrybyk](https://github.com/mgrybyk))
* Other
  * [#3302](https://github.com/webdriverio/webdriverio/pull/3302) Improve typings ([@ablok](https://github.com/ablok))

#### Committers: 3
- Arjan Blok ([@ablok](https://github.com/ablok))
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))
- Mykola Grybyk ([@mgrybyk](https://github.com/mgrybyk))

## 5.2.8 (2019-01-10)

#### :bug: Bug Fix
* `webdriver`, `webdriverio`
  * [#3290](https://github.com/webdriverio/webdriverio/pull/3290) Do mobile detection in webdriver package ([@christian-bromann](https://github.com/christian-bromann))

#### :nail_care: Polish
* `webdriverio`
  * [#3285](https://github.com/webdriverio/webdriverio/pull/3285) Select by index fix ([@simonwilson1985](https://github.com/simonwilson1985))

#### :memo: Documentation
* `wdio-cli`, `wdio-config`, `wdio-logger`, `webdriver`
  * [#3286](https://github.com/webdriverio/webdriverio/pull/3286) Loglevel ([@StephenABoyd](https://github.com/StephenABoyd))

#### :house: Internal
* [#3284](https://github.com/webdriverio/webdriverio/pull/3284) package.json - Fixed Jest's testMatch pattern to also work in Windows ([@urig](https://github.com/urig))

#### Committers: 4
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))
- Simon Wilson ([@simonwilson1985](https://github.com/simonwilson1985))
- Uri Goldstein ([@urig](https://github.com/urig))
- [@StephenABoyd](https://github.com/StephenABoyd)

## 5.2.7 (2019-01-09)

#### :bug: Bug Fix
* `wdio-cli`, `wdio-webdriver-mock-service`, `webdriver`, `webdriverio`
  * [#3271](https://github.com/webdriverio/webdriverio/pull/3271) Fix instance prototype and enable custom commands for elements ([@Gilad-WT](https://github.com/Gilad-WT))

#### :nail_care: Polish
* `webdriverio`
  * [#3268](https://github.com/webdriverio/webdriverio/pull/3268) webdriverio: utils.js - using "name" in element locator cause an InvalidSelector Error to be ??? ([@simonwilson1985](https://github.com/simonwilson1985))

#### :memo: Documentation
* `webdriverio`
  * [#3278](https://github.com/webdriverio/webdriverio/pull/3278) Typescript definition ([@StephenABoyd](https://github.com/StephenABoyd))
* Other
  * [#3281](https://github.com/webdriverio/webdriverio/pull/3281) Remove semicolon from Debugging.md ([@dhyey35](https://github.com/dhyey35))

#### Committers: 4
- Dhyey Thakore  ([@dhyey35](https://github.com/dhyey35))
- Simon Wilson ([@simonwilson1985](https://github.com/simonwilson1985))
- [@Gilad-WT](https://github.com/Gilad-WT)
- [@StephenABoyd](https://github.com/StephenABoyd)

## 5.2.6 (2019-01-08)

#### :nail_care: Polish
* `webdriverio`
  * [#3276](https://github.com/webdriverio/webdriverio/pull/3276) webdriverio: waitForDisplayed() now inherits isDisplayed() logic ([@abjerstedt](https://github.com/abjerstedt))

#### Committers: 1
- Adam Bjerstedt ([@abjerstedt](https://github.com/abjerstedt))

## 5.2.5 (2019-01-07)

#### :bug: Bug Fix
* `wdio-cli`, `wdio-sauce-service`, `wdio-testingbot-service`, `webdriver`
  * [#3275](https://github.com/webdriverio/webdriverio/pull/3275) Fix config key naming host =>hostname ([@BorisOsipov](https://github.com/BorisOsipov))
* `webdriverio`
  * [#3273](https://github.com/webdriverio/webdriverio/pull/3273) webdriverio: fixing waitForDisplayed to immediately return false ([@abjerstedt](https://github.com/abjerstedt))

#### :nail_care: Polish
* `wdio-webdriver-mock-service`, `webdriverio`
  * [#3244](https://github.com/webdriverio/webdriverio/pull/3244) webdriverio: isDisplayed fix to return false on non existing elements ([@abjerstedt](https://github.com/abjerstedt))

#### :memo: Documentation
* [#3272](https://github.com/webdriverio/webdriverio/pull/3272) Update TypeScript.md docs ([@BorisOsipov](https://github.com/BorisOsipov))

#### Committers: 2
- Adam Bjerstedt ([@abjerstedt](https://github.com/abjerstedt))
- Boris Osipov ([@BorisOsipov](https://github.com/BorisOsipov))

## 5.2.4 (2019-01-07)

#### :bug: Bug Fix
* `webdriver`
  * [#3266](https://github.com/webdriverio/webdriverio/pull/3266) Properly extend base protocol with extension command definitions. ([@martomo](https://github.com/martomo))

#### Committers: 1
- Martijn Dijkhuizen ([@martomo](https://github.com/martomo))

## 5.2.3 (2019-01-06)

#### :bug: Bug Fix
* `wdio-jasmine-framework`
  * [#3249](https://github.com/webdriverio/webdriverio/pull/3249) Jasmine Framework improperly configures test randomization ([@b-smets](https://github.com/b-smets))

#### :nail_care: Polish
* `webdriverio`
  * [#3251](https://github.com/webdriverio/webdriverio/pull/3251) webdriverio: updating screenshot call to handle backslash ([@StephenABoyd](https://github.com/StephenABoyd))
* `wdio-reporter`
  * [#3253](https://github.com/webdriverio/webdriverio/pull/3253) wdio-reporter: updating pending test uid if existing ([@StephenABoyd](https://github.com/StephenABoyd))

#### :memo: Documentation
* `webdriver`
  * [#3262](https://github.com/webdriverio/webdriverio/pull/3262) Revised Chromium command definitions to improve usability ([@martomo](https://github.com/martomo))
* Other
  * [#3258](https://github.com/webdriverio/webdriverio/pull/3258) Missing install of  @babel/core ([@wswebcreation](https://github.com/wswebcreation))
  * [#3260](https://github.com/webdriverio/webdriverio/pull/3260) Updating options docs ([@BorisOsipov](https://github.com/BorisOsipov))
* `wdio-config`
  * [#3254](https://github.com/webdriverio/webdriverio/pull/3254) Fix package name and fix typos ([@mo](https://github.com/mo))

#### Committers: 6
- Bart Smets ([@b-smets](https://github.com/b-smets))
- Boris Osipov ([@BorisOsipov](https://github.com/BorisOsipov))
- Martijn Dijkhuizen ([@martomo](https://github.com/martomo))
- Wim Selles ([@wswebcreation](https://github.com/wswebcreation))
- [@StephenABoyd](https://github.com/StephenABoyd)
- molsson ([@mo](https://github.com/mo))

## 5.2.2 (2019-01-04)

#### :eyeglasses: Spec Compliancy
* `webdriver`
  * [#3250](https://github.com/webdriverio/webdriverio/pull/3250) Update other commands which allow/expect 'null' as value. ([@martomo](https://github.com/martomo))

#### :memo: Documentation
* [#3227](https://github.com/webdriverio/webdriverio/pull/3227) Undefined CSS classes for optional command parameters ([@cuki](https://github.com/cuki))

#### Committers: 2
- Cuki ([@cuki](https://github.com/cuki))
- Martijn Dijkhuizen ([@martomo](https://github.com/martomo))

## 5.2.1 (2019-01-04)

#### :bug: Bug Fix
* `wdio-jasmine-framework`
  * [#3240](https://github.com/webdriverio/webdriverio/pull/3240) Don't let jasmine swallow errors by ignoring its expectationResultHandler ([@christian-bromann](https://github.com/christian-bromann))
* `wdio-junit-reporter`
  * [#3248](https://github.com/webdriverio/webdriverio/pull/3248) Add missing @wdio/reporter dep to junit reporter ([@christian-bromann](https://github.com/christian-bromann))

#### :nail_care: Polish
* `webdriver`
  * [#3239](https://github.com/webdriverio/webdriverio/pull/3239) Unable pass null value to switchToFrame command for WebDriver ([@martomo](https://github.com/martomo))

#### :memo: Documentation
* [#3243](https://github.com/webdriverio/webdriverio/pull/3243) Set google analytics script into footer of website ([@christian-bromann](https://github.com/christian-bromann))
* [#3245](https://github.com/webdriverio/webdriverio/pull/3245) docs: Fix element commnads referencing the browser object ([@WillBrock](https://github.com/WillBrock))
* [#3237](https://github.com/webdriverio/webdriverio/pull/3237) Update ConfigurationFile to use goog:chromeOptions ([@vinchbr](https://github.com/vinchbr))
* [#3236](https://github.com/webdriverio/webdriverio/pull/3236) updating blog post v5 release, thank you section ([@TuHuynhVan](https://github.com/TuHuynhVan))

#### :house: Internal
* `wdio-cli`
  * [#3242](https://github.com/webdriverio/webdriverio/pull/3242) set NODE_ENV to production to not compile source map for NPM code ([@christian-bromann](https://github.com/christian-bromann))
* Other
  * [#3241](https://github.com/webdriverio/webdriverio/pull/3241) webdriver: update typing to contain capabilities ([@StephenABoyd](https://github.com/StephenABoyd))

#### Committers: 6
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))
- Martijn Dijkhuizen ([@martomo](https://github.com/martomo))
- Tu Huynh ([@TuHuynhVan](https://github.com/TuHuynhVan))
- Vicenzo Naves ([@vinchbr](https://github.com/vinchbr))
- Will Brock ([@WillBrock](https://github.com/WillBrock))
- [@StephenABoyd](https://github.com/StephenABoyd)

## 5.2.0 (2019-01-03)

#### :rocket: New Feature
* `webdriver`, `webdriverio`
  * [#3215](https://github.com/webdriverio/webdriverio/pull/3215) Properly implement 'setTimeout' function and /timeouts endpoints ([@martomo](https://github.com/martomo))

#### :bug: Bug Fix
* `webdriverio`
  * [#3226](https://github.com/webdriverio/webdriverio/pull/3226) Updated findStrategy ([@Gilad-WT](https://github.com/Gilad-WT))
* `wdio-runner`
  * [#3219](https://github.com/webdriverio/webdriverio/pull/3219) wdio-runner: Fix custom reporter options not being used ([@WillBrock](https://github.com/WillBrock))

#### :nail_care: Polish
* `webdriver`, `webdriverio`
  * [#3225](https://github.com/webdriverio/webdriverio/pull/3225) Improve command definitions for available protocols ([@martomo](https://github.com/martomo))
* `webdriver`
  * [#3216](https://github.com/webdriverio/webdriverio/pull/3216) Setting of just window position or size instead of both using 'setWindowRect' ([@martomo](https://github.com/martomo))

#### :memo: Documentation
* [#3231](https://github.com/webdriverio/webdriverio/pull/3231) docs: Update custom service export ([@WillBrock](https://github.com/WillBrock))
* [#3220](https://github.com/webdriverio/webdriverio/pull/3220) webdriverio: Update changelog for cli array arguments ([@WillBrock](https://github.com/WillBrock))

#### :house: Internal
* `webdriver`, `webdriverio`
  * [#3218](https://github.com/webdriverio/webdriverio/pull/3218) Webdriver and WebdriverIO Typing ([@StephenABoyd](https://github.com/StephenABoyd))

#### Committers: 4
- Martijn Dijkhuizen ([@martomo](https://github.com/martomo))
- Will Brock ([@WillBrock](https://github.com/WillBrock))
- [@Gilad-WT](https://github.com/Gilad-WT)
- [@StephenABoyd](https://github.com/StephenABoyd)

## 5.1.2 (2018-12-30)

#### :bug: Bug Fix
* `wdio-cli`
  * [#3211](https://github.com/webdriverio/webdriverio/pull/3211) fix hostname cli param ([@christian-bromann](https://github.com/christian-bromann))

#### Committers: 1
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))

## 5.1.1 (2018-12-30)

#### :bug: Bug Fix
* `webdriver`
  * [#3208](https://github.com/webdriverio/webdriverio/pull/3208) Fix bug where Geckodriver requires POST requests to have a valid JSON body ([@klipstein](https://github.com/klipstein))

#### :memo: Documentation
* [#3206](https://github.com/webdriverio/webdriverio/pull/3206) Docs: fix Getting Started guide (part 2) ([@goofballLogic](https://github.com/goofballLogic))
* [#3202](https://github.com/webdriverio/webdriverio/pull/3202) fix: this PR fixes a bug on phones  ([@wswebcreation](https://github.com/wswebcreation))

#### Committers: 3
- Andrew Stewart Gibson ([@goofballLogic](https://github.com/goofballLogic))
- Tobias von Klipstein ([@klipstein](https://github.com/klipstein))
- Wim Selles ([@wswebcreation](https://github.com/wswebcreation))

## 5.1.0 (2018-12-28)

#### :rocket: New Feature
* `webdriver`
  * [#3135](https://github.com/webdriverio/webdriverio/pull/3135) Add Chromium specific commands to browser object ([@christian-bromann](https://github.com/christian-bromann))

#### :bug: Bug Fix
* `wdio-config`
  * [#3197](https://github.com/webdriverio/webdriverio/pull/3197) Add support for .es6 file types ([@christian-bromann](https://github.com/christian-bromann))
* `webdriver`
  * [#3190](https://github.com/webdriverio/webdriverio/pull/3190) Only set body if a body is required ([@christian-bromann](https://github.com/christian-bromann))
* `wdio-jasmine-framework`
  * [#3179](https://github.com/webdriverio/webdriverio/pull/3179) Fix jasmine error reporting ([@christian-bromann](https://github.com/christian-bromann))
* `wdio-cli`, `wdio-config`, `wdio-junit-reporter`, `wdio-local-runner`, `wdio-reporter`, `wdio-runner`, `webdriverio`
  * [#3178](https://github.com/webdriverio/webdriverio/pull/3178) Fix unknwon logFile issue + add documentation on logDir option ([@christian-bromann](https://github.com/christian-bromann))

#### :nail_care: Polish
* `webdriverio`
  * [#3201](https://github.com/webdriverio/webdriverio/pull/3201) webdriverio: added error messages to the waitForExist call ([@StephenABoyd](https://github.com/StephenABoyd))
* `webdriver`, `webdriverio`
  * [#3176](https://github.com/webdriverio/webdriverio/pull/3176) webdriver: Change getCurrentUrl to getUrl ([@WillBrock](https://github.com/WillBrock))

#### :memo: Documentation
* `wdio-cli`
  * [#3199](https://github.com/webdriverio/webdriverio/pull/3199) Disable unsupported cli wizard options ([@christian-bromann](https://github.com/christian-bromann))
* Other
  * [#3195](https://github.com/webdriverio/webdriverio/pull/3195) webdriverio: Update upgrade instructions ([@WillBrock](https://github.com/WillBrock))
* `webdriverio`
  * [#3184](https://github.com/webdriverio/webdriverio/pull/3184) webdriverio: getCssPropertry changed to getCSSProperty ([@WillBrock](https://github.com/WillBrock))
  * [#3180](https://github.com/webdriverio/webdriverio/pull/3180) webdriverio: Correct deleteCookies example ([@WillBrock](https://github.com/WillBrock))
* `wdio-cli`, `wdio-config`, `wdio-junit-reporter`, `wdio-local-runner`, `wdio-reporter`, `wdio-runner`, `webdriverio`
  * [#3178](https://github.com/webdriverio/webdriverio/pull/3178) Fix unknwon logFile issue + add documentation on logDir option ([@christian-bromann](https://github.com/christian-bromann))

#### :house: Internal
* [#3175](https://github.com/webdriverio/webdriverio/pull/3175) Garbage in npm wdio packages ([@BorisOsipov](https://github.com/BorisOsipov))

#### Committers: 4
- Boris Osipov ([@BorisOsipov](https://github.com/BorisOsipov))
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))
- Will Brock ([@WillBrock](https://github.com/WillBrock))
- [@StephenABoyd](https://github.com/StephenABoyd)



## 5.0.3 (2018-12-23)

#### :bug: Bug Fix
* `wdio-cli`, `wdio-config`, `wdio-interface`, `wdio-local-runner`, `wdio-runner`, `wdio-webdriver-mock-service`, `webdriverio`
  * [#3171](https://github.com/webdriverio/webdriverio/pull/3171) Fix middleware regression and add smoke tests ([@christian-bromann](https://github.com/christian-bromann))

#### :house: Internal
* [#3165](https://github.com/webdriverio/webdriverio/pull/3165) Ensure GITHUB_AUTH token is set to generate changelogs ([@christian-bromann](https://github.com/christian-bromann))

#### Committers: 2
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))
- Dmytro Shpakovskyi ([@Marketionist](https://github.com/Marketionist))

## v5.0.2 (2018-12-22)

#### :memo: Documentation
* [#3163](https://github.com/webdriverio/webdriverio/pull/3163) Name mobile variable "driver" instead of "browser" ([@christian-bromann](https://github.com/christian-bromann))

#### Committers: 2
- Boris Osipov ([@BorisOsipov](https://github.com/BorisOsipov))
- Christian Bromann ([@christian-bromann](https://github.com/christian-bromann))


## v5.0.1 (2018-12-21)

#### :bug: Bug Fix
* `wdio-runner`
  * [#3162](https://github.com/webdriverio/webdriverio/pull/3162) wdio-runner: Fix looking at caps as an array ([@WillBrock](https://github.com/WillBrock))

#### :memo: Documentation
* [#3161](https://github.com/webdriverio/webdriverio/pull/3161) Update API.md ([@wobbleRed](https://github.com/wobbleRed))

#### Committers: 2
- Derek Allred ([@wobbleRed](https://github.com/wobbleRed))
- Will Brock ([@WillBrock](https://github.com/WillBrock))

## v5.0.0 (2018-12-20)

This version comes with a variety of technical changes that might affect the functionality of 3rd party WebdriverIO packages from the community. If such a package causes problems after the update, please raise an issue in the repository of that package and __not__ in this repository. You can find a list of officially maintained packages [here](https://github.com/webdriverio/webdriverio/blob/master/README.md#packages).

#### :boom: Breaking Change
* moved `wdio` cli command from [`webdriverio`](https://www.npmjs.com/package/webdriverio) package to [`@wdio/cli`](https://www.npmjs.com/package/@wdio/cli)
* commands are scoped to `browser` and `element` - no selector property on commands anymore
  ```js
  // v4
  browser.click('#myElem')
  ```
  ```js
  // v5 and upwards
  const elem = $('#myElem')
  elem.click()
  ```
* no command chaining anymore (in standalone and wdio mode)
  ```js
  // v4 (standalone/async mode)
  browser
    .url('https://duckduckgo.com/')
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    // ...
  ```
  ```js
  // v5 (standalone/async mode)
  await browser.url('https://duckduckgo.com/')
  const elem = await browser.$('#search_form_input_homepage')
  await elem.click()
  await elem.setValue('WebdriverIO')
  ```
* every protocol command returns a `value` property instead of raw driver response
  ```js
  // v4
  const result = browser.execute(() => 1 + 1)
  console.log(result)
  // outputs:
  // { sessionId: '02aee149a1a421b81598ff2a3b90e33d',
  //   value: 2,
  //   _status: 0 }
  ```
  ```js
  // v5
  const result = browser.execute(() => 1 + 1)
  console.log(result) // outputs: 2
  ```
* the `remote` and `multiremote` methods to initiate a driver instance now also start the driver session and therefore return a promise (no `init` command anymore)
  ```js
  // v4
  import { remote } from 'webdriverio'
  const driver = remote({ ... })
  driver.init().url('https://webdriver.io').end()
  ```
  ```js
  // v5
  import { remote } from 'webdriverio'
  const driver = await remote({ ... })
  await driver.url('https://webdriver.io')
  await driver.deleteSession()
  ```
* command changes: over the years WebdriverIO added more and more commands for different automation protocols without applying a pattern to it which resulted in having a bunch of duplication and inconsistent naming, even though the list looks exhausting, most of the commands that have changed were used internally
    * renamed commands:
        * `isVisible` ??? `isDisplayed`
        * `isVisibleWithinViewport` ??? `isDisplayedInViewport`
        * `waitForVisible` ??? `waitForDisplayed`
        * `clearElement` ??? `clearValue`
        * `moveToObject` ??? `moveTo` (element scope only)
        * `setCookie`, `getCookie`, `deleteCookie` ??? `setCookies`, `getCookies`, `deleteCookies`
        * `getElementSize` ??? `getSize`
        * `source`, `getSource` ??? `getPageSource`
        * `title` ??? `getTitle`
        * `actions` ??? `performActions` (WebDriver protocol only)
        * `alertAccept` ??? `acceptAlert`
        * `alertDismiss` ??? `dismissAlert`
        * `alertText` ??? `getAlertText`, `sendAlertText`
        * `applicationCacheStatus` ??? `getApplicationCacheStatus` (JsonWireProtocol only)
        * `cookie` ??? `getAllCookies`, `addCookie`, `deleteCookie`
        * `getCssProperty` ??? `getCSSProperty`
        * `element` ??? `findElement`
        * `elements` ??? `findElements`
        * `elementActive` ??? `getActiveElement`
        * `elementIdAttribute` ??? `getElementAttribute`
        * `elementIdClear` ??? `elementClear`
        * `elementIdClick` ??? `elementClick`
        * `elementIdCssProperty` ??? `getElementCSSValue`
        * `elementIdDisplayed` ??? `isElementDisplayed`
        * `elementIdElement` ??? `findElementFromElement`
        * `elementIdElements` ??? `findElementsFromElement`
        * `elementIdEnabled` ??? `isElementEnabled`
        * `elementIdLocation` ??? `getElementLocation`
        * `elementIdLocationInView` ??? `getElementLocationInView` (JsonWireProtocol only)
        * `elementIdName` ??? `getElementTagName`
        * `elementIdProperty` ??? `getElementProperty`
        * `elementIdRect` ??? `getElementRect`
        * `elementIdScreenshot` ??? `takeElementScreenshot`
        * `elementIdSelected` ??? `isElementSelected`
        * `elementIdSize` ??? `getElementSize` (JsonWireProtocol only)
        * `elementIdText` ??? `getElementText`
        * `elementIdValue` ??? `elementSendKeys`
        * `frame` ??? `switchToFrame`
        * `frameParent` ??? `switchToParentFrame`
        * `timeoutsAsyncScript`, `timeoutsImplicitWait` ??? `setAsyncTimeout`, `setImplicitTimeout` (JsonWireProtocol only)
        * `getLocationInView` ??? `getElementLocationInView` (JsonWireProtocol only)
        * `imeActivate` ??? `activateIME` (JsonWireProtocol only)
        * `imeActivated` ??? `isIMEActivated` (JsonWireProtocol only)
        * `imeActiveEngine` ??? `getActiveEngine` (JsonWireProtocol only)
        * `imeAvailableEngines` ??? `getAvailableEngines` (JsonWireProtocol only)
        * `imeDeactivated` ??? `deactivateIME` (JsonWireProtocol only)
        * `localStorage` ??? `getLocalStorage`, `setLocalStorage`, `clearLocalStorage`, `getLocalStorageItem`, `deleteLocalStorageItem` (JsonWireProtocol only)
        * `localStorageSize` ??? `getLocalStorageSize` (JsonWireProtocol only)
        * `sessionStorage` ??? `getSessionStorage`, `setSessionStorage`, `clearSessionStorage`, `getSessionStorageItem`, `deleteSessionStorageItem` (JsonWireProtocol only)
        * `sessionStorageSize` ??? `getSessionStorageSize` (JsonWireProtocol only)
        * `location` ??? `getElementLocation`
        * `log` ??? `getLogs` (JsonWireProtocol only)
        * `logTypes` ??? `getLogTypes` (JsonWireProtocol only)
        * `screenshot` ??? `takeScreenshot`
        * `session` ??? `getSession`, `deleteSession` (JsonWireProtocol only)
        * `sessions` ??? `getSessions`
        * `submit` ??? `elementSubmit`
        * `timeouts` ??? `getTimeouts`, `setTimeouts`
        * `window`, `switchToWindow` ??? `switchWindow`
        * `windowHandle` ??? `closeWindow`, `getWindowHandle`
        * `windowHandles` ??? `getWindowHandles`
        * `windowHandleFullscreen` ??? `fullscreenWindow`
        * `windowHandleMaximize` ??? `maximizeWindow`
        * `windowHandlePosition` ??? `setWindowPosition`, `getWindowPosition` (JsonWireProtocol only), `setWindowRect`, `getWindowRect` (WebDriver protocol only)
        * `windowHandleSize` ??? `setWindowSize`, `getWindowSize` (JsonWireProtocol only), `setWindowRect`, `getWindowRect` (WebDriver protocol only)
        * `hasFocus` ??? `isFocused`
        * `end` ??? `deleteSession`
        * `reload` ??? `reloadSession`
        * `scroll` ??? `scrollIntoView`
        * `context` ??? `getContext`, `switchContext`
        * `contexts` ??? `getContexts`
        * `currentActivity` ??? `getCurrentActivity`
        * `deviceKeyEvent` ??? `sendKeyEvent`
        * `getAppStrings` ??? `getStrings`
        * `hideDeviceKeyboard` ??? `hideKeyboard`
        * `hold` ??? `longPressKeyCode`
        * `launch` ??? `launchApp`
        * `performMultiAction` ??? `multiTouchPerform`
        * `pressKeycode` ??? `pressKeyCode`
        * `rotate` ??? `rotateDevice`
        * `setImmediateValue` ??? `setValueImmediate`
        * `settings` ??? `getSettings`, `updateSettings`
        * `strings` ??? `getStrings`
        * `toggleTouchIdEnrollment` ??? `toggleEnrollTouchId`
    * removed commands (_Note: there are chances that removed commands will come back if their use case scenario seem to be reasonable._):
        * `doDoubleClick`, `doubleClick` - replace with double `click` command or `performActions` command
        * `dragAndDrop` - replace with `performActions` command
        * `leftClick`, `middleClick`, `rightClick` - replace with `performActions` command
        * `selectByValue` - replace with `selectByAttribute('value')`
        * `selectorExecute`, `selectorExecuteAsync` - replace with `execute(elem)`
        * `submit` - replace by clicking on submit button
        * `getCurrentDeviceActivity` - replace by `getCurrentActivity`
        * `release` - replace by `touchAction` command
        * `swipe`, `swipeDown`, `swipeLeft`, `swipeRight`, `swipeUp` - replace by `touchAction` command
        * `performTouchAction` - replace by `touchPerform`
        * with no replacements: `init`, `buttonPress`, `file`, `chooseFile`, `uploadFile`, `endAll`, `getCommandHistory`, `waitForSelected`, `waitForText`, `waitForValue`, `getGridNodeDetails`, `gridProxyDetails`, `gridTestSession`, `hold`
    * new commands:
        * WebDriver / JsonWireProtocol: `minimizeWindow`
        * Appium: `startRecordingScreen`, `stopRecordingScreen`, `isKeyboardShown`, `getSystemBars`, `getDisplayDensity`, `endCoverage`, `replaceValue`, `receiveAsyncResponse`, `gsmCall`, `gsmSignal`, `gsmVoice`, `sendSms`, `fingerPrint`
* adding custom commands are scoped to the prototype they are being added to
  ```js
  // v4
  browser.addCommand('myCommand', () => { ... })
  const elem = $('myElem')
  console.log(typeof browser.myCommand) // outputs "function"
  console.log(typeof elem.myCommand) // outputs "function"
  ```
  ```js
  // v5
  browser.addCommand('myCommand', () => { ... })
  const elem = $('myElem')
  console.log(typeof browser.myCommand) // outputs "function"
  console.log(typeof elem.myCommand) // outputs "undefined"
  elem.addCommand('myElemCommand', () => { ... })
  console.log(typeof elem.myElemCommand) // outputs "function"
  const elem2 = $('myOtherElem')
  console.log(typeof elem2.myElemCommand) // outputs "undefined"
  ```

* spec and suite cli arguments are now passed as an array, e.g. 
  ```js
  // v4
  ./node_modules/.bin/wdio wdio.conf.js --spec ./tests/foobar.js,./tests/baz.js

  ./node_modules/.bin/wdio wdio.conf.js --suite FooBar,BarBaz

  ./node_modules/.bin/wdio wdio.conf.js --suite FooBar
  ```
  ```js
  // v5
  ./node_modules/.bin/wdio wdio.conf.js --spec ./tests/foobar.js ./tests/baz.js

  ./node_modules/.bin/wdio wdio.conf.js --suite FooBar BarBaz

  ./node_modules/.bin/wdio wdio.conf.js --suite FooBar
  ```

* custom configuration for services or reporters are now directly applied to the config list, e.g.
  ```js
  // ...
  reporters: [
    'spec',
    [
      'junit',
      { outputDir: __dirname + '/junit_logs' }
    ]
  ],
  // ...
  ```

#### :eyeglasses: Spec Compliancy
* implemented parameter assertions for protocol commands
* full W3C WebDriver compliancy
* full Appium and Mobile JSONWire Protocol compliancy
* simplified protocol command maintenance by defining commands, their parameters and response values within simple [json constructs](https://github.com/webdriverio/webdriverio/tree/master/packages/webdriver/protocol)
* instead of switching protocol within a running session, WebdriverIO now determines the supported protocol by the driver based on the create session response

#### :rocket: New Feature
* new package `@wdio/applitools-service` for simple visual regression testing with [Applitools](https://applitools.com/)
* new package `eslint-plugin-wdio` for WebdriverIO specific linting rules for [ESLint](https://eslint.org/)
* `@wdio/devtools-service` now with frontend performance testing capabilities (see [example](https://github.com/christian-bromann/webdriverio-performance-testing))
* new `region` [option](https://github.com/webdriverio/webdriverio/blob/cb-changelog/examples/wdio.conf.js#L29-L33) to simply run tests on SauceLabs in different datacenters
* [`debug`](http://beta.webdriver.io/docs/api/browser/debug.html) command now allows to connect the runner with the [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/) application for more indepth debugging
* decoupling of `@wdio/sync` package from framework adapters so that there is no need to install [`fibers`](https://www.npmjs.com/package/fibers) when you want to run your commands with async/await
* autofetching of all provides log types
* auto retry mechansim for all command requests
* auto refetch mechanism for stale elements
* simplified reattachment to existing sessions with `attach` functionality
* integrated and auto maintained [TypeScript](https://www.typescriptlang.org/) definitions
* wdio testrunner fails if no spec files were found

#### :bug: Bug Fix
* fixed loss of scope when chaining elements (e.g. `$$('div')[2].$('span').getHTML()`)
* browser scope with now updated capabilities (`browser.capabilities`)
* improved [watch functionality](https://youtu.be/EUNoPFSomhM?t=17m4s) allows to rerun tests without starting a new session all over again
* fixed problems with `addCommand` in multiremote

#### :memo: Documentation
* brand new documentation page based on the [Docusaurus](https://docusaurus.io/) framework
    * written in a modern web framework called [React](https://reactjs.org/)
    * completely responsive with full support for mobile viewports
* included blog for WebdriverIO related news and article
* fixed links to edit certain documentation pages
* documentation page served via HTTPS per default

#### :house: Internal
* complete rearchitecturing of the whole project into a monorepo
    * new v5 codebase with all "offical" supported packages are at [`webdriverio/webdriverio`](https://github.com/webdriverio/webdriverio)
    * all depcrecated v4 packages can still be found at [github.com/webdriverio-boneyard](https://github.com/webdriverio-boneyard)
* moved all protocol commands into a [`webdriver`](https://www.npmjs.com/package/webdriver) base package
* project sub packages are now released within the `@wdio` NPM [organization](https://www.npmjs.com/org/wdio)
* renamed services, reporters and other internal packages (e.g. `wdio-sauce-service` ??? `@wdio/sauce-service`)
* removed all e2e tests from project to run as unit tests using [Jest](https://jestjs.io/) with a coverage of [~96%](https://codecov.io/gh/webdriverio/webdriverio)
* update to [Babel](https://babeljs.io/) v7 (latest) as well as various of other dependency updates with security fixes
* CPU and Memory improvements by reducing amount of IPC calls

#### :nail_care: Polish
* laid out better [governance model](https://github.com/webdriverio/webdriverio/blob/master/GOVERNANCE.md) for project
