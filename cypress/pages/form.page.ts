// cypress/pages/form.page.ts
import { BasePage } from './base.page';

export class FormPage extends BasePage {
  // Mapeamento de seletores orientados a testes e acessibilidade
  private addUsers       = '#addRowBtn' 
  private nameInput      = '#newUserName';
  private emailInput     = '#newUserEmail';      
  private submitButton   = '#modalConfirm';
  private tableInfo      = '#tableInfo'

  /**
   * Navega para a página do formulário
   */
  visitFormPage() {
    this.visit('/');
  }

  /**
   * Clica no botão para adicionar usuário
   */
  addUser() {
    cy.get(this.addUsers).click()
  }

  /**
   * Preenche o campo de nome
   */
  fillName(name: string) {
    cy.get(this.nameInput).clear().type(name);
  }

  /**
   * Preenche o campo de e-mail
   */
  fillEmail(email: string) {
    cy.get(this.emailInput).clear().type(email);
  }

  /**
   * Clica no botão de submissão do formulário
   */
  submit() {
    cy.get(this.submitButton).click();
  }

  /**
   * Contabiliza quantidade total de registros antes
   */
  getTotalRecords(): Cypress.Chainable<number> {
    return cy.get(this.tableInfo)
      .invoke('text')
      .then((text) => {
        const match = text.match(/of\s+(\d+)/);
        return match ? parseInt(match[1], 10) : 0;
      });
  }
}