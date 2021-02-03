
import { Config } from 'protractor';

export let config: Config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['02_Second.js'],
    capabilities: {
      browserName: 'chrome'
    }
  }

/*

export let config: Config = {
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
*/