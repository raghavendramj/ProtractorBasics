import { After, Before, Status } from "cucumber";
import { browser } from "protractor";

Before({ tags: '@calculatortesting' }, function () {
    browser.manage().window().maximize();
});

After({ tags: "@calculatortesting" }, function () {
    console.log("Test is completed!");
});

Before({ tags: "@AngularTesting" }, function () {
    console.log("I need to execute first!");
});


After(async function(scenario){
    console.log("Test is completed for: ", scenario);
    if (scenario.result.status == Status.FAILED) {
        //code to take screenshots
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    }
});


