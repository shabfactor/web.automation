import { clickBlankSpace } from "../../../../support/action/clickBlankSpace";
import { clickElement } from "../../../../support/action/clickElement";
import { isDisplayed } from "../../../../support/check/isDisplayed";
import { DashboardPage } from "./dashboard.page";

export class WidgetPage extends DashboardPage {
    get quickActionButton(): string { return `[data-testid="QuickActionsMenuButton"]` }
    get quickActionsMenu(): string { return `[data-testid="QuickActionsMenuList"]` }
    get quickActionsMenuItem(): string { return `[data-testid="QuickActionsMenuItem"]` }
    get dashboardPage(): string { return `[data-testid="DashboardPage"]` }

    openWidgetQuickActions(widgetName: string): void {
        const widgetQuickActionSelector = `${this.dashboardWidget(widgetName)} ${this.quickActionButton}`;
        clickElement(widgetQuickActionSelector, 'click');
    }

    verifyQuickActionsIsOpen(widgetName: string): void {
        const widgetQuickActionsMenuSelector = `${this.dashboardWidget(widgetName)} ${this.quickActionsMenu}`;
        isDisplayed(widgetQuickActionsMenuSelector, false, true);
    }

    verifyQuickActionsOptions(widgetName: string, menuOptions: string[]): void {
        for (const menuItem of menuOptions) {
            const menuItemElement = $(`${this.dashboardWidget(widgetName)} ${this.quickActionsMenu}`).$(`${this.quickActionsMenuItem}*=${menuItem}`);
            isDisplayed(menuItemElement.selector.toString(), false);

            const menuItemIconSelector = menuItemElement.$(this.quickActionsMenuItem);
            isDisplayed(menuItemIconSelector.selector.toString(), false);
        }
    }

    closeQuickActions(widgetName: string): void {
        clickBlankSpace();
        const widgetQuickActionsMenuSelector = `${this.dashboardWidget(widgetName)} ${this.quickActionsMenu}`;
        isDisplayed(widgetQuickActionsMenuSelector, true, true);
    }
}

export default new WidgetPage();