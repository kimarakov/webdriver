Feature: Example feature
  As a user of webdriverjs
  I should be able to use different commands
  to get informations about elements on the page

  Scenario: Get size of an element
    Given I go on the website "https://github.com/"
    Then  should the element ".header-logo-wordmark" be 37px wide and 26px high

  Scenario: Get title of website
    Given I go on the website "https://github.com/"
    Then  should the title of the page be "GitHub · Build software better, together."