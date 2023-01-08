import { When } from 'cucumber';
import { Then } from 'cucumber';
import LoginPage from '../pages/login.page';

Then(/^I expect an invalid email address message to be shown$/, () => {
  LoginPage.verifyInvalidEmailAddress();
});

Then(/^I expect the login form login button to be disabled$/, () => {
  LoginPage.verifyLoginFormButtonDisabled();
});

Then(
  /^I expect a wrong details error message to be shown in the info bubble$/,
  () => {
    LoginPage.verifyWrongDetailsMessage();
  }
);

Then(
  /^I expect to be shown a link to reset my password in the info bubble$/,
  () => {
    LoginPage.verifyResetPasswordMessage();
  }
);

When(/^I click on the login button ([\d]+) more times$/, (number) => {
  LoginPage.clickLoginButton(number);
});

Then(/^I expect a login success message to be shown on the alert$/, () => {
  LoginPage.verifyLoginSuccess();
});

When(/^I click on the reset password link$/, () => {
  LoginPage.clickInfoBubbleResetPasswordLink();
});

When(/^I enter the "([^"]*)" on the login form$/, (email: string) => {
  LoginPage.openFormAndEnterEmail(email);
});

Then(/^I expect an error message not to be shown on the login form$/, () => {
  LoginPage.verifyInvalidEmailAddress(true);
});
