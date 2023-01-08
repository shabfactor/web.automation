import { waitFor } from "../../../../support/action/waitFor";
import { checkElementScreenshot } from "../../../../support/check/checkScreenshot";
import { isDisplayed } from "../../../../support/check/isDisplayed";
import Page from "./page";

export class DashboardPage extends Page {
    get dashboardWidget() { return (widgetName: string): string => `[data-testid="${widgetName}Widget"]` }

    validateWidgets(widgets: string[]): void {
        waitFor(this.loginOverlay, 'Displayed', { reverse: true });

        for (const widget of widgets) {
            const widgetSelector = this.dashboardWidget(widget)
            waitFor(widgetSelector, "Exist");
            isDisplayed(widgetSelector, false);
        }
    }

    verifyPlaceholderHeader(): void {
        waitFor(this.loginOverlay, 'Displayed', { reverse: true });
        checkElementScreenshot(this.subHeader, 'SubHeader');
    }
}

export default new DashboardPage();