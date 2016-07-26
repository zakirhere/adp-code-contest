var poMonthlyRelease = require('./po.monthly-release');
var poHomepage = require('./po.homepage');

module.exports = {
  descriptionAreDisplayed: function() {
    poMonthlyRelease.each(function (item) {
      item.isDisplayed().then(function (visible) {
        return visible;
      });
    });
  },

  pricesAreDisplayed: function() {
    
  },

  subscribeEmail: function(emailID) {
    return poHomepage.remindForm.emailInput.sendKeys(emailID);
  },

  submitEmail: function() {
    return poHomepage.remindForm.submitButton.click();   
  },
  
  validateEmailNotifyMessage: function(email) {
    poHomepage.flashMessage.isPresent().should.eventually.equal(true);
    return poHomepage.flashMessage.getText().should.eventually.contains(email);
  },

  copyTextToClipboard: function(textToCopy) {
    var elm = poHomepage.promoForm.promoInput;
    elm.sendKeys(textToCopy);

    // select all and copy
    elm.sendKeys(protractor.Key.chord(protractor.Key.COMMAND, "a"));
    return elm.sendKeys(protractor.Key.chord(protractor.Key.COMMAND, "x"));
  },

  pasteTextToEmailInput: function() {
    return poHomepage.remindForm.emailInput.sendKeys(protractor.Key.chord(protractor.Key.COMMAND, "v"))
  }
};
