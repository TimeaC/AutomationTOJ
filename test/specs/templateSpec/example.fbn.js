import { MainPage } from '../../pageobjects/mainPage';

describe('FBN landing page', () => {
  const landingPage = new MainPage();

  beforeAll(async () => {
    await browser.url('https://www.fbn.com/');
  });

  it('Should verify that the Featured Products header is displayed', async () => {
    await (await landingPage.featuredProductsHeader).waitForDisplayed();

    expect(await landingPage.featuredProductsHeader.isDisplayed())
      .withContext('Feature Products header was not displayed')
      .toBe(true);
  });
});
