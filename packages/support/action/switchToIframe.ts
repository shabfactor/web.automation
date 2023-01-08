export function switchToFrame(selector: string): void {
  browser.switchToFrame($(selector));
}