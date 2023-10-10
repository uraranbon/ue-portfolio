import 'cypress-axe'

describe("Accessibility Test", () => {
  it("Accessibility Test", () => {
    cy.visit("http://localhost:3000");
    cy.injectAxe();
  });
});