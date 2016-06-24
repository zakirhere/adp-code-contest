'use strict';

var mySteps = function() {
  this.Given(/^I log in to shoe store$/, function () {
    return true;
  });

  this.When(/^I click "([^"]*)" tab$/, function (arg1) {
    return console.log('doing nothing', arg1);
  });

  this.Then(/^I should see more than "([^"]*)" item listed$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^I should see brief description of each shoe$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^I should see relevant image of each shoe item$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^I should see suggested pricing of each shoe$/, function (callback) {
    return console.log('doing nothing');
  });
};

module.exports = mySteps;