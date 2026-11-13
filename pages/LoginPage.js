/**
 * Page Object Model for the Sauce Demo Login page.
 */
class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  /**
   * Navigate to the login page.
   */
  async goto() {
    await this.page.goto('/');
  }

  /**
   * Fill username and password, then click the login button.
   * @param {string} username
   * @param {string} password
   */
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  /**
   * Return the error message text if visible, or an empty string otherwise.
   * @returns {Promise<string>}
   */
  async getErrorMessage() {
    try {
      await this.errorMessage.waitFor({ state: 'visible', timeout: 5000 });
      const text = await this.errorMessage.textContent();
      return text ? text.trim() : '';
    } catch {
      return '';
    }
  }
}

module.exports = { LoginPage };

