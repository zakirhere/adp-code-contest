/**
 * Created by hussaiz on 6/19/16.
 */
exports.config = {


  specs: [
    './**/*.feature'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'https://rb-shoe-store.herokuapp.com',


  // set to "custom" instead of cucumber.
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // relevant cucumber command line options
  cucumberOpts: {
    format: "summary",
    require: "features/steps/*.js"
  },
  
  directConnect:true,
  
  onPrepare: function() {
    browser.ignoreSynchronization = true;
  }
};