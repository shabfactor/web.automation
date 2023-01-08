import { join } from "path";

export const imageComparisonConfig = {
    baselineFolder: join(process.cwd(), './screenshots/'),
    formatImageName: '{tag}-{browserName}-{width}x{height}',
    screenshotPath: join(process.cwd(), './report/tempScreenshots/'),
    savePerInstance: true,
    autoSaveBaseline: true,
    disableCSSAnimation: true,
}