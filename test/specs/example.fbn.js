import { PageObject } from '../pageobjects/pageObject';

describe('FBN landing page', () => {
  const landingPage = new PageObject();

  it('Should verify that all expected elements are displayed', async () => {
    browser.url('https://www.fbn.com/');
    await (await landingPage.featuredProductsHeader).waitForDisplayed();
    expect(await landingPage.featuredProductsHeader.isDisplayed()).toBe(true);
  });
});
