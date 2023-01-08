import { WaitForOptions } from 'webdriverio';

/**
 * Wait for the given element to be enabled, displayed, or to exist
 * @param  {string}           selector        Element selector
 * @param  {string}           action          waitFor action to be performed
 * @param  {WaitForOptions}   waitForOptions  options to be passed to the waitFor command
 */
export function waitFor(
  selector: string,
  action: 'Clickable' | 'Displayed' | 'Enabled' | 'Exist',
  waitForOptions?: WaitForOptions
): void {
  let command = `waitFor${action}`;
  $(selector)[command](waitForOptions);
}
