import { expect } from "chai";
import { addImageComparisonScreenshots } from "../lib/context";
import { ImageCompareResult } from 'webdriver-image-comparison';

/**
 * Check if the screenshot for the given page name equals the baseline
 * @param  {string}   pageName          Name of page
 */
export function checkScreenshot(tag: string) {
    const { action, options } = _getScreenshotSettings();
    const compareResult = <ImageCompareResult>browser[action](tag, options);
    _validateScreenshot(compareResult);
}

/**
 * Check if the screenshot for the given page name equals the baseline (web only)
 * @param  {string}   tag       Screenshot tag name
 */
export function checkFullPageScreenshot(tag: string) {
    const compareResult = <ImageCompareResult>browser.checkFullPageScreen(tag, { returnAllCompareData: true });
    _validateScreenshot(compareResult);
}

/**
 * Check if the screenshot of the given element equals the baseline screenshot
 * @param  {string}   selector  Element selector
 * @param  {string}   tag       Screenshot tag name
 */
export function checkElementScreenshot(selector: string, tag: string) {
    let action = browser.isMobile ? 'compareElement' : 'checkElement';
    const compareResult = <ImageCompareResult>browser[action]($(selector), tag, { returnAllCompareData: true });
    _validateScreenshot(compareResult);
}

function _validateScreenshot(compareResult: ImageCompareResult) {
    addImageComparisonScreenshots(compareResult);
    expect(compareResult.misMatchPercentage).to.equal(0, `Expected screenshot - ${compareResult.fileName} to match existing baseline screenshot`);
}

function _getScreenshotSettings(): ScreenshotSettings {
    let action, options;

    if (driver.isMobile) {
        action = 'compareScreen';

        if (driver.isIOS) {
            options = {
                blockOuts: [
                    {
                        height: 130,
                        width: driver.getWindowSize().width,
                        x: 0,
                        y: 0,
                    }
                ]
            }
        }
    } else {
        action = 'checkScreen';
        options = {
            returnAllCompareData: true,
        }
    }

    return { action, options };
}

interface ScreenshotSettings {
    action: 'checkScreen' | 'checkFullPageScreen' | 'compareScreen';
    options?: {
        returnAllCompareData?: boolean,
        blockOuts?: {
            height: number,
            width: number,
            x: number,
            y: number,
        }[]
    }
}