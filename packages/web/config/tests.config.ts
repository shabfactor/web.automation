export const testsConfig = {
  specs: ['./src/**/**/*.feature'],
  suites: {
    ui: ['./src/ui/**/*.feature'],
    marketing: ['./src/marketing/**/*.feature']
  },
  exclude: [],

  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,

  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,

  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,

  // Default request retries count
  connectionRetryCount: 3,
};
