"Ise strict";

require("./helpers/setup");

var wd = require("wd"),
    _  = require("underscore");

describe("sample-spec", function () {
  this.timeout(300000);
  var driver;
  var allPassed = true;

  before(function () {
    driver = wd.promiseChainRemote({ host: 'localhost', port: 4723 });
    require("./helpers/logging").configure(driver);

    var desired = _.clone(require("./helpers/caps").ios81);
    desired.app = __dirname + "/../build/Debug-iphonesimulator/appium-sample.app";

    return driver.init(desired);
  });

  after(function () {
    return driver.quit();
  });

  afterEach(function () {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });

  it("button value should be true", function () {
    return driver
      .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIASwitch[2]")
      .click()
      .getValue()
      .should.become(1);
  });

  it("Go background", function () {
    return driver.backgroundApp(3);
  });
});

