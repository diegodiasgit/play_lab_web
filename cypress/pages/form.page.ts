// cypress/pages/form.page.ts
import { BasePage } from './base.page';

export class FormPage extends BasePage {
  // Mapeamento de seletores orientados a testes e acessibilidade
  private nameInput      = '[data-testid="input-name"], input[name="name"]';
  private emailInput     = '[data-testid="input-email"], input[name="email"]';
  private submitButton   = '[data-testid="submit-button"], button[type="submit"]';
  private successMessage = '[data-testid="success-message"], .alert-success';
  private nameError      = '[data-testid="error-name"], #name-error';
  private emailError     = '[data-testid="error-email"], #email-error';

  /**
   * Navega para a página do formulário
   */
  visitFormPage() {
    this.visit('/form');
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
   * Valida se a mensagem de sucesso está visível após o envio de dados válidos
   */
  validateSuccessMessage() {
    cy.get(this.successMessage).should('be.visible');
  }

  /**
   * Valida a exibição das mensagens de erro nos campos obrigatórios
   */
  validateRequiredFieldErrors() {
    cy.get(this.nameError).should('be.visible');
    cy.get(this.emailError).should('be.visible');
  }
}