import { expect } from 'chai';

/**
 * Check the text of a modal
 * @param  {String}   expectedText  The text to check against
 * @param  {boolean}   falseState    Whether to check if the text matches or not
 */
export function checkModalText(expectedText: string, falseCase: boolean): void {
  browser.waitUntil(() => browser.getAlertText() != null);
  if (falseCase) {
    expect(browser.getAlertText()).to.not.equal(expectedText, `Expected the text of modal not to equal "${expectedText}"`)
  } else {
    expect(browser.getAlertText()).to.equal(expectedText, `Expected the text of modal to equal "${expectedText}"`)
  }
}
