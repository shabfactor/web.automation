import { When } from 'cucumber';
import { Then } from 'cucumber';
import ForgotPasswordPage from '../pages/forgotPassword.page';

When(/^I reset my password using "([^"]*)" user$/, (profileKey: string) => {
  ForgotPasswordPage.resetPassword(profileKey);
});

Then(
  /^I expect a reset password email sent message that contains the "([^"]*)" email address$/,
  { timeout: 80 * 1000 },
  (profileKey: string) => {
    ForgotPasswordPage.verifySentMessage('EMAIL_MESSAGE_SENT', profileKey);
  }
);

When(
  /^I click on the send again button ([\d]+) times$/,
  { timeout: 80 * 1000 },
  (clickNumber: number) => {
    ForgotPasswordPage.resetPasswordSendAgain(clickNumber);
  }
);

When(/^I click on the reset my password button$/, () => {
  ForgotPasswordPage.clickResetMyPasswordButton();
});
