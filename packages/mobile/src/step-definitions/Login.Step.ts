import { Then, When } from 'cucumber';
import { getUserProfile } from '../helpers/userProfile';
import { login } from '../pageobjects/LoginPage';

Then(/^I Set the Pin successfully$/, () => {
  login.setPin();
  // loginin.setInitialPin();
});

Then(
  /^I should be displayed with verify email "([^"]*)" page$/,
  (email: string) => {
    const { username } = getUserProfile(email);
    login.verifyEmailSentMessage(username);

    return true;
  }
);

Then(/^I should be displayed with "([^"]*)"$/, (errorLabel: string) => {
  login.errorMessageIsVisible(errorLabel);
  return true;
});

Then(
  /^I should directly naviagted on the Dashboard with success message for "([^"]*)"$/,
  (message: string) => {
    const { username } = getUserProfile(message);
    login.verifyDashboardSuccess(username);
    return true;
  }
);

When(/^I verify ID$/, () => {
  login.verifyResourceIDAndroid();
  return true;
});

When(/^I click on Resend Email button for 3 times$/, () => {
  login.multiClickResendEmail();
  return true;
});

When(/^I click on Log out$/, () => {
  login.logOutDashboard();
  return true;
});

When(/^I enter valid "([^"]*)"$/, (service: string) => {
  const { password, username } = getUserProfile(service);
  login.enterUsername(username);
  login.enterPassword(password);
});

When(/^I sign in with Keep me logged in check box selected$/, () => {
  login.rememberMeChkBox();
  login.loginBtn();
  login.setPin();
  return true;
});

When(/^I close and open the App again$/, () => {
  driver.terminateApp();
  driver.activateApp();
  return true;
});

When(/^I naviagte on the "([^"]*)" page$/, (title: string) => {
  login.verifyEmailHeading(title);
  return true;
});

Then(
  /^I should verify email sent message to the "([^"]*)"$/,
  (user: string) => {
    const { username } = getUserProfile(user);
    login.verifyEmailSentMessage(username);
    return true;
  }
);
