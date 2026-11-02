describe('Componentes Dinâmicos e Assíncronos', () => {
  it('DYN-01: Aguardar o carregamento de um dropdown assíncrono', () => {
    cy.visit('/');
    cy.get('#country').should('be.enabled');
    cy.get('.country-select').select('United States').should('be.visible');
  });
});