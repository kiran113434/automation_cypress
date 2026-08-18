// const { defineConfig } = require("cypress");
// require('dotenv').config()
// module.exports = defineConfig({
//   allowCypressEnv: true,

//   e2e: {
//      baseUrl: process.env.CYPRESS_BASE_URL,   //CYPRESS RECOGNIZE ITSELF THE VARIABLE CYPRESS_BASE_URL SHOULD REMAIN AS IT IS 

//    env: {
//      USERNAME: process.env.CYPRESS_USERNAME,
//      PASSWORD: process.env.CYPRESS_PASSWORD
//    },

//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
     reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'report',
    overwrite: true,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
    e2e: {
        baseUrl: "https://petstore.octoperf.com",
        env: {
            USERNAME: process.env.CYPRESS_USERNAME,
            PASSWORD: process.env.CYPRESS_PASSWORD
        },

        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on)
      return config

        }
    }
});