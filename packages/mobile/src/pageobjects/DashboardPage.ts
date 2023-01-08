import { ElementHelper } from '../helpers/element.helper';
import Gestures from '../../../support/action/Gestures';
import { expect } from 'chai';
import { title } from 'process';

const selectorType = driver.isAndroid ? 'android' : 'ios';

const SELECTORS = {
  primaryTile: {
    android: `android=new UiSelector().resourceId("wgtUsage")`,
    ios: '~wgtUsage',
  },

  secondaryWidget: {
    android: `android=new UiSelector().resourceId("wgtSecondaryUsage")`,
    ios: '~wgtSecondaryUsage',
  },

  paymentsWidget: {
    android: `android=new UiSelector().resourceId("wgtPayments")`,
    ios: '~wgtPayments',
  },

  otherServicesWidget: {
    android: `android=new UiSelector().resourceId("wgtOtherServices")`,
    ios: '~wgtOtherServices',
  },

  accountWidget: {
    android: `android=new UiSelector().resourceId("wgtAccounts")`,
    ios: '~wgtAccounts',
  },
  offerWidget: {
    android: '~offerWidget_dashboard',
    ios: '~offerWidget_dashboard',
  },
  dashboardActionSheet: {
    android: '~dashboard_action-sheet',
    ios: '~dashboard_action-sheet',
  },
};

class DashboardPage {
  get primaryTile() {
    return ElementHelper.$(SELECTORS.primaryTile);
  }

  get secondWidget() {
    return $$(SELECTORS.secondaryWidget[selectorType]);
  }

  get paymentsWidget() {
    return ElementHelper.$(SELECTORS.paymentsWidget);
  }

  get otherServicesWidget() {
    return ElementHelper.$(SELECTORS.otherServicesWidget);
  }
  get accountWidget() {
    return ElementHelper.$(SELECTORS.accountWidget);
  }
  get offerWidget() {
    return ElementHelper.$(SELECTORS.offerWidget);
  }

  listSecondaryWidgets() {
    const count = this.secondWidget.length;
    for (let i = 0; i <= count; i++) {
      const title = this.secondWidget[i].getText();
      return console.log(
        '-------------> title of the secondaary widget',
        title + ''
      );
    }
  }

  verifyDashboardWidgets(widget: string) {
    console.log(widget);
    switch (widget) {
      case 'Primary Usage ':
        this.primaryTile.waitForExist({ timeout: 5000 });
        this.primaryTile.waitForDisplayed();
        break;
      case 'Secondary Usage':
        this.listSecondaryWidgets();
        break;
      case 'payments Tertiary widget':
        this.paymentsWidget.waitForExist({ timeout: 5000 });
        this.paymentsWidget.waitForDisplayed();
        break;
      case 'My other services':
        Gestures.checkIfDisplayedWithScrollDown(this.otherServicesWidget, 1, 0);
        this.otherServicesWidget.waitForExist({ timeout: 5000 });
        this.otherServicesWidget.waitForDisplayed();
        break;
      case 'account':
        Gestures.checkIfDisplayedWithScrollDown(this.accountWidget, 1, 0);
        this.accountWidget.waitForExist({ timeout: 5000 });
        this.accountWidget.waitForDisplayed();
        break;
      case 'offer':
        this.offerWidget.waitForDisplayed();
        break;

      default:
        console.log(widget);
        console.log('sorry widget is not present on the dashboard');
    }
  }
}
export const dashboard = new DashboardPage();
