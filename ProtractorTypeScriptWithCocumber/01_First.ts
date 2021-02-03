import { browser } from 'protractor';
import { element, by } from 'protractor';

describe('Protractor Demo App', function () {
    it('should have a title', async() => {

        await browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', async () =>{
        await browser.get('http://juliemr.github.io/protractor-demo/');
        await element(by.model('first')).sendKeys(1);
        await element(by.model('second')).sendKeys(2);
        await element(by.id('gobutton')).click();

        await expect(element(by.binding('latest')).getText()).toEqual('3');
        await browser.sleep(2000);
        console.log("Test the console!");
    });

    it('Understand promise!', async ()  => {
        await browser.get('http://juliemr.github.io/protractor-demo/').then(function () {
            console.log("Website Loaded!");
            browser.sleep(2000);
        });
    });
});