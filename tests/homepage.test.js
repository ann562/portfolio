const { test, expect } = require('@playwright/test');

test('homepage has the correct title', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('http://localhost:3000');

  // Check the title
  await expect(page).toHaveTitle('SAGE | Tech Survival Guide');
});

