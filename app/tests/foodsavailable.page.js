import { Selector } from 'testcafe';

class FoodsAvailable {
  constructor() {
    this.pageId = '#foodsavailable-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Asserts that this page has a table with at least two rows. */
  async hasCard(testController) {
    const cardCount = Selector('div').count;
    await testController.expect(cardCount).gte(12);
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const foodsAvailablePage = new FoodsAvailable();
