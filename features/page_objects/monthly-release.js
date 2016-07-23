var poMonthlyRelease = require('./po.monthly-release');
module.exports = {
  descriptionAreDisplayed: function() {
    poMonthlyRelease.each(function (item) {
      item.isDisplayed().then(function (visible) {
        return visible;
      });
    });
  },

  pricesAreDisplayed: function() {
    
  }
};
