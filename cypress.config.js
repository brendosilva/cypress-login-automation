const { defineConfig } = require("cypress");

module.exports = {
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://practicetestautomation.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
