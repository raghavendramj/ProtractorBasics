import { browser } from "protractor";
import { Calculator } from "./pageObjects/03_CalculatorPage";


describe('Calulator Application', () => {

    it('Simple Calc App', async () => {

        let calculator = new Calculator();

        await browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');

        await calculator.firstEditBox.sendKeys('3');
        await calculator.secondEditBox.sendKeys('5');
        await calculator.go.click();
        await calculator.getResult.getText().then(async (text) => {
            console.log("Result Text is: ", text);
            await browser.sleep(2000);
        });
    });
});