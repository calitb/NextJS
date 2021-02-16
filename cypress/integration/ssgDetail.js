/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('SSG CharacterDetail', () => {
  beforeEach(() => {
    cy.visit('/ssg/character/1');
  });

  context('Desktop', () => {
    context('Content', () => {
      it('should display the right content', () => {
        cy.get('.block').should('have.attr', 'src').should('eq', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg');
        cy.get('.text-lg').should('contain', 'Rick Sanchez');
        cy.get('.space-y-0\\.5 > :nth-child(2)').should('contain', 'Human');
        cy.get('.space-y-0\\.5 > :nth-child(3)').should('contain', 'Earth (C-137)');
      });
    });
  });

  context('Mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-xr');
    });

    context('Content', () => {
      it('should display the right content', () => {
        cy.get('.block').should('have.attr', 'src').should('eq', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg');
        cy.get('.text-lg').should('contain', 'Rick Sanchez');
        cy.get('.space-y-0\\.5 > :nth-child(2)').should('contain', 'Human');
        cy.get('.space-y-0\\.5 > :nth-child(3)').should('contain', 'Earth (C-137)');
      });
    });
  });
});
