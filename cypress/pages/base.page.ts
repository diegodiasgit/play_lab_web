export class BasePage {
  visit(path: string = '/') {
    cy.visit(path, { failOnStatusCode: false });
  }
}