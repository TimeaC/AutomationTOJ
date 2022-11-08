import { PageObject } from './pageObject';

class MainPage extends PageObject {
  get featuredProductsHeader() {
    return browser.$('//*[text()="Featured Products"]');
  }
}

export { MainPage };
