describe("leave page of CRM Application",()=>{

    it('validating the Admin Page',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("#txtUsername").type("Admin")
        cy.get("#txtPassword").type("admin123")
        cy.get("#btnLogin").click()
    })

    it('clicking on the Dashboard button',()=>{
        cy.get('a').contains('Dashboard').click()
    })

})