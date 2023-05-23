const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.lambdatest.com/selenium-playground/",
    specPattern: "cypress/e2e/**/*.feature",
    reporter: 'junit',
    reporterOptions: {
      mochaFile: "reports/TEST-[hash].xml",
      screenshotOnRunFailure: true
    },
      setupNodeEvents(on, config) {
        on('file:preprocessor', cucumber());
        // implement node event listeners here
      },
    },
  });
