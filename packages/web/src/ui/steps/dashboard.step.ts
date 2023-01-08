import { Then } from "cucumber";
import dashboardPage from "../pages/dashboard.page";

Then(/^I Should see placholder header with logo, notification, search icons$/, () => {
    dashboardPage.verifyPlaceholderHeader();
});

Then(/^I should see the following placeholder "([^"]*)"$/, (widgets: string) => {
    dashboardPage.validateWidgets(widgets.replace(/, /g, ",").split(","));
});
