/// <reference types="Cypress" /> 


describe ('My eight test suite', ()=>{

    it('My first test case to add to cart one product',(function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('a[href*="/angularpractice/shop"]').click() //this will click on shop button
        cy.get('h4.card-title').each(($el,index,$list) => { // we get the title of all products

            if($el.text().includes('Blackberry')) // if title includes blackberry keyword
            {
                cy.get('button.btn.btn-info').eq(index).click() // then click on the add to cart button for the same index where blackberry is present
            }
        })
    }))
})