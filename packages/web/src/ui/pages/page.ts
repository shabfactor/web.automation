import { openWebsite } from "../../../../support/action/openWebsite";

export default class Page {
    get logInTop(): string { return "//button[@data-testid='SiteHeaderLoginButton']" }
    get loadingIcon(): string { return '[data-testid*="ButtonLoaderIcon"]' }
    get subHeader(): string { return '[class*="StyledSubHeader"]' }
    get loginOverlay(): string { return '[data-testid="SiteHeaderOverlay"]' }
    get genericIcon(): string { return `svg[data-testid*="Icon"]` }

    openWebApp(): void {
        openWebsite('site', '');
    }
}

export const page = new Page();