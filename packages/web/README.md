### Test Automation (Web)

Boilerplate project to write BDD tests with Cucumber and execute with docker selenium. Tests are written in an ordinary language that bridges the gap between business and technical people. The docker selenium simplifies the setup and avoids any local installation of browser specific dependencies.

# Features

- Simple setup, no need for local preinstalled Selenium Grid and browser drivers
- Test with Chrome and Firefox with Microsoft Edge with zero configuration
- Integrated with WebdriverIO
- Detailed report generation

# Requirements

- To run Firefox, Chrome and Microsoft Edge browsers with docker selenium you need:
- Docker (https://docs.docker.com/get-docker/ )

# Tests are executed with Node.js, requires:

(https://nodejs.org/en/download/)

- Node.js version 10 or higher
- npm version comes with node Install

# Quick start

Install dependencies required to run the tests:  
*Make sure you are in the root directory of dx-ss-automation*

- npm run bootstrap

# Starts the selenium hub and browser nodes in docker containers

- npm run selenium:docker

# Run tests ui and open the report

- npm run test:ui

Tests are written using Gherkin syntax in a fashion that can be used as feature documentation:

# This is an example to write feature file

Feature: Performing a Google Search

    As a user on the Google search page
    I want to search for Selenium-Webdriver
    Because I want to learn more about it

    Background:
        Given I open the url "https://google.com"

    Scenario: Searching for Selenium Webdriver
        When I set "Selenium Webdriver" to the inputfield
        And  I press "Enter"
        Then I expect a message to be shown on the page

Browser specific tests
To run a test against a specific browser use predefined tags:

Feature: Performing a Google Search

# This scenario will run only in Chrome browser

    @OnlyChrome
    Scenario: Searching in chrome browser
    ...

# This scenario will run only in Firefox browser

    @OnlyFirefox
    Scenario: Searching in Firefox browser

Pending tests
To skip a test, use the @Pending tag:

Feature: Performing a Google Search

    # This scenario will be skipped
    @Pending
    Scenario: Searching for WebdriverIO

# Debugging tests

There is a ./.vscode/launch.json file that has a debugger configuration for Visual Studio Code,

# Running tests

By default, tests are run in headless mode.

# VNC support

In some cases, you might need to visually see the execution in the browser. That is possible thanks to docker selenium debug images that has VNC server installed. Note that debug images are slower and are intended only for development mode.

# Prerequisites

- Download on your machine the VNC viewer(https://www.realvnc.com/en/connect/download/viewer/)

# starts the selenium containers with VNC support

VNC connection options
Browser Connection options
Chrome 127.0.0.1:5902
Firefox 127.0.0.1:5901

# Edge does not allow VNC , Edge is included as a variation but Edge testing will be done using sauce labs.

# Below link will be helpful

https://ahunga.atlassian.net/wiki/spaces/DLV/pages/303271218/New+Starters+Problem+to+Solution

# Sauce Lab

- Tests can be run by adding the key and password in system environment on chrome and Microsoft edge.

---

#### Auto rest commands
