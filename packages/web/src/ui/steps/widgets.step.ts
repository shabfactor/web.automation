import { When, Then } from "cucumber";
import widgetPage from "../pages/widget.page";

When(/^I click on the kebab menu button on the "([^"]*)"$/, (widgetName: string) => {
    widgetPage.openWidgetQuickActions(widgetName);
});

Then(/^The menu on "([^"]*)" should have the following "([^"]*)" with icons$/, (widgetName: string, menuOptions: string) => {
    widgetPage.verifyQuickActionsOptions(widgetName, menuOptions.replace(/, /g, ",").split(","));
});

When(/^The "([^"]*)" quick action menu is open$/, (widgetName: string) => {
    widgetPage.verifyQuickActionsIsOpen(widgetName);
});


Then(/^Clicking outside should close the menu on "([^"]*)"$/, (widgetName: string) => {
    widgetPage.closeQuickActions(widgetName);
});

