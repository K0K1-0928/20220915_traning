describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('passes', () => {
    cy.get('.game-info div').first().should('have.text', 'Next player: X');
  });

  it('square', () => {
    cy.get('.game-board div')
      .find('div')
      .find('button')
      .first()
      .click()
      .should('have.text', 'X');
  });
});
