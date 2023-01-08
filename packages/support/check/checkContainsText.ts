import { expect } from 'chai';

/**
 * Check if the given elements text is the same as the given text
 * @param  {string}   selector       Element selector
 * @param  {string}   expectedText  The text to validate against
 * @param  {boolean}   falseCase     Whether to check if the content equals the
 *                                  given text or not
 */
export function checkContainsText(
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
    expect(elementText).to.not.contain(expectedText);
  } else {
    expect(elementText).to.contain(expectedText);
  }
}
