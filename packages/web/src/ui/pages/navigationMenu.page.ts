import { clickElement } from "../../../../support/action/clickElement";
import { isDisplayed } from "../../../../support/check/isDisplayed";
import Page from "./page";

class NavigationMenuPage extends Page {
    get navigationMenu(): string { return `[data-testid="NavigationMenu"]` }
    get menuItem(): string { return `[data-testid="MenuListItem"]` }

    checkMenuPageNavigation(menuItems: string[][]): void {
        const navigationMenuElement = $(this.navigationMenu);
        for (const menuItem of menuItems) {
            const [menuLinkText, pageTestid] = menuItem;
            clickElement(navigationMenuElement.$(`${this.menuItem}*=${menuLinkText}`), 'click');
            isDisplayed(`[data-testid="${pageTestid}Page"]`, false, true);
        }
    }
}

export default new NavigationMenuPage();