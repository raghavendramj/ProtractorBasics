import { Given, Then, When } from "cucumber";
import { browser } from "protractor";
import { Calculator } from "../pageObjects/03_CalculatorPage";
import { AngularHomePage } from "../pageObjects/04_AngularHomePage";
import * as chai from 'chai';


let expect = chai.expect;
let calculator = new Calculator();
let angularHome = new AngularHomePage();

Given('I will navigate to {string} page', async (string) => {
    console.log(string);
    let websiteLink = string === 'Calculator' ? 'http://juliemr.github.io/protractor-demo/' : 'https://angularjs.org/';
    await browser.get(websiteLink);
});

When('I add two numbers {string} and {string}', async (string, string2) => {
    await calculator.firstEditBox.sendKeys(string);
    await calculator.secondEditBox.sendKeys(string2);
});

Then('the output displayed should be {string}', async (string) => {
    await calculator.go.click();
    await calculator.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
    });
});

When('I click on header link', async () => {
    await angularHome.angularLink.click();
});

When('You will navigate to latest Angular page.', function () {
    console.log("Navigated to angular.org website");
});

Then('you will enter {string} in search box', async (string) => {
    await angularHome.search.sendKeys(string).then(async () => {
        await browser.sleep(2000);
    });
});