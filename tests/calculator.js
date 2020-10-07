let homepage = require('../pages/homepage');

describe('demo calculator tests', function () {
    it('addition test', function () {
        // browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');

        // element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('20');

        // element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('30');

        // element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        // let result = element(by.cssContainingText('.ng-binding', '5'));
        // expect(result.getText()).toEqual('5');
        homepage.verifyResult('50');

        browser.sleep(3000);
    });

    it('addition test', function () {
        // browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');

        // element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('20');

        // element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('30');

        // element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo1();

        // let result = element(by.cssContainingText('.ng-binding', '5'));
        // expect(result.getText()).toEqual('5');
        homepage.verifyResult('50');

        browser.sleep(3000);
    });
});