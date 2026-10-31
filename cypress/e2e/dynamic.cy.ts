describe('Componentes Dinâmicos e Assíncronos', () => {
  it('DYN-01: Aguardar o carregamento de um dropdown assíncrono', () => {
    cy.visit('/dynamic-components');

    cy.get('[data-testid="async-dropdown"]', { timeout: 15000 }).should('be.enabled').click();
    cy.get('[role="option"]').first().should('be.visible');
  });
});