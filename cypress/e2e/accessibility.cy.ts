describe('Testes de Acessibilidade', () => {
  it('A11Y-06: Executar análise automatizada de acessibilidade', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y(undefined, {
      includedImpacts: ['critical', 'serious'],
    });
  });
});