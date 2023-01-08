import { TableDefinition, Then } from "cucumber";
import navigationMenuPage from "../pages/navigationMenu.page";

Then(/^Each menu item should open its respective page$/, (menuItems: TableDefinition) => {
    navigationMenuPage.checkMenuPageNavigation(menuItems.rows());
});

