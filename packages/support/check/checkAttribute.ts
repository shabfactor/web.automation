import { expect } from 'chai';

/**
 * Check if the given elements text is the same as the given text
 * @param  {string}   selector       Element selector
 * @param  {string}   attribute     Whether to check if the content equals the
 *                                  given text or not
 * @param  {string}   expectedValue  The text to validate against
 */

export function checkAttribute(selector: string, attribute: string, expectedValue: string) {
    const attributeValue = $(selector).getAttribute(attribute);
    expect(attributeValue).to.equal(expectedValue,`Expected element "${attributeValue}" to be displayed`);

}