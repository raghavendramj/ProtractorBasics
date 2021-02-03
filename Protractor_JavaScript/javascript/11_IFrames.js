describe('Protractor Demo', function() {
    it('Open Non angular websites alerts', function() {

        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('https://rahulshettyacademy.com/AutomationPractice/');
        browser.switchTo().alert().accept();   
        browser.switchTo().frame('courses-iframe');
        browser.sleep(5000);


       
    });
 });