describe('Adding the mouseover scripts', ()=>{

    it.skip('logging sign in with mouseover',()=>{
        cy.visit('https://www.spicejet.com/')
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')
        cy.contains('Member Login').click({force:true})
    })
        it.skip('One more mousw over with signup',()=>{
    cy.contains('Login / Signup').trigger('mouseover')
    cy.contains('SpiceClub Members').trigger('mouseover')
    cy.contains('Sign up').click()
})

    it('Mouseover with orangeHRM',()=>{
        cy.visit('https://www.orangehrm.com/')
        cy.contains('Company').trigger('mouseover')
        cy.contains('About Us').click({force:true})
    })
    
})