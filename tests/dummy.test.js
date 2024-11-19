const { test, expect } = require('@playwright/test');

test('dummy test', async ({ page }) => {
  await page.goto('http://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
