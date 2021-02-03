function MyObject(){
    this.firstObject =  element(by.model('first'));
    this.secondObject =  element(by.model('second'));
    this.gobutton = element(by.id('gobutton'));
    this.result = element(by.css("h2[class='ng-binding']"));

    this.getURL = function(){
        return browser.get('http://juliemr.github.io/protractor-demo/');
    }
}

module.exports = new MyObject;