describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('passes', () => {
    cy.get('.game-info > div').first().should('have.text', 'Next player: X');
  });

  it('square', () => {
    cy.get('.square').first().click().should('have.text', 'X');
  });

  it('square-line', () => {
    cy.get('.square').as('squares');
    for (let i = 0; i < 7; i++) {
      cy.get('@squares').eq(i).click();
    }
    cy.get('.game-info > div').first().should('have.text', 'Winner: X');
  });
});
