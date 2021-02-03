describe('Chain Locators Demo + All + Promise - get, each, first and last ', function () {

    function addNumbers(a, b) {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
        browser.sleep(2000);
    }

    it('Click on nth Child', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
        addNumbers(1, 2);
        addNumbers(5, 2);

        element.all(by.repeater('result in memory')).count().then(function (elementCount) {
            console.log("Elements count is : ", elementCount);
            browser.sleep(2000);
        });

        element.all(by.repeater('result in memory')).each(function (eachRow) {
            eachRow.element(by.css('td:nth-child(3)')).getText().then(function (sum) {
                console.log("Sum of current row is : ", sum);
                browser.sleep(3000);
            });
        });
    });
});