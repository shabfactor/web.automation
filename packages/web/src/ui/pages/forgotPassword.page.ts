import { clickElement } from '../../../../support/action/clickElement';
import { clickElementMultipleTimesWithLoading } from '../../../../support/action/clickElementMultipleTimes';
import { getUserProfile } from '../../../../support/action/getUserProfile';
import { setInputField } from '../../../../support/action/setInputField';
import { checkContainsText } from '../../../../support/check/checkContainsText';
import { forgotPasswordConstants } from '../constants/constants';
import LoginPage from './login.page';
import Page from './page';

class ForgotPasswordPage extends Page {
  get loginFormForgotPassword(): string {
    return '//button[@data-testid="LoginFormForgotPassword"]';
  }
  get forgotPasswordEmailSent(): string {
    return "//article[@data-testid='ForgotPasswordEmailSent']";
  }
  get forgotPasswordSendAgain(): string {
    return '//button[@data-testid="Button"]';
  }
  get forgotPasswordSubmitButton(): string {
    return '[data-testid="ForgotPasswordFormSubmitButton"]';
  }

  resetPassword(profileKey: string): void {
    const { email } = getUserProfile(profileKey);

    clickElement(this.logInTop, 'click');
    setInputField(LoginPage.inputEmailAddress, email, 'set');
    clickElement(this.loginFormForgotPassword, 'click');
    clickElement(this.forgotPasswordSubmitButton, 'click');
  }

  verifySentMessage(errorMessageName: string, profileKey?: string): void {
    const { email } = getUserProfile(profileKey);

    let expectedText = '';
    switch (errorMessageName) {
      case 'EMAIL_MESSAGE_SENT':
        expectedText =
          forgotPasswordConstants.EMAIL_MESSAGE_SENT_START +
          email +
          forgotPasswordConstants.EMAIL_MESSAGE_SENT_END;
        break;
      case 'EMAIL_60MINUTE_MESSAGE':
        expectedText = forgotPasswordConstants.EMAIL_60MINUTE_MESSAGE;
        break;
    }

    checkContainsText(this.forgotPasswordEmailSent, expectedText, false);
  }

  resetPasswordSendAgain(clickNumber: number): void {
    clickElementMultipleTimesWithLoading(
      this.forgotPasswordSendAgain,
      clickNumber,
      this.loadingIcon
    );
  }

  clickResetMyPasswordButton(): void {
    clickElement(this.forgotPasswordSubmitButton, 'click');
  }
}

export default new ForgotPasswordPage();
