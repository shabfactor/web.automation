import { expect } from 'chai';
import { waitFor } from '../action/waitFor';

/**
 * Check if the given elements text is the same as the given text
 * @param  {string}   element       Element selector
 * @param  {string}   expectedText  The text to validate against
 * @param  {boolean}  falseCase     Whether to check if the content equals the
 *                                  given text or not
 */
export function checkEqualsText(
  selector: string,
  expectedText: string,
  falseCase: boolean
): void {
  const element = $(selector);
  const elementText =
    element.getTagName().toLowerCase() === 'input'
      ? element.getValue()
      : element.getText();

  if (falseCase) {
    expect(elementText).to.not.equal(expectedText);
  } else {
    expect(elementText).to.equal(expectedText);
  }
}
