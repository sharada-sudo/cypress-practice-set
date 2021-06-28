describe('Testing with Cypress', () => {

    it.skip('testing the company link', () => {
        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
        cy.get('#Form_submitForm_FirstName').type('sharada')
        cy.get('#Form_submitForm_LastName').type('telkar')
        cy.get('#Form_submitForm_Email').type('sharada.telkar@gmail.com')
        cy.get('#Form_submitForm_JobTitle').type('tester')
        cy.get('#Form_submitForm_NoOfEmployees')
        .select('76 - 100')
        .should('have.value', '76 - 100')
        cy.get('#Form_submitForm_CompanyName').type('Accenture')
        cy.get('#Form_submitForm_Industry').select('Travel')
        .should('have.value', 'Travel')
        cy.get('#Form_submitForm_Contact').type('989897')
        cy.get('#Form_submitForm_Country').select('Australia')
        .should('have.value', 'Australia')
        cy.get('#Form_submitForm_SetDummyData')
        .check()

    })

    it.skip('Mouseover with orangeHRM', () => {
        cy.contains('Company').trigger('mouseover')
        cy.contains('About Us').click({ force: true })
    })

    it.skip('Clicking Reporting and Analytics through mouseover', () => {
        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
        cy.contains('Platform').trigger('mouseover')
        cy.contains('Reporting & Analytics').click({ force: true })
    })

    it.skip('Clicking Reporting and Analytics through mouseover', () => {
        //cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
        cy.contains('Platform').trigger('mouseover')
        cy.contains('Compare Packages').click({ force: true })
    })

    it.skip('click on Recaptcha', () => {
        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
        cy.get('iframe')
            .first()
            .its('0.contentDocument.body')
            .should('not.be.undefined')
            .and('not.be.empty')
            .then(cy.wrap)
            .find('#recaptcha-anchor')
            .should('be.visible')
            .click();
        })

            it('click on blog',()=>{
                cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
                cy.get('a').contains('Blog').click()
            })

    
})