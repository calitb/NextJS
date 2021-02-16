/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Characters', () => {
  beforeEach(() => {
    cy.visit('/ssg/character/3');
  });

  context('Desktop', () => {
    context('Content', () => {
      it('should show the right content', () => {
        cy.get('.block').should('have.attr', 'src').should('eq', 'https://rickandmortyapi.com/api/character/avatar/3.jpeg');
        cy.get('.text-lg').should('contain', 'Summer Smith');
        cy.get('.space-y-0\\.5 > :nth-child(2)').should('contain', 'Human');
        cy.get('.space-y-0\\.5 > :nth-child(3)').should('contain', 'Earth (Replacement Dimension)');
      });
    });
  });

  context('Mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-xr');
    });

    context('Content', () => {
      it('should show the right content', () => {
        cy.get('.block').should('have.attr', 'src').should('eq', 'https://rickandmortyapi.com/api/character/avatar/3.jpeg');
        cy.get('.text-lg').should('contain', 'Summer Smith');
        cy.get('.space-y-0\\.5 > :nth-child(2)').should('contain', 'Human');
        cy.get('.space-y-0\\.5 > :nth-child(3)').should('contain', 'Earth (Replacement Dimension)');
      });
    });
  });
});
