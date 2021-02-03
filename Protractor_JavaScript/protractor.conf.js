
let Jasmnine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // specs: ['step1.js', 'step2.js'],
  specs: ['javascript/17_UsingJasmineDataprovider.js'],

  //executes before every test case!
  onPrepare: function () {
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(
      new Jasmnine2HtmlReporter({
        savePath: 'target/screenshots'
      })
    );
  },
  jasmineNodeOpts: {
    showColors: true
  },

  suites: {
    Smoke: ['javascript/12_Sync.js', 'javascript/15_ObjectBasics.js'],
    Regression: ['javascript/13_PracticeExercise.js']
  },

  capabilities: {
    browserName: 'chrome'
  }
}