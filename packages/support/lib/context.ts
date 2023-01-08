import cucumberJson from 'wdio-cucumberjs-json-reporter';
import { ImageCompareResult } from 'webdriver-image-comparison';
import { readFileSync, existsSync } from 'fs';
import sizeOf from 'image-size';

export function addText(value: string): void {
  cucumberJson.attach(value);
}

export function addObject<T extends object>(value: T): void {
  cucumberJson.attach(value, 'application/json');
}

export function addScreenshot(): void {
  cucumberJson.attach(browser.takeScreenshot(), 'image/png');
}

export function addImageComparisonScreenshots(result: ImageCompareResult): void {
  let { baseline, actual, diff } = result.folders;

  if (browser.isMobile) {
    baseline += '/' + result.fileName;
    actual += '/' + result.fileName;
    diff += '/' + result.fileName;
  }

  cucumberJson.attach(_generateSVG('Actual:', actual), 'text/html');

  if (existsSync(diff)) {
    cucumberJson.attach(_generateSVG('Baseline:', baseline), 'text/html');
    cucumberJson.attach(_generateSVG('Diff:', diff), 'text/html');
  }
}

function _generateSVG(heading: string, source: string) {
  const image = readFileSync(source, { encoding: 'base64' });
  const imageDimensions = sizeOf(Buffer.from(image, 'base64'));

  const imageOffset = 20;
  const svgHeight = ((1000 / imageDimensions.width) * imageDimensions.height) + imageOffset;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1000 ${svgHeight}">
      <text y="15">${heading}</text>
      <image y="${imageOffset}" width="1000" href="data:image/png;base64,${image}"></image>
      <rect y="${imageOffset}" width="1000" height="${svgHeight - imageOffset}" style="fill:none; stroke-width:1; stroke:rgb(0,0,0);"></rect>
    </svg>
  `;

  return svg;
}