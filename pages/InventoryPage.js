/**
 * Page Object Model for the Sauce Demo Inventory page.
 */
class InventoryPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator('[data-test="title"]');
    this.inventoryList = page.locator('[data-test="inventory-list"]');
  }

  /**
   * Check whether the inventory page title and product list are visible.
   * @returns {Promise<boolean>}
   */
  async isLoaded() {
    try {
      await this.pageTitle.waitFor({ state: 'visible', timeout: 5000 });
      await this.inventoryList.waitFor({ state: 'visible', timeout: 5000 });
      return (await this.pageTitle.isVisible()) && (await this.inventoryList.isVisible());
    } catch {
      return false;
    }
  }
}

module.exports = { InventoryPage };

