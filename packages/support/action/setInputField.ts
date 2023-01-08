import { waitFor } from "./waitFor";

/**
 * Set the value of the given input field to a new value
 * @param {string}    selector  Element selector
 * @param {string}    value     The value to set the selector to
 * @param {boolean}   append    Whether to append text to input or not
 */
export function setInputField(selector: string, value: string, action: 'add' | 'set'): void {
  waitFor(selector, 'Clickable');
  const command = `${action}Value`;
  $(selector)[command](value);
}
