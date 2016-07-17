'use strict';
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

var mySteps = function() {
  this.Given(/^I log in to shoe store$/, function () {
    return browser.get('');
  });

  this.When(/^I click "([^"]*)" tab$/, function (linkText) {
    return element(by.linkText(linkText)).click();
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
};

module.exports = mySteps;