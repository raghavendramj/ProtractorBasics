describe('Dropdown', function () {

    function operateOnNumbers(a, b) {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
        browser.sleep(2000);
    }

    /*
        Function to loop through the operators and perform the opeartion.
        a : value1
        b : value2
        opeartion : current operation
    */

    function calculate(a, b, opeartion) {
        element.all(by.tagName('option')).each(function (eachRow) {
            eachRow.getAttribute('value').then(function (currentOpeartor) {
                if (opeartion === currentOpeartor) {
                    eachRow.click();
                    operateOnNumbers(a, b);
                    return;
                }
            });
        });
    }

    /*
        When we know exactly to click on the specific element in the group of repeated elements.
        a : value1
        b : value2
    */

    function multiplyNumbers(a, b) {
        element(by.model('operator')).element(by.css('option:nth-child(4)')).click();
        operateOnNumbers(a, b);
    }

    it('Click on nth Child', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');

        calculate(20, 10, 'MODULO');
        calculate(20, 10, 'ADDITION');
        calculate(20, 10, 'MULTIPLICATION');
        calculate(20, 10, 'SUBTRACTION');
        calculate(20, 10, 'DIVISION');
        multiplyNumbers(50, 20);
    });
});