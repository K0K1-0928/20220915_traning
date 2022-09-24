describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Next player: X should appear in status.', () => {
    cy.dataCy('status').shouldHaveText('Next player: X');
  });

  it('If you click on the upper left square', () => {
    cy.dataCy('square').first().click().shouldHaveText('X');
  });

  it('When 3 squares are aligned', () => {
    cy.dataCy('square').as('squares');
    for (let i = 0; i < 7; i++) {
      cy.get('@squares').eq(i).click();
    }
    cy.dataCy('status').shouldHaveText('Winner: X');
  });
});
