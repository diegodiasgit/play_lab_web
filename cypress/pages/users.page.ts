import { BasePage } from './base.page';

export class UsersPage extends BasePage {
  private tableRows = '#tableBody tr';
  private searchInput = '#tableSearch';

  validateTableLoaded() {
    cy.get(this.tableRows).should('have.length.greaterThan', 0);
  }

  searchUser(term: string) {
    cy.get(this.searchInput).clear().type(term);
  }

  validateUserPresent(name: string) {
    cy.contains(name).should('be.visible');
  }

  validateNoResults() {
    cy.contains('Showing 1-0 of 0 entries').should('be.visible');
  }
}