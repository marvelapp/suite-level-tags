import { Then, When } from '@badeball/cypress-cucumber-preprocessor';

When('I load a page', () => {
  cy.visit("https://www.duckduckgo.com");
});

Then('the page should exist', () => {
  cy.contains('search').should('exist');
});
