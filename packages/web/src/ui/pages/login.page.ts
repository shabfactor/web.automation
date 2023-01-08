import { pressButton } from '../../../../support/action/pressButton';
import { getUserProfile } from '../../../../support/action/getUserProfile';
import Page from './page';
import { clickElement } from '../../../../support/action/clickElement';
import { setInputField } from '../../../../support/action/setInputField';
import { checkModalText } from '../../../../support/check/checkModalText';
import { handleModal } from '../../../../support/action/handleModal';
import { checkEqualsText } from '../../../../support/check/checkEqualsText';
import { isEnabled } from '../../../../support/check/isEnabled';
import { clickElementMultipleTimesWithLoading } from '../../../../support/action/clickElementMultipleTimes';
import { loginConstants } from '../constants/constants';
import { isDisplayed } from '../../../../support/check/isDisplayed';
import { waitFor } from '../../../../support/action/waitFor';

class LoginPage extends Page {
  get inputEmailAddress(): string {
    return "//div[@data-testid='LoginFormEmailInput']//input";
  }
  get inputPassword(): string {
    return "//div[@data-testid='LoginFormPasswordInput']//input";
  }
  get errorMessage(): string {
    return "//span[@data-testid='LoginFormEmailInputError']";
  }
  get logInFormLogInButton(): string {
    return "//button[@data-testid='LoginFormSubmitButton']";
  }
  get infoBubble(): string {
    return "//article[@data-testid='LoginFormInfoBubble']";
  }
  get emailvalidate(): string {
    return "//article[@data-testid='LoginValidateEmail']";
  }
  get resetyourPassword(): string {
    return "//button[@data-testid='TextLink']";
  }

  login(
    profileKey: string,
    submitMethod: 'click' | 'Enter',
    handleModal?: boolean
  ): void {
    const { email, password } = getUserProfile(profileKey);

    clickElement(this.logInTop, 'click');
    setInputField(this.inputEmailAddress, email, 'set');
    setInputField(this.inputPassword, password, 'set');
    if (submitMethod === 'click') {
      clickElement(this.logInFormLogInButton, 'click');
    } else {
      pressButton('Enter');
    }

    if (handleModal) {
      this.verifyLoginSuccess();
    }
  }

  verifyLoginSuccess(): void {
    checkModalText(loginConstants.LOGIN_SUCCESS_MESSAGE, false);
    handleModal('accept', 'alertbox');
    waitFor(this.loginOverlay, 'Displayed', { reverse: true });
  }

  verifyInvalidEmailAddress(falseCase?: boolean): void {
    if (falseCase) {
      isDisplayed(this.errorMessage, true);
    } else {
      checkEqualsText(this.errorMessage, loginConstants.INVALID_EMAIL_MESSAGE, false);
    }
  }

  verifyLoginFormButtonDisabled(): void {
    isEnabled(this.logInFormLogInButton, true);
  }

  verifyWrongDetailsMessage(): void {
    checkEqualsText(
      this.infoBubble,
      loginConstants.WRONG_PASSWORD_FIRST_TIME_MESSAGE,
      false
    );
  }

  verifyResetPasswordMessage(): void {
    checkEqualsText(
      this.infoBubble,
      loginConstants.WRONG_PASSWORD_FIFTH_TIME_MESSAGE,
      false
    );
  }

  clickLoginButton(number: number): void {
    clickElementMultipleTimesWithLoading(
      this.logInFormLogInButton,
      number,
      this.loadingIcon
    );
  }

  clickInfoBubbleResetPasswordLink(): void {
    clickElement(this.resetyourPassword, 'click');
  }

  openFormAndEnterEmail(email: string) {
    clickElement(this.logInTop, 'click');
    setInputField(this.inputEmailAddress, email, 'set');
    pressButton('Tab');
  }
}

export default new LoginPage();
