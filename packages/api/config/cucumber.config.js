const maxInstances = process.env.API_MAX_INSTANCES || 2;

const parameters = {
    API: `https://api.dxsandbox.com`
}

module.exports = {
    featurePath: `src/API/features/**/*.feature`,
    requiredFiles: `-r src/API/steps/**/*.ts`,
    // tags: '--tags "@api" --tags "not @Pending"',
    worldParameters: `--world-parameters '{ "api":"${parameters.API}"}'`,
    parallel: process.platform !== 'win32' ? `--parallel ${maxInstances}` : ''
}