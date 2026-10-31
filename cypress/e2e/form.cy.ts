// cypress/e2e/form.cy.ts
import { FormPage } from '../pages/form.page';

describe('Formulários e Validações', () => {
  const formPage = new FormPage();

  beforeEach(() => {
    formPage.visitFormPage();
  });

  it('FRM-01: Submeter o formulário com dados válidos', () => {
    formPage.fillName('QA Engineer Test');
    formPage.fillEmail('qa.engineer@playlab.com');
    formPage.submit();
    formPage.validateSuccessMessage();
  });

  it('FRM-02 [Negativo]: Tentar submeter sem preencher campos obrigatórios', () => {
    formPage.submit();
    formPage.validateRequiredFieldErrors();
  });
});