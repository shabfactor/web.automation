import { capabilitiesAndroidConfig } from './android.config';
import { androidInfoConfig } from './android.info';
import { hooksConfig } from './hooks.config';
import { imageComparisonConfig } from './imageComparison.config';
import { capabilitiesIosConfig } from './ios.config';
import { iosInfoConfig } from './ios.info';
import { loggingConfig } from './logging.config';
import { reportingConfig } from './reporting.config';
import { testsConfig } from './tests.config';

export const config = {
  runner: 'local',
  // baseUrl: 'http://localhost',

  port: 4723, // default appium port
  services: [
    [
      'appium',
      {
        // Appium service options here
        // ...
        args: {},
        logPath: './',
      },
    ],
    ['native-app-compare', imageComparisonConfig]
  ],
  framework: 'cucumber',

  maxInstances: process.env.DEBUG_TESTS === 'true' ? 1 : 2,
  capabilities: [capabilitiesIosConfig, capabilitiesAndroidConfig],

  ...iosInfoConfig,
  ...androidInfoConfig,
  ...reportingConfig,
  ...testsConfig,
  ...loggingConfig,
  ...hooksConfig,
};
