/**
 * Created by hussaiz on 6/19/16.
 */
exports.config = {
  specs: [
    './**/*.feature'
  ],

  baseUrl: 'https://rb-shoe-store.herokuapp.com',

  // set to "custom" instead of cucumber.
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    require: [
      'support/env.js',
      'features/steps/*.js'
    ],
    format: 'pretty', // or summary
    keepAlive: false
  },

  directConnect:true,

  onPrepare: function() {
    browser.ignoreSynchronization = true;
  }
};