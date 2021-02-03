describe('Protractor Object Demo', function () {

    let object = require('./14_JavaScriptDemo.js');

    let data = require('./16_Data.js');

    beforeEach(function () {
        object.getURL();
    });

    it('Framework based Calculator code!', function () {

        expect(browser.getTitle()).toEqual('Super Calculator');

        object.firstObject.sendKeys(data.datadrive.firstInput);
        object.secondObject.sendKeys(data.datadrive.secondInput);
        object.gobutton.click();
        
        expect(object.result.getText()).toBe(data.datadrive.result);
        object.result.getText().then(function (resText) {
            console.log('Result: ', resText);
        });
        browser.sleep(5000);
    });

    afterEach(function () {
        console.log("Test is completed!");
    });
});