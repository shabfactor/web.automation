import { constant } from '../helpers/constants.file';
import { expect } from 'chai';
import { ElementHelper } from '../helpers/element.helper';
import { login } from './LoginPage';

class ForgotPasswordPage {
  SELECTORS = {
    forgotButton: {
      android: "//android.widget.TextView[contains(@text, 'Forgot Password')]",
      ios: '~loginScreen_forgotPassword',
    },
    forgotPwdTitle: {
      android: "//android.widget.TextView[contains(@text, 'Forgot Password')]",
      ios: '~forgotPassword',
    },
    forgotPwdEmailInput: {
      android:
        '//android.widget.EditText[@content-desc="Email text input, Email text input"]',
      ios: '~enterEmail_input',
    },

    forgotPwdSendEmailBtn: {
      android: "//android.widget.TextView[contains(@text, 'Send Email')]",
      ios: '~sendEmail_button',
    },

    forgotPwdEmailSentSuccess: {
      android: '~Send email text, Email link sent text',
      ios: '~header_sendEmail_txa',
    },

    forgotPwdCloseOverlay: {
      android:
        '//android.widget.Button[@content-desc="Close Button, close overlay"]/android.widget.ImageView',
      ios: '~header_close_btn',
    },
  };

  get forgotButton() {
    return ElementHelper.$(this.SELECTORS.forgotButton);
  }
  get forgotPwdTitle() {
    return ElementHelper.$(this.SELECTORS.forgotPwdTitle);
  }

  get forgotPwdButton() {
    return ElementHelper.$(this.SELECTORS.forgotButton);
  }

  get forgotPwdTtitle() {
    return ElementHelper.$(this.SELECTORS.forgotPwdTitle);
  }

  get forgotPwdEmailInput() {
    return ElementHelper.$(this.SELECTORS.forgotPwdEmailInput);
  }

  get forgotPwdSendEmailBtn() {
    return ElementHelper.$(this.SELECTORS.forgotPwdSendEmailBtn);
  }

  get forgotPwdEmailSentSuccess() {
    return ElementHelper.$(this.SELECTORS.forgotPwdEmailSentSuccess);
  }

  multiClickResendEmailForgotPwd() {
    const arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
      login.resendEmailBtn.click();
      login.resendEmailBtn.waitForExist({ timeout: 5000 });
    }
  }

  forgotPasswordTitleIsVisible() {
    expect(this.forgotPwdTtitle.getText()).to.equal(constant.forgot_Pwd_Title);
  }

  forgotPwdEmailSuccess() {
    this.forgotPwdEmailSentSuccess.isDisplayed();
    expect(this.forgotPwdEmailSentSuccess.getText()).to.equal(
      constant.forgot_Pwd_Email_Sent_Success_Message
    );
  }

  clickForgotPasswordButton() {
    this.forgotPwdButton.click();
  }
  verifyForgotPwdPageTitle() {
    this.forgotPwdTtitle.isDisplayed();
  }

  enterUsername(username: string) {
    this.forgotPwdEmailInput.click();
    this.forgotPwdEmailInput.clearValue();
    this.forgotPwdEmailInput.addValue(username);
    // if (driver.isKeyboardShown()) {
    //   driver.hideKeyboard();
    // }
  }

  sendEmail() {
    this.forgotPwdSendEmailBtn.waitForExist({ timeout: 5000 });
    this.forgotPwdSendEmailBtn.click();
  }
}

export const forgot = new ForgotPasswordPage();
