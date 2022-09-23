describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Next player: X should appear in game-info.', () => {
    cy.get('.game-info > div').first().should('have.text', 'Next player: X');
  });

  it('If you click on the upper left square', () => {
    cy.get('.square').first().click().should('have.text', 'X');
  });

  it('When 3 squares are aligned', () => {
    cy.get('.square').as('squares');
    for (let i = 0; i < 7; i++) {
      cy.get('@squares').eq(i).click();
    }
    cy.get('.game-info > div').first().should('have.text', 'Winner: X');
  });
});
