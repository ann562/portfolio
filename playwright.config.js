const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Ensures it picks up tests from the correct directory
  timeout: 30 * 1000, // Set timeout for each test
  retries: 0, // No retries for failing tests
});






