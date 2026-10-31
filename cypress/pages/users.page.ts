import { BasePage } from './base.page';

export class UsersPage extends BasePage {
  private tableRows = 'tr[data-testid="user-row"], tbody tr';
  private searchInput = 'input[data-testid="search-user"], input[placeholder*="Pesquisar"]';
  private noResultsMessage = 'text=Nenhum registro encontrado';

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
    cy.get(this.noResultsMessage).should('be.visible');
  }
}