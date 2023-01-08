import { openWebsite } from "../../../../support/action/openWebsite";
import { checkFullPageScreenshot } from "../../../../support/check/checkScreenshot";
import { checkAttribute } from "../../../../support/check/checkAttribute";
import { checkUrl } from "../../../../support/check/checkUrl";
import { clickElement } from "../../../../support/action/clickElement";
import { isDisplayed } from "../../../../support/check/isDisplayed";
export class HeroModulePage {

    get pageLayout(): string {
        return "[data-testid='PageLayout']";
    }
    get getStartedButton(): string {
        return "[data-testid='HeroModuleCta']";
    }
    openWebApp(): void {
        openWebsite('url', `https://dx-web-marketing.apps.integration-non-production.ds.ahunga.co.nz/Hero-Module?ts=${new Date().getTime()}`);
    }

    verifyTitleTarget(): void {
        checkAttribute(this.getStartedButton, 'target', '_self');
        checkAttribute(this.getStartedButton, 'href', 'https://www.dxsandbox.com/');

    }
    verifySelfServiceURL(): void {
        clickElement(this.getStartedButton, 'click')
        checkUrl(false, 'https://www.dxsandbox.com/');
    }

    verifyHeroModulePage(): void {
        isDisplayed(this.pageLayout, false);
    }

    verifyHeromoduleFirstVariation(): void {
        checkFullPageScreenshot('heromodule');
    }
}
export default new HeroModulePage();