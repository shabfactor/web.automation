import { expect } from 'chai';
import { constant } from '../helpers/constants.file';
import { ElementHelper } from '../helpers/element.helper';
import Gestures from '../../../support/action/Gestures';

const selectorType = driver.isAndroid ? 'android' : 'ios';
const pinChainSelector1 =
  '**/XCUIElementTypeOther[`label == "pinpad button 1"`]';
const pinChainSelector2 =
  '**/XCUIElementTypeOther[`label == "pinpad button 8"`]';
const pinChainSelector3 =
  '**/XCUIElementTypeOther[`label == "pinpad button 5"`]';
const pinChainSelector4 =
  '**/XCUIElementTypeOther[`label == "pinpad button 9"`]';
const pinChainSelector5 =
  '**/XCUIElementTypeOther[`label == "pinpad button 9"`]';

// const multiEmailSentAttempt =
//   '**/XCUIElementTypeOther[`label == "We have sent an email with a link to sit_unverified@grr.la 3 times. Please check your spam."`]';

const SELECTORS = {
  loginButton: {
    android: `android=new UiSelector().resourceId("loginScreen_submit")`,
    ios: '~loginScreen_submit',
  },

  //testid will work for all except input component
  loginInputEmail: {
    android: '~Email text input, Email text input',
    ios: '~loginScreen_email',
  },
  loginInputPassword: {
    android: '~Password text input, Password text input', // MVF Ap
    ios: '~loginScreen_password',
  },

  pinPadText: {
    android: '',
    ios: '~Enter your 5 digit PIN',
  },

  pinPad1: {
    android:
      // "//android.view.ViewGroup[@content-desc='pinpad button 1, pinpad button 1']",
      '//android.view.ViewGroup[@content-desc="pinpad button 1, pinpad button 1"]/android.widget.TextView',

    ios: `-ios class chain:${pinChainSelector1}`,
  },
  pinPad2: {
    android:
      // "//android.view.ViewGroup[@content-desc='pinpad button 8, pinpad button 8']",
      '//android.view.ViewGroup[@content-desc="pinpad button 2, pinpad button 2"]/android.widget.TextView',

    ios: `-ios class chain:${pinChainSelector2}`,
  },
  pinPad3: {
    android:
      // "//android.view.ViewGroup[@content-desc='pinpad button 5, pinpad button 5']",
      '//android.view.ViewGroup[@content-desc="pinpad button 5, pinpad button 5"]/android.widget.TextView',
    ios: `-ios class chain:${pinChainSelector3}`,
  },
  pinPad4: {
    android:
      // "//android.view.ViewGroup[@content-desc='pinpad button 9, pinpad button 9']",
      '//android.view.ViewGroup[@content-desc="pinpad button 9, pinpad button 9"]/android.widget.TextView',
    ios: `-ios class chain:${pinChainSelector4}`,
  },
  pinPad5: {
    android:
      // "//android.view.ViewGroup[@content-desc='pinpad button 9, pinpad button 9']",
      '//android.view.ViewGroup[@content-desc="pinpad button 9, pinpad button 9"]/android.widget.TextView',
    ios: `-ios class chain:${pinChainSelector5}`,
  },

  dashboardSuccessMessage: {
    android: '',
    ios:
      '(//XCUIElementTypeOther[@name="Updated Password Click here if you would like to stay automatically logged in"])[2]',
  },
  dashboardTitle: {
    android: "//android.widget.TextView[contains(@text,'Kia Ora Chats')]",
    ios: '//XCUIElementTypeStaticText[@name="Kia Ora Chats"]',
  },

  errInvalidCredentials: {
    android:
      "//android.widget.TextView[contains(@text,'Email or password are incorrect. Please re-enter and try again.')]",

    ios:
      '//XCUIElementTypeStaticText[@name="Email or password are incorrect. Please re-enter and try again."]',
  },

  forgotPinBtn: {
    android: '',
    ios: '//XCUIElementTypeButton[@name="Forgot PIN Button"]',
  },

  verifyEmailTitle: {
    android: "//android.widget.TextView[contains(@text, 'Verify email')]",
    ios: '//XCUIElementTypeStaticText[@name="Verify email"]',
  },

  verifyEmailSentMessage: {
    android: '',
    ios: '~We have sent an email with a link to sit_unverified@grr.la',
  },

  //Developers are working on it to add accessibility ID for Android
  verifySentMultiEmailMessage: {
    android: `android=new UiSelector().resourceId("sendEmail_paragraph")`,
    ios: '~sendEmail_paragraph',
  },

  verifyResourceID: {
    android: '#the_test_id',
    ios: '#the_test_id',
  },

  resendEmailBtn: {
    android: '//android.widget.TextView[contains(@text, "Re-send Email")]',
    // android:
    // '//android.widget.Button[@content-desc="Re-send email link, Resend email to reset password"]/android.view.ViewGroup/android.widget.TextView',
    // ios: '//XCUIElementTypeButton[@name="Re-send email link"]',
    ios: '~resendEmail_button',
  },

  logOutBtn: {
    android: `android=new UiSelector().resourceId("dashboard_logout")`,
    ios: '~dashboard_logout',
  },

  rememberMe: {
    android: `android=new UiSelector().resourceId("loginScreen_rememberMe")`,
    ios: '~loginScreen_rememberMe',
  },
};

class LoginScreen {
  static loginContainerButon: string;
  static email: string;
  static password: string;
  static loginButton: string;
  static alert: string;

  get verifyResourceID() {
    return $(SELECTORS.verifyResourceID[selectorType]);
  }

  get loginButton() {
    return ElementHelper.$(SELECTORS.loginButton);
  }

  get email() {
    return ElementHelper.$(SELECTORS.loginInputEmail);
  }

  get password() {
    return ElementHelper.$(SELECTORS.loginInputPassword);
  }

  get pinPadText() {
    return $(SELECTORS.pinPadText[selectorType]);
  }

  get pin1() {
    return ElementHelper.$(SELECTORS.pinPad1);
  }
  get pin2() {
    return ElementHelper.$(SELECTORS.pinPad2);
  }
  get pin3() {
    return ElementHelper.$(SELECTORS.pinPad3);
  }
  get pin4() {
    return ElementHelper.$(SELECTORS.pinPad4);
  }
  get pin5() {
    return ElementHelper.$(SELECTORS.pinPad5);
  }

  get dashboardSuccess() {
    return ElementHelper.$(SELECTORS.dashboardSuccessMessage);
  }

  get dashboardTitle() {
    return ElementHelper.$(SELECTORS.dashboardTitle);
  }
  get errInvalidCredentials() {
    return ElementHelper.$(SELECTORS.errInvalidCredentials);
  }

  get forgotPinBtn() {
    return $(SELECTORS.forgotPinBtn[selectorType]);
  }

  get verifyEmailTitle() {
    return ElementHelper.$(SELECTORS.verifyEmailTitle);
  }

  get verifyEmailMessage() {
    return ElementHelper.$(SELECTORS.verifySentMultiEmailMessage);
  }

  get verifyMultiEmailMessage() {
    return ElementHelper.$(SELECTORS.verifySentMultiEmailMessage);
  }

  get resource() {
    return driver.findElement('id', 'the_test_id');
  }

  get resendEmailBtn() {
    return ElementHelper.$(SELECTORS.resendEmailBtn);
  }

  get logOut() {
    return ElementHelper.$(SELECTORS.logOutBtn);
  }

  get rememberMe() {
    return ElementHelper.$(SELECTORS.rememberMe);
  }

  /**
   * This function is used to signIn login page
   *
   *
   */
  signIn(username: string, password: string) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.loginButton.click();
  }

  logOutDashboard() {
    Gestures.checkIfDisplayedWithScrollDown(this.logOut, 1, 0);
    this.logOut.waitForExist({ timeout: 5000 });
    this.logOut.click();
  }

  rememberMeChkBox() {
    this.rememberMe.click();
  }

  loginBtn() {
    this.loginButton.click();
  }
  /**
   * The below function is for setting Pin and confirming Pin for Android, This needs to be refactored as same piece of code is not working for Android,
   * onPress() Component used for PinPad functionality is not working correctly for android, Hence using pause() function temporarily for android
   * Developers are going to create a seperate id for EnterPin and Confirm Pin Page
   */

  enterNewPin() {
    this.pin1.click();
    this.pin2.click();
    this.pin3.click();
    this.pin4.click();
    this.pin5.click();
  }

  setPin() {
    const arr = [1, 2];
    for (let i = 0; i < arr.length; i++) {
      this.pin1.waitForExist({ timeout: 10000 });
      this.enterNewPin();
    }
  }

  enterUsername(username: string) {
    this.email.waitForExist;
    this.email.clearValue;
    this.email.setValue(username);
    // if (driver.isKeyboardShown()) {
    //   driver.hideKeyboard();
    // }
  }

  enterPassword(password: string) {
    this.password.waitForExist;
    this.password.clearValue;
    this.password.setValue(password);

    // This piece of code has stopped working with the new configuration , need more investigation for isKeyboardShown() function
    // if (driver.isKeyboardShown()) {
    //   driver.hideKeyboard();
    // }
  }

  verifyDashboardSuccess(username: string) {
    this.dashboardTitle.waitForDisplayed();
    const successLoginMessage =
      'Kia Ora ' + username.substring(0, username.indexOf('.'));
    expect(this.dashboardTitle.getText()).to.equal(successLoginMessage);
  }

  forgotPinButton() {
    this.forgotPinBtn.click();
  }

  verifyEmailHeading(title: string) {
    return expect(this.verifyEmailTitle.getText()).to.equal(title);
  }
  verifyEmailSentMessage(username: string) {
    const successEmailSentMessage =
      'We have sent an email with a link to ' + username;
    return expect(this.verifyEmailMessage.getText()).to.equal(
      successEmailSentMessage
    );
  }

  /**
   * This function is to test the Android test id issue which is getting fixed in the react native upgrade
   */
  verifyResourceIDAndroid() {
    const elem = $(`android=new UiSelector().resourceId("the_test_id")`);
    elem.waitForExist();
    elem.waitForDisplayed();

    if (elem) {
      elem.click();
      console.log('----------------> testid successfully clicked for android');
    }
    return elem;
  }

  /**
   *
   * This function is to verify max attempt message when user taps on Resends Email link for 5 times
   */

  verifyMaxAttemptEmailMessage(username: string) {
    const successEmailSentMessage =
      'We have sent an email with a link to ' +
      username +
      ' 3 times. Please check your spam.';
    return expect(this.verifyMultiEmailMessage.getText()).to.equal(
      successEmailSentMessage
    );
  }

  /**
   * This method will click 3 times on the resend email link
   */
  multiClickResendEmail() {
    const arr = [1, 2, 3, 4];
    for (let i = 0; i < arr.length; i++) {
      console.log(i);
      // this.resendEmailBtnClick();
      this.resendEmailBtn.click();
      this.resendEmailBtn.waitForExist({ timeout: 5000 });
    }
  }

  checkForgotBtn() {
    if (this.forgotPinBtn.isDisplayed()) {
      this.forgotPinBtn.click();
    } else {
      console.log('User is on the login page');
    }
  }

  /**
   *
   * @param errorLabel
   * This is generic function for error messages verification on the screen , This will be moved to util in future
   */

  errorMessageIsVisible(errorLabel: string) {
    console.log(errorLabel);
    switch (errorLabel) {
      case 'login_err_invalidCredentialsTxt':
        this.errInvalidCredentials.waitForDisplayed();
        if (this.errInvalidCredentials.isDisplayed()) {
          const actualAlertMessage = this.errInvalidCredentials.getText();
          return expect(constant.login_err_invalidCredentialsTxt).to.equal(
            actualAlertMessage
          );
        }
        return false;
      default:
        return false;
    }
  }
}

export const login = new LoginScreen();
