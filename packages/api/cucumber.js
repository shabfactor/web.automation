let deepAssign = require('deep-assign');

//env settings
let envSetting = require(`./config/cucumber.config`)

const commonSetting = {
    requiredModule: '--require-module ts-node/register',
    reportPath: `--format json:./report/cucumber/api-test-${(new Date).getTime()}.json`,
}

let config = deepAssign(commonSetting, envSetting);

//generate settings to command line style

const toCommandLine = function (config) {
    let command = '';
    for (let key in config) {
        command += `${config[key]} `;
    }
    return command;
}

module.exports = {
    default: toCommandLine(config)
};