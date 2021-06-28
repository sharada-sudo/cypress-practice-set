/// <reference types="cypress" />

describe('Testing the Cypress doc',()=>{

    it('clicking on API and navigating to plugings',()=>{
        cy.visit('https://docs.cypress.io/')
        cy.get('.DocSearch-Button-Placeholder').contains('Search').type('drop down')
        cy.get('.DocSearch-Hit-title').first().click()
        cy.contains('API').click({force:true})
        cy.contains('Commands').click({force:true})
        cy.contains('and').click({force:true})
        cy.contains('hash').click({force:true})
       
        
    })
})