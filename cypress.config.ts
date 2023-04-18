import { defineConfig } from "cypress";

export default defineConfig({
<<<<<<< HEAD
=======
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

>>>>>>> sprint-17
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
