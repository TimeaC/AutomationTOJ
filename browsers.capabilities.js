export const chrome = {
  browserName: 'chrome',
  'goog:chromeOptions': {
    args: ['--headless', '--window-size=1920,1080'],
  },
};
export const firefox = {
  maxInstances: 5,
  browserName: 'firefox',
  'moz:firefoxOptions': {},
};
export const edge = {
  maxInstances: 5,
  browserName: 'MicrosoftEdge',
  'ms:edgeOptions': {
    args: ['--headless', '--window-size=1920,1080'],
  },
};
export const safari = {
  maxInstances: 5,
  browserName: 'safari',
};
