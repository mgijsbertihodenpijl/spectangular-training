# Spectangular training


This repository contains an application which is used for trainings of writing e2e tests with Spectangular.

# Spectangular

Spectangular is a library which helps with writing e2e tests for frontend applications and websites.
See [https://github.com/schubergphilis/spectangular](https://github.com/schubergphilis/spectangular) 

## Installation application

The following steps will install / update you development environment. After installing the NPM & Bower packages, it will start the development server and start Grunt watch with LiveReload

- `npm install -d`
- `grunt build`
- `grunt start`
- `http://localhost:1985`

## Installation test

In folder test

`npm install`

### Chrome with direct connect

Configure conf.js 

`directConnect:true` 

Chrome is the default browser

### Firefox with webdriver

Configure conf.js

`
  capabilities: {'browserName' : 'firefox'},
  directConnect:false
`

Installation of the webdriver manager for protractor
`npm run-script up-driver`

Run in a separate console in order to start the webdriver manager
`npm run-script driver`

### Run the tests
`grunt test`

