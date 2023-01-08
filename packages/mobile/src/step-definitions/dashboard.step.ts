import { Then } from 'cucumber';
import { getUserProfile } from '../helpers/userProfile';
import { dashboard } from '../pageobjects/DashboardPage';
import { login } from '../pageobjects/LoginPage';

Then(
  /^I am taken to the dashboard view with success message for "([^"]*)"$/,
  (message: string) => {
    const { username } = getUserProfile(message);
    login.verifyDashboardSuccess(username);
    return true;
  }
);

Then(
  /^I verify the Placeholder widgets on the dashboard for "([^"]*)"$/,
  (widget: string) => {
    dashboard.verifyDashboardWidgets(widget);
  }
);
