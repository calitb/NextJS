/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('Desktop', () => {
    context('Navigation', () => {
      it('should redirect to the Static Site Generator page', () => {
        cy.get('[href="/ssg/characters"]').click().url().should('contain', '/ssg/characters');
      });

      it('should redirect to the Server Site Rendered page', () => {
        cy.get('[href="/ssr/characters"]').click().url().should('contain', '/ssr/characters');
      });
    });
  });

  context('Mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-xr');
    });

    context('Navigation', () => {
      it('should redirect to the Static Site Generator page', () => {
        cy.get('[href="/ssg/characters"]').click().url().should('contain', '/ssg/characters');
      });

      it('should redirect to the Server Site Rendered page', () => {
        cy.get('[href="/ssr/characters"]').click().url().should('contain', '/ssr/characters');
      });
    });
  });
});
