/**
 * Created by hussaiz on 6/19/16.
 */
exports.config = {


  specs: [
    './**/*.spec.js'
  ],

  baseUrl: 'https://rb-shoe-store.herokuapp.com',

  directConnect:true,

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 500000,
    isVerbose: true
  },
  restartBrowserBetweenTests: true,

  onPrepare: function() {
    browser.ignoreSynchronization = true;
  }
};