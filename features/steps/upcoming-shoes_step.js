'use strict';
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var EC = protractor.ExpectedConditions;

chai.use(chaiAsPromised);

var mySteps = function() {
  this.Given(/^I log in to shoe store$/, function () {
    return browser.get('');
  });

  this.When(/^I click "([^"]*)" tab$/, function (linkText) {
    element(by.linkText(linkText)).click();
    return browser.wait(EC.textToBePresentInElement($('div.title'), linkText + "'s Shoes"), 8000);
  });

  this.Then(/^I should see more than "([^"]*)" item listed$/, function (count) {
    // return $$('div.shoe_result').count().should.eventually.equal(2);
    return true;
  });


  this.Then(/^I should see brief description of each shoe$/, function () {
    // Write code here that turns the phrase above into concrete actions
    return;
  });

  this.Then(/^I should see relevant image of each shoe item$/, function () {
    // Write code here that turns the phrase above into concrete actions
    return;
  });

  this.Then(/^I should see suggested pricing of each shoe$/, function () {
    return console.log('doing nothing');
  });

  this.Then(/^I could pause the test$/, function () {
    return browser.pause();
  });

};

module.exports = mySteps;