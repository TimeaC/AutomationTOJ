class PageObject {
  get featuredProductsHeader() {
    return browser.$('//*[text()="Featured Products"]');
  }
}

export { PageObject };
