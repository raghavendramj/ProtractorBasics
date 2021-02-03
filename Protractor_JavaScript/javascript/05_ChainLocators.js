describe('Chain Locators Demo', function() {
    
    it('Click on nth Child', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');

        browser.sleep(2000);

        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);
        element(by.id('gobutton')).click();


        element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(text){
            console.log("Text is: ", text);
            browser.sleep(3000);
        });
    });
 });