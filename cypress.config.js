const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report',
    overwrite: true,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Add event listeners here if needed
    },
  },
});
