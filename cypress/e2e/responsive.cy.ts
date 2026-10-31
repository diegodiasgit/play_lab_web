describe('Testes de Responsividade (Mobile Viewport)', () => {
  it('RSP-02: Executar jornada crítica em resolução mobile', () => {
    cy.viewport(390, 844); // Largura e altura do iPhone 13
    cy.visit('/users');

    cy.get('tr[data-testid="user-row"], tbody tr').should('have.length.greaterThan', 0);
    cy.get('header, nav').should('be.visible');
  });
});