describe('Protractor Demo', function() {
    it('Open Non angular websites alerts', function() {

        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('https://rahulshettyacademy.com/AutomationPractice/').then(function(){
            element(by.id('confirmbtn')).click();
            browser.switchTo().alert().accept();   
            browser.sleep(5000);
        });
    });
 });