'use strict';

// var monthlyRelease = require('../page_objects/po.monthly-release');
var monthlyRelease = require('../page_objects/monthly-release');

var mySteps = function() {
  this.Given(/^I log in to shoe store$/, function () {
    browser.ignoreSynchronization = true;
    return browser.get('');
  });

  this.When(/^I click "([^"]*)" tab$/, function (linkText) {
    element(by.linkText(linkText)).click();
    return browser.wait(EC.textToBePresentInElement(monthlyRelease.shoe_title, linkText + "'s Shoes"), 8000);
  });

  this.Then(/^I should see more than (\d+) item listed$/, function (count) {
    return monthlyRelease.shoe_list.allShoeResults.count().should.eventually.equal(parseInt(count));
  });


  this.Then(/^I should see brief description of each shoe$/, function () {
    return monthlyRelease.shoe_list.allShoesDescriptions.count().should.eventually.greaterThan(1);
  });

  this.Then(/^I should see relevant image of each shoe item$/, function () {
    return monthlyRelease.shoe_list.allShoesImage.count().should.eventually.greaterThan(1);
  });

  this.Then(/^I should see suggested pricing of each shoe$/, function () {
    return monthlyRelease.shoe_list.allShoesPrice.count().should.eventually.greaterThan(1);
  });

  this.Then(/^I could pause the test$/, function () {
    browser.pause();
  });

  this.When(/^I enter "([^"]*)" as email address$/, function (email) {
    return monthlyRelease.subscribeEmail(email);
  });

  this.When(/^I submit the email subscription$/, function () {
    return monthlyRelease.submitEmail();
  });
  
  this.Then(/^I should see successful notification message containing "([^"]*)"$/, function (email) {
    return monthlyRelease.validateEmailNotifyMessage(email);
  });

  this.When(/^I save some text to clipboard$/, function () {
    return monthlyRelease.copyTextToClipboard("zakirhere@gmail.com");
  });

  this.When(/^I simulate keyboard paste through Ctrl plus V$/, function () {
    return monthlyRelease.pasteTextToEmailInput();
  })
};

module.exports = mySteps;