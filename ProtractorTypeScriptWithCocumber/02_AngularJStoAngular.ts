import { protractor } from "protractor/built/ptor";
import { browser, by, element } from 'protractor';
import { AngularHomePage } from "./pageObjects/04_AngularHomePage";

describe('Testing in typescript', () => {
    it('Open Angular JS website and goto angular.io', async () => {
        let angularHome = new AngularHomePage();
        await browser.get("https://angularjs.org/");
        await angularHome.angularLink.click();
        await angularHome.search.sendKeys('Hello').then(async () => {
            await browser.sleep(2000);
        });
    });
});

