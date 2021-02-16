/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Characters', () => {
  beforeEach(() => {
    cy.visit('/ssg/characters');
  });

  context('Desktop', () => {
    context('Navigation', () => {
      it('should redirect to details', () => {
        cy.get('[title="Morty Smith"]').click().url().should('contain', '/ssg/character/2');
      });
    });

    context('Content', () => {
      it('should show the 20 elements', () => {
        cy.get('.flex').children().should('have.length', 20);
      });

      it('should show the right content', () => {
        cy.get('[title="Rick Sanchez"] > .block').should('have.attr', 'src').should('eq', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg');
        cy.get('[title="Rick Sanchez"] > .text-center > .space-y-0\\.5 > .text-lg').should('contain', 'Rick Sanchez');
      });
    });
  });

  context('Mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-xr');
    });

    context('Navigation', () => {
      it('should redirect to details', () => {
        cy.get('[title="Morty Smith"]').click().url().should('contain', '/ssg/character/2');
      });
    });

    context('Content', () => {
      it('should show the 20 elements', () => {
        cy.get('.flex').children().should('have.length', 20);
      });

      it('should show the right content', () => {
        cy.get('[title="Rick Sanchez"] > .block').should('have.attr', 'src').should('eq', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg');
        cy.get('[title="Rick Sanchez"] > .text-center > .space-y-0\\.5 > .text-lg').should('contain', 'Rick Sanchez');
      });
    });
  });
});
