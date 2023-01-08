const report = require('multiple-cucumber-html-reporter');

const customData = {
  title: 'Run info',
  data: [
    {
      label: 'Project',
      value: 'API automation'
    },
    {
      label: 'Generated on:',
      value: new Date().toUTCString()
    },
    {
      label: 'Reporter:',
      value: '<a href="https://www.npmjs.com/package/multiple-cucumber-html-reporter" ' +
        'target="_blank">multiple-cucumber-html-reporter</a>'
    },
  ]
};

report.generate({
  jsonDir: './report/cucumber/',
  reportPath: './report/cucumber/html',
  displayDuration: true,
  removeFolders: true,
  customData,
  pageTitle: 'API Automation Report',
  reportName: 'API Automation Report',
  openReportInBrowser: true,
});




