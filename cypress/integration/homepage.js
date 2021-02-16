/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('Desktop', () => {
    context('Navigation', () => {
      it('should redirect to the SSG characters page', () => {
        cy.get('[href="/ssg/characters"]').click().url().should('contain', '/ssg/characters');
      });

      it('should redirect to the SSR characters page', () => {
        cy.get('[href="/ssr/characters"]').click().url().should('contain', '/ssr/characters');
      });
    });
  });

  context('Mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-xr');
    });

    context('Navigation', () => {
      it('should redirect to the SSG characters page', () => {
        cy.get('[href="/ssg/characters"]').click().url().should('contain', '/ssg/characters');
      });

      it('should redirect to the SSR characters page', () => {
        cy.get('[href="/ssr/characters"]').click().url().should('contain', '/ssr/characters');
      });
    });
  });
});

describe('Homepage', () => {
  context('Fixtures', () => {
    it('should mock the api call with a fixture', () => {
      cy.intercept('GET', 'https://rickandmortyapi.com/api/character/2', { fixture: 'character' });
      cy.visit('/');
      cy.get('#data').should('contain', 'John Smith');
    });

    it('should mock the api call with a modified fixture', () => {
      cy.fixture('character').then((character) => {
        character.name = 'John Appleseed';
        cy.intercept('GET', 'https://rickandmortyapi.com/api/character/2', character);
      });

      cy.visit('/');
      cy.get('#data').should('contain', 'John Appleseed');
    });

    it('should mock the api call with a full response', () => {
      cy.fixture('character-error.json').then((json) => {
        cy.intercept('GET', 'https://rickandmortyapi.com/api/character/2', {
          statusCode: 404,
          body: json,
        });
      });

      cy.visit('/');
      cy.get('#data').should('contain', 'undefined');
    });
  });
});
