import { Given } from 'cucumber';
import { When } from 'cucumber';
import LoginPage from '../pages/login.page';
import { page } from '../pages/page';

Given(/^I open the Self Service web app$/, () =>
	page.openWebApp()
)

When(/^I login with "([^"]*)" using (click|Enter) action$/, (userProfile: string, submitMethod: 'click' | 'Enter') => {
	LoginPage.login(userProfile, submitMethod);
});

When(/^I login as "([^"]*)"$/, (userProfile: string) => {
	LoginPage.login(userProfile, 'click', true);
});
