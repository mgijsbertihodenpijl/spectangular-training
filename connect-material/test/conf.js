exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['dist/spec.js'],
  capabilities: {'browserName' : 'firefox'},
  directConnect:false,
  restartBrowserBetweenTests: true,
  rootElement: '#main',
  framework: 'jasmine2',
  allScriptsTimeout: 40000,
  jasmineNodeOpts: {
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 360000
  }
  }