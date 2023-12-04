import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    mochaFile: 'cypress/reports/mocha-report-[hash].json',
    overwrite: false,
    html: true,
    json: true,
  },
});
