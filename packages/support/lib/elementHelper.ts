export function elementHelper(element: string | WebdriverIO.Element): WebdriverIO.Element {
    return typeof element === 'string' ?
        $(element) :
        element;
}