/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('SSG CharactersList', () => {
  beforeEach(() => {
    cy.visit('/ssg/characters');
  });

  context('Desktop', () => {
    context('Navigation', () => {
      it('should redirect to the character page', () => {
        cy.get('[title="Rick Sanchez"]').click().url().should('contain', '/ssg/character/1');
      });
    });

    context('Content', () => {
      it('should display the right number of items', () => {
        cy.get('.flex').children().should('have.length', 20);
      });

      it('should display the right content inside the item', () => {
        cy.get('[title="Rick Sanchez"]').should('have.attr', 'class').should('contain', 'bg-blue-200 ');
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
      it('should redirect to the character page', () => {
        cy.get('[title="Rick Sanchez"]').click().url().should('contain', '/ssg/character/1');
      });
    });

    context('Content', () => {
      it('should display the right number of items', () => {
        cy.get('.flex').children().should('have.length', 20);
      });

      it('should display the right content inside the item', () => {
        cy.get('[title="Rick Sanchez"]').should('have.attr', 'class').should('contain', 'bg-blue-200 ');
        cy.get('[title="Rick Sanchez"] > .block').should('have.attr', 'src').should('eq', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg');
        cy.get('[title="Rick Sanchez"] > .text-center > .space-y-0\\.5 > .text-lg').should('contain', 'Rick Sanchez');
      });
    });
  });
});
