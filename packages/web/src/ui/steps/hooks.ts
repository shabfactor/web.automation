import { After, Before, HookScenarioResult } from 'cucumber';
import { addObject, addScreenshot } from '../../../../support/lib/context';

Before({ tags: '@OnlyChrome' }, () => {
  if ("browserName" in browser.capabilities && browser.capabilities.browserName !== 'chrome') {
    return 'skipped';
  }

  return undefined;
});

Before({ tags: '@OnlyFirefox' }, () => {
  if ("browserName" in browser.capabilities && browser.capabilities.browserName !== 'firefox') {
    return 'skipped';
  }

  return undefined;
});

After({ tags: '@Verbose' }, (scenario: HookScenarioResult) => {
  addObject({
    browser: {
      url: browser.getUrl(),
      title: browser.getTitle(),
    },
    duration: scenario.result.duration,
    status: scenario.result.status,
    error: scenario.result.exception,
  });

  addScreenshot();
});
