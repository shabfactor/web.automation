import { Given, When } from 'cucumber';
import { getUserProfile } from '../helpers/userProfile';
import { login } from '../pageobjects/LoginPage';

Given(/^I open My Vodafone App$/, () => {
  driver.launchApp();
  // login.checkForgotBtn();
});

// using non-capturing group in regular expression:
When(
  /^I sign in with the (?:valid|invalid|unverified) "([^"]*)"$/,
  (service: string) => {
    const { password, username } = getUserProfile(service);
    return login.signIn(username, password);
  }
);
