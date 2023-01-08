import { elementHelper } from "../lib/elementHelper";
import { waitFor } from "./waitFor";

/**
 * Wait for clickable and then perform a click action on the given element
 * @param  {string | WebdriverIO.Element}   selector Element selector or element
 */
export function clickElement(selector: string | WebdriverIO.Element, action: 'click' | 'doubleClick'): void {
  const element = elementHelper(selector);
  element.waitForClickable({ timeoutMsg: `Expected element "${element.selector}" with text "${element.getText()}" to be clickable` });
  element[action]();
}
