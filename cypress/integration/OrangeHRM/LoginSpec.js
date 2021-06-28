/// <reference types="cypress" />

describe('Testing the HRMlogin Page',()=>{

    it('Logging into the Home Page', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("#txtUsername").type("Admin")
        cy.get("#txtPassword").type("admin123")
        cy.get("#btnLogin").click()
    })

    it('teting the Home Page',()=>{
        //cy.get('#MP_link').click()
        cy.get("#menu_admin_viewAdminModule").trigger('mousedown')
        cy.get('#menu_admin_UserManagement')
        .should('have.length', 1)
        cy.get('#menu_admin_viewSystemUsers').contains('Users').click({force:true})
        

    })
    

    it('Logging Out of the Home page',()=>{
        cy.get("#welcome").click()
        cy.get('a').contains('Logout').click()
    })
    
})