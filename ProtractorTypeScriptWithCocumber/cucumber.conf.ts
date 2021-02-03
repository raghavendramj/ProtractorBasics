import { Config } from "protractor";
import * as reporter from "cucumber-html-reporter"

export let config: Config = {

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    '../features/01_Demo.feature' // accepts a glob
  ],

  cucumberOpts: {

    tags: "@calculatortesting",
    format: 'json:./cucumber_report.json',

    onComplete: () => {
      console.log("onComplete is called!");
      var options = {
        theme: 'bootstrap',
        jsonFile: '../cucumber_report.json',
        output: './cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
          "App Version": "0.3.2",
          "Test Environment": "STAGING",
          "Browser": "Chrome  54.0.2840.98",
          "Platform": "Windows 10",
          "Parallel": "Scenarios",
          "Executed": "Remote"
        }
      };
      reporter.generate(options);
    },
      // require step definitions
      require: [
      './stepDefinitions/*.js' // accepts a glob
    ]
  }
};