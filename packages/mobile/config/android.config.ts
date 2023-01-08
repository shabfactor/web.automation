import { androidInfoConfig } from './android.info';

// appium capabilities

export const capabilitiesAndroidConfig = {
  automationName: 'uiautomator2',
  noReset: false,
  fullReset: false,
  deviceOrientation: 'PORTRAIT',
  platformName: androidInfoConfig.platformName,
  deviceName: androidInfoConfig.deviceName,
  platformVersion: androidInfoConfig.platformVersion,
  app: androidInfoConfig.app,
  newCommandTimeout: 240,

  // Note:\ This is currently not supported if you are using WebdriverIO V6, WebdriverIO V5 still supports this
  browserName: 'mobileaAndroidOS',
  // Add this
  'cjson:metadata': {
    app: {
      name: 'My Vodafone App',
      version: '1.2.3',
    },
    device: 'android',
    platform: {
      name: 'Samsung S20',
      version: '11',
    },
  },
};
