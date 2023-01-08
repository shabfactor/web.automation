import { capabilitiesChromeConfig } from './chrome.config';
import { capabilitiesFirefoxConfig } from './firefox.config';
import { hooksConfig } from './hooks.config';
import { imageComparisonConfig } from './imageComparison.config';
import { loggingConfig } from './logging.config';
import { reportingConfig } from './reporting.config';
import { serverConfig } from './server.config';
import { testsConfig } from './tests.config';
// import { capabilitiesEdgeConfig } from './edge.config';
export const config = {
  runner: 'local',
  baseUrl: 'https:/www.dxsandbox.com/',
  path: '/wd/hub/',

  framework: 'cucumber',

  maxInstances: process.env.DEBUG_TESTS === 'true' ? 1 : 2,
  capabilities: [
    capabilitiesChromeConfig,
    capabilitiesFirefoxConfig,
    //capabilitiesEdgeConfig
  ],


  services: [
    ['image-comparison', imageComparisonConfig]
  ],

  ...serverConfig,
  ...testsConfig,
  ...loggingConfig,
  ...reportingConfig,
  ...hooksConfig,
};
