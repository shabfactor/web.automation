import { clickElementMultipleTimesWithLoading } from '../../../../support/action/clickElementMultipleTimes';
import { getUserProfile } from '../../../../support/action/getUserProfile';
import { checkContainsText } from '../../../../support/check/checkContainsText';
import { verifyEmailConstants } from '../constants/constants';
import Page from './page';

class VerifyEmailPage extends Page {
  get emailValidateButton(): string {
    return "//button[@data-testid='Button']";
  }
  get emailValidate(): string {
    return "//article[@data-testid='LoginValidateEmail']";
  }

  verifySentEmail(profileKey: string): void {
    const { email } = getUserProfile(profileKey);
    checkContainsText(
      this.emailValidate,
      verifyEmailConstants.EMAIL_MESSAGE_TO_VALIDATE + email,
      false
    );
  }

  sendAgain(clickNumber: number): void {
    clickElementMultipleTimesWithLoading(
      this.emailValidateButton,
      clickNumber,
      this.loadingIcon
    );
  }

  verifyUnauthorizedMessage(profileKey: string): void {
    const { email } = getUserProfile(profileKey);
    checkContainsText(
      this.emailValidate,
      verifyEmailConstants.VERIFY_EMAIL_MESSAGE_START +
      email +
      verifyEmailConstants.VERIFY_EMAIL_MESSAGE_END,
      false
    );
  }
}

export default new VerifyEmailPage();
