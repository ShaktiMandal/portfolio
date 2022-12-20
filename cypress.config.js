const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    experimentalSessionAndOrigin: true,
    specPattern: 'cypress/e2e/spec/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/e2e/fixtures',
    screenshotFolder: 'cypress/e2e/screenshotFolder',
    videosFolder: 'cypress/e2e/videosFolder',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
