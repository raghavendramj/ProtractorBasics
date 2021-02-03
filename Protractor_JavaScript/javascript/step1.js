describe('Protractor Demo App', function () {
    it('should have a title', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);
        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).toEqual('3');
        browser.sleep(2000);
        console.log("Test the console!");
    });

    it('Understand promise!', function () {
        browser.get('http://juliemr.github.io/protractor-demo/').then(function () {
            console.log("Website Loaded!");
            browser.sleep(2000);
        });
    });
});