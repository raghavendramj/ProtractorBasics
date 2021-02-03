"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['02_Second.js'],
    capabilities: {
        browserName: 'chrome'
    }
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvci5jb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vcHJvdHJhY3Rvci5jb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdXLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLGVBQWUsRUFBRSw4QkFBOEI7SUFDL0MsS0FBSyxFQUFFLENBQUMsY0FBYyxDQUFDO0lBQ3ZCLFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0NBQ0YsQ0FBQTtBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE4QkUifQ==