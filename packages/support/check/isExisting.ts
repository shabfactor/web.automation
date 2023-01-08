import { expect } from 'chai';

/**
 * Check if the given element exists in the current DOM
 * @param  {String}   selector  Element selector
 * @param  {boolean}   expectExist Whether to check if the element exists or not
 */
export function isExisting(selector: string, expectExist: boolean): void {
  const elements = $$(selector);

  if (expectExist) {
    expect(elements).to.have.length
      .above(0, `Expected element "${selector}" to exist`)

  }
  else {
    expect(elements).to.have
      .lengthOf(0, `Expected element "${selector}" not to exist`);

  }

}



