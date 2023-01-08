import { expect } from 'chai';
import { waitFor } from '../action/waitFor';

/**
 * Check if the given element is (not) visible
 * @param  {string}   selector   Element selector
 * @param  {boolean}  reverse Check for a visible or a hidden element
 * @param  {boolean}  wait Wait for element to be displayed
 */
export function isDisplayed(selector: string, reverse: boolean, wait?: boolean): void {
  if (wait) {
    waitFor(selector, 'Displayed', { reverse: reverse });
  }

  const displayed = $(selector).isDisplayed();

  if (reverse) {
    expect(displayed).to.not.equal(
      true,
      `Expected element "${selector}" not to be displayed`
    );
  } else {
    expect(displayed).to.equal(
      true,
      `Expected element "${selector}" to be displayed`
    );
  }
}
