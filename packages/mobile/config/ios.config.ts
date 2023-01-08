import { iosInfoConfig } from './ios.info';

// appium capabilities

export const capabilitiesIosConfig = {
  automationName: 'XCUITest',
  noReset: false,
  fullReset: false,
  orientation: 'PORTRAIT',
  platformName: iosInfoConfig.platformName,
  deviceName: iosInfoConfig.deviceName,
  platformVersion: iosInfoConfig.platformVersion,
  app: iosInfoConfig.app,
  newCommandTimeout: 240,

  // Note:\ This is currently not supported if you are using WebdriverIO V6, WebdriverIO V5 still supports this
  browserName: 'mobileIos',
  // Add this
  'cjson:metadata': {
    app: {
      name: 'My Vodafone App',
      version: '1.2.3',
    },
    device: 'iOS',
    platform: {
      name: 'iPhone 12',
      version: '14.4',
    },
  },
};
