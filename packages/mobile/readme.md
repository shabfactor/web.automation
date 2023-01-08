# UI tests with WebDriverIO and Cucumber

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Action Status](https://github.com/WarleyGabriel/demo-webdriverio-cucumber/workflows/CI/badge.svg)](https://github.com/WarleyGabriel/demo-webdriverio-cucumber/actions)

This is a demonstration project of UI tests.
These tests are developed in TypeScript with [WebDriverIO V7](http://webdriver.io/) and [Cucumber](https://cucumber.io/) and [Appium] (https://appium.io/)

## Requirements

- node >= 12.18.x - [how to install Node](https://nodejs.org/en/download/)
- npm >= 6.14.x - [how to install NPM](https://www.npmjs.com/get-npm)

## Xcode and Android Studio

- Xcode is needed to take the iOS buuild on local mahcine and to work with iOS Simulators
- Android studio is requried to work with ui automator which comes Android SDK & to work wiht Android emulators
- Open AVD manager in Android Studio and set up your own Emulator , Please make sure emulator is always open while running scripts on the android
- Set up bashProfile on Mac for Android_Home and Java_Home , Also setup SAUCE_USERNAME and SAUCE_ACCESS_KEY if working on Sauce Labs
- Install Appium to use Appium inspector to identify the elements for iOS and Android
- Currently all the capabilities are set in wdio.conf.ts but in future it will get seperated in ./config folder

## Getting Started

Install the dependencies:

```bash
npm run bootstrap
```

Run e2e tests:

```bash
npm run test:app
```

## Spoken Languages

If you want to use another language in features files, you can see this [doc](https://cucumber.io/docs/gherkin/reference/#spoken-languages) about how can you do that.

## Reports

### Allure

Run this command to generate the cucumber Json report in the directory `./report`:

npm run report or npm run report:clean

## Commit

Commit message format

{TicketNumber}-{package}: {brief description}

## tags

@smoke, @progression @regression.

We use the best practices for message's commit, using [Commit lint](https://github.com/conventional-changelog/commitlint) and [Commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly) we can generate changelogs automatically.

Run `npm run commit` and commitizen will help you.

## Miscellaneous

If Error occured - Error starting Appium server: listen EADDRINUSE: address already in use 0.0.0.0:4723
Run below command
sudo lsof -i :4723
kill -9 PID
