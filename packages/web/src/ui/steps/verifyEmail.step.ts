import { Then, When } from "cucumber";
import VerifyEmailPage from '../pages/verifyEmail.page';

When(/^I click on the Send again button upto ([\d]+) times$/, (clickNumber: number) => {
    VerifyEmailPage.sendAgain(clickNumber);
});

Then(/^I expect a message to validate email sent to "([^"]*)" on the check your email page$/, (profileKey: string) => {
    VerifyEmailPage.verifySentEmail(profileKey)
});

Then(/^I expect a validate and prevent unauthorized message sent to "([^"]*)" on the check your email page$/, (profileKey: string) => {
    VerifyEmailPage.verifyUnauthorizedMessage(profileKey);
});

