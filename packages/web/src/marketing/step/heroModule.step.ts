import { When } from 'cucumber';
import { Then } from 'cucumber';
import { Given } from 'cucumber';
import HeroModulePage from "../pages/heroModule.page";

Given(/^I open the Hero module URL$/, () => {
    HeroModulePage.openWebApp();
});

When(/^I click on the Get Started button$/, () => {
    HeroModulePage.verifyTitleTarget();
});

Then(/^I should go to Self service web application$/,() => {
    HeroModulePage.verifySelfServiceURL();
});

When(/^Hero module page is displayed$/, () => {
    HeroModulePage.verifyHeroModulePage();
});

Then(/^I expect the heading,paragraph,footer,image and button on the hero module page$/, () => {
    HeroModulePage.verifyHeromoduleFirstVariation();
});
