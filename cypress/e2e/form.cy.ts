// cypress/e2e/form.cy.ts
import { FormPage } from '../pages/form.page';
import { UsersPage } from '../pages/users.page';

describe('Formulários e Validações', () => {
  const formPage = new FormPage();
  const usersPage = new UsersPage();

  beforeEach(() => {
    formPage.visitFormPage();
  });

  it('FRM-01: Submeter o formulário com dados válidos', () => {
    formPage.addUser();
    formPage.fillName('Name Test');
    formPage.fillEmail('name_test@test.com');
    formPage.submit();
    usersPage.searchUser('Name Test');
    usersPage.validateUserPresent('Name Test');
  });

  it('FRM-02 [Negativo]: Tentar submeter sem preencher campos obrigatórios', () => {
    formPage.getTotalRecords().then((initialTotal) => {
      cy.log(`Total inicial: ${initialTotal}`);

      formPage.addUser();
      formPage.submit();

      formPage.getTotalRecords().then((finalTotal) => {
        cy.log(`Total final: ${finalTotal}`);

        expect(finalTotal).to.equal(initialTotal);
      });
    });
  });
});