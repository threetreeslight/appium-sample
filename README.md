Appium sample for ios
=====================

[appium](https://github.com/appium/appium)

Require

- node v0.10

Install

```
$ npm install -g appium
$ npm install -g mocha
$ npm install
$ appium-doctor --ios
Running iOS Checks
✔ Xcode is installed at /Applications/Xcode.app/Contents/Developer
✔ Xcode Command Line Tools are installed.
✔ DevToolsSecurity is enabled.
✔ The Authorization DB is set up properly.
✔ Node binary found using which command at /Users/ae06710/.nvm/v0.10.37/bin/node
✔ iOS Checks were successful.

✔ All Checks were successful
```

Build

```
# Build
$ xcodebuild -project appium-sample.xcodeproj \
-target appium-sample \
-configuration Debug \
-sdk iphonesimulator8.2
```

If you want to run spec on real device, check environments and modify build scripts

```
# Show project information
$ xcodebuild -list -project appium-sample.xcodeproj 

# Check SDK
$ xcodebuild -showsdks
```

Run Spec or task

```
$ appium

# spec
$ mocha spec/sample_spec.js

# task
$ node spec/automation.js
```


## Others

Inspect element XPath

- Download appium.dmg form <https://github.com/appium/appium/releases>
- Open appium.app
- Click apple icon and set
  - App path to builded app (almost time under the `${project_root}/build`)
  - Force Device to `iPhone Simulator`
- Click Launch and Inspector

## Trouble shooting

- [UI Automation JavaScript Reference for iOS](https://developer.apple.com/library/ios/documentation/DeveloperTools/Reference/UIAutomationRef/)
- [LET THE COMMUNITY KNOW](http://appium.io/slate/en/master/?javascript#let-the-community-know)
- [KNOWN ISSUES](http://appium.io/slate/en/master/?javascript#known-issues)


