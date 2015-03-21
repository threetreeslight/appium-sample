"use strict";

var wd = require("wd"),
    _  = require("underscore");

var  driver = wd.promiseChainRemote({ host: 'localhost', port: 4723 });
var desired = _.clone(require("./helpers/caps").ios81);
desired.app = __dirname + "/../build/Debug-iphonesimulator/appium-sample.app";

driver
  .init(desired)
  .then(function () {
    return driver
      .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIASwitch[2]")
      .click()
      .backgroundApp(3)
      .fin(function() {
        return driver.quit();
      });
  }).done();

