/**
 * Created by hussaiz on 6/19/16.
 */
var firefox_only_specs = [
  "./**/ptor*.feature"
];

exports.config = {
  specs: [
    './**/ptor*.feature'
  ],

  baseUrl: 'https://rb-shoe-store.herokuapp.com',

  // set to "custom" instead of cucumber.
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    require: [
      'support/*.js',
      'features/step_definitions/*.js'
    ],
    format: 'pretty', // or summary
    keepAlive: false
  },
  plugin: {
    skipAngularStability: true
  },
  directConnect: true,
  // restartBrowserBetweenTests: true,

  multiCapabilities: [
    // {
    //   browserName: "chrome",
    //   chromeOptions: {
    //     args: ["incognito", "disable-extensions", "start-maximized"]
    //   },
    //   specs: [
    //     "../specs/*.spec.js"
    //   ],
    //   exclude: firefox_only_specs
    // },
    {
      browserName: "firefox",
      specs: firefox_only_specs
    }
  ]


};