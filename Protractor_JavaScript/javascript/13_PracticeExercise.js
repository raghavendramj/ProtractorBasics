describe('Protractor Demo', function () {

   function selectItem(itemText) {
      element.all(by.tagName('app-card')).each(function (item) {
         item.element(by.css("h4[class='card-title']")).getText().then(function (text) {
            if (text === itemText) {
               item.element(by.css("button[class*='btn-info']")).click();
            }
         });
      });
   }


   it('Exercise Angular Application', function () {

      browser.get('https://qaclickacademy.github.io/protocommerce/');
      element(by.name('name')).sendKeys('Raghavendra M J');
      element(by.css("input[name='email']")).sendKeys('raghav.mj@gmail.com');
      element(by.id('exampleInputPassword1')).sendKeys('password2');
      element(by.css("input[type='checkbox']")).click();
      element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
      //element.all(by.name("inlineRadioOptions"))..get(0);
      element.all(by.name("inlineRadioOptions")).first().click();
      element(by.buttonText("Submit")).click().then(function () {
         browser.sleep(2000);
         element(by.css("div[class*='success']")).getText().then(function (text) {
            console.log(text);
         });
      });

      element.all(by.css("[class='alert alert-danger']")).count().then(function (count) {
         console.log("Count of error messages: ", count);
      })

      element(by.name('name')).clear();
      element(by.name('name')).sendKeys('R').then(function () {
         element(by.css("[class='alert alert-danger']")).getText().then(function (text) {
            console.log(text);
            browser.sleep(2000);
         });
      }); 

      element(by.linkText('Shop')).click();
      selectItem('Samsung Note 8');
      selectItem('iphone X');


      element(by.partialLinkText('Checkout')).getText().then(function (text) {
         let result = text.split("(");
         let cartCount = Number(result[1].trim().charAt(0));
         expect(cartCount).toBe(2);
         console.log("Cart Count: ", cartCount);
      });
      browser.sleep(2000);
   });
});