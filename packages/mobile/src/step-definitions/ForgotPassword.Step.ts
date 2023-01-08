import { Then, When } from 'cucumber';
import { getUserProfile } from '../helpers/userProfile';
import { forgot } from '../pageobjects/ForgotPasswordPage';
import { login } from '../pageobjects/LoginPage';

When(/^I click on the Forgot Password link on the Login page$/, () => {
  forgot.clickForgotPasswordButton();
});

// Then(/^I Enter the Email ID and click on Send Email buton$/, () => {
//   return true;
// });

When(/^I Enter the "([^"]*)"$/, (user: string) => {
  const { username } = getUserProfile(user);
  forgot.enterUsername(username);
});

When(/^I click on Send Email button$/, () => {
  forgot.sendEmail();
  return true;
});

When(/^I click on Resend Email button for 5 times$/, () => {
  forgot.multiClickResendEmailForgotPwd();
  return true;
});

Then(
  /^I should be able to see the successfull message sent to the user$/,
  () => {
    forgot.forgotPwdEmailSuccess();
  }
);

Then(
  /^I should be displayed with a exceeded attempt message for "([^"]*)"$/,
  (user: string) => {
    const { username } = getUserProfile(user);
    login.verifyMaxAttemptEmailMessage(username);
    return true;
  }
);
