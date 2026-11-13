const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const users = require('../data/users.json');

test.describe('Sauce Demo Data-Driven Login Tests', () => {
  for (const user of users) {
    test(`Login attempt for "${user.username}" expecting ${user.expected}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);

      await loginPage.goto();
      await loginPage.login(user.username, user.password);

      if (user.expected === 'success') {
        const loaded = await inventoryPage.isLoaded();
        expect(loaded).toBe(true);
      } else {
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage.length).toBeGreaterThan(0);
      }
    });
  }
});

