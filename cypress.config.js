const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.ryanair.com/us/en',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    specPattern: "cypress/e2e/**/*.cy.js",
    screenshotOnRunFailure: true,
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
