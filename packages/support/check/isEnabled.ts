import { expect } from 'chai';

/**
 * Check if the given selector is enabled
 * @param  {string}   selector   Element selector
 * @param  {boolean}   falseCase Whether to check if the given element is enabled or not
 */
export function isEnabled(selector: string, falseCase: boolean): void {
  const enabled = $(selector).isEnabled();

  if (falseCase) {
    expect(enabled).to.not
      .equal(true, `Expected element "${selector}" not to be enabled`);
  } else {
    expect(enabled).to
      .equal(true, `Expected element "${selector}" to be enabled`);
  }
}
