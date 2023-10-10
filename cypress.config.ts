import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    CYPRESS_AXE: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },
});
