const using = require('jasmine-data-provider');

describe('Protractor Object Demo', function () {

    let object = require('./14_JavaScriptDemo.js');
    let using = require('jasmine-data-provider')
    let loadData = require('./16_Data.js');

    beforeEach(function () {
        object.getURL();
    });

    using(loadData.datadrive, function (data, description) {
        it('Framework based Calculator code - '+ description, function () {

            expect(browser.getTitle()).toEqual('Super Calculator');
    
            object.firstObject.sendKeys(data.firstInput);
            object.secondObject.sendKeys(data.secondInput);
            object.gobutton.click();
    
            expect(object.result.getText()).toBe(data.result);
            object.result.getText().then(function (resText) {
                console.log('Result: ', resText);
            });
            browser.sleep(5000);
        });
    });




    afterEach(function () {
        console.log("Test is completed!");
    });
});