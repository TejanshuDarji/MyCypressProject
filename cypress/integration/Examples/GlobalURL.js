/// <reference types="Cypress" /> 


describe ('My fourteenth test suite', ()=>{

    it('My first test case to validate no. of visivle products',() => {
        cy.visit(Cypress.env('url')+"seleniumPractise/#/") // url value comes from cypress.config.js file
       // cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)  //it'll only check for the visible products

        //should('have.length',4) - no. of elements which we are getting should be 4 as a total
    })

})