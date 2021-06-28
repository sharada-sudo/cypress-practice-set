describe('Adding products to the cart',()=>{

    it.skip('select the product',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.ajax_add_to_cart_button').eq(3).click()
        cy.get('.cross').click({force: true})
        cy.get('.shopping_cart').trigger('mouseover')
        cy.contains('Check out').click({force: true})
       // cy.contains('Continue shopping').click()
    })

    it('click More Button',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.lnk_view').eq(0).click()
    })

    it.skip('click More Button',()=>{
        cy.get('.lnk_view').eq(3).click()
    })
})