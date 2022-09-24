// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />
Cypress.Commands.add('dataCy', (selector) => {
  return cy.get(`[data-cy=${selector}]`);
});
Cypress.Commands.add(
  'shouldHaveText',
  { prevSubject: 'element' },
  (subject, text) => {
    return cy.wrap(subject).should('have.text', text);
  }
);

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      dataCy(selector: string): Chainable<JQuery<HTMLElement>>;
      shouldHaveText(text: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
export {};
