"use strict";

var wd = require("wd"),
    chai = require("chai"),
    chaiAsPromised = require("chai-as-promised")

chai.should();
chai.use(chaiAsPromised);
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

