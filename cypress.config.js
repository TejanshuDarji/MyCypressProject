const { defineConfig } = require("cypress");

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

//import { default as cucumber } from 'cypress-cucumber-preprocessor'


// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await addCucumberPreprocessorPlugin(on, config);

//   on("file:preprocessor", browserify.default(config));

//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }

// export default (on, config) => {
//   on('file:preprocessor', cucumber())
// }

module.exports = defineConfig({

  projectId: "(Add your project Id here)",
  retries: {
    runMode:1 // If the test will fail then it'll run one more time to see if it's failing again or not
  },


  defaultCommandTimeout: 6000, // this is a default timeout which applies to whole folder
  env: { //env is a property which contains more property inside it
    url:"https://rahulshettyacademy.com/"
  },

  e2e: {
    setupNodeEvents(on, config) {
    
      // implement node event listeners here
    },
    
    
    specPattern: 'cypress/integration/Examples/*.js',
   // specPattern: 'cypress/integration/Examples/BDD/*.feature', //specpattern is a path where our all test files are located
    //setupNodeEvents,
  },
});
