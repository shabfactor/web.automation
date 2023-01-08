/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export class ElementHelper {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static $(selector: any) {
    let element = undefined;
    if (typeof selector === 'string') {
      element = browser.$(selector);
    }
    element = browser.$(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      selector.all || (driver.isAndroid ? selector.android : selector.ios)
    );
    return element;
  }
}
