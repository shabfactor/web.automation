import { checkIfElementExists } from '../lib/checkIfElementExists';

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   selector Element selector 
 * @param  {Number}   times   The number of actions 
 */
 export function clickElementMultipleTimes(action: string, type: string, selector: string, times: number): void {
  const selector2 = (type === 'link') ? `=${selector}` : selector;
  const method = (action === 'click') ? 'click' : 'doubleClick';

  checkIfElementExists(selector2);

  let counter: number
  for (counter = 1; counter <= times; counter++) {
    browser.pause(3000);
    $(selector2)[method]();

  }
}

/**
 * Perform multiple clicks on a dx element, waiting for loading to finish before each click
 * @param  {string}   selector        Element selector 
 * @param  {number}   times           The number of clicks 
 * @param  {string}   loadingSelector Element selector for the loading element
 */
export function clickElementMultipleTimesWithLoading(selector: string, times: number, loadingSelector: string): void {
  let counter: number
  for (counter = 1; counter <= times; counter++) {
    $(selector).click();
    browser.waitUntil(() => $(selector).$$(loadingSelector).length === 0);
  }
}