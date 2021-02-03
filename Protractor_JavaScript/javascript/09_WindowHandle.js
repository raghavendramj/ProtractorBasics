describe('Actions demo', function () {

    it('Open Posse website', function () {
        browser.get('https://posse.com');

        element(by.model('userInputQuery')).sendKeys('river'); 
        browser.actions().mouseMove(element(by.model('localtionQuery')).sendKeys("London")).perform();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();

        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
            browser.sleep(3000);
            expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(10);
            element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();

            element(by.css("a[ng-href*='London/River Island']")).click().then(function(){

                browser.getAllWindowHandles().then(function(handles){

                    browser.switchTo().window(handles[1]);
                    browser.getTitle().then(function(){
                        console.log("Current Page title is : ", title);
                    });

                    browser.switchTo().window(handles[0]);
                    browser.getTitle().then(function(){
                        console.log("Current Page title is : ", title);
                    });
                });
            });
        });
    });
});