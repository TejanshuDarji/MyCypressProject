/// <reference types="Cypress" /> 


describe ('My nine test suite', ()=>{

    it('My first test case to add to cart multiple product by custom command',(function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('a[href*="/angularpractice/shop"]').click() //this will click on shop button
        cy.selectproduct('blackberry') // we created custom command as a selectproduct in the command.js file
        cy.selectproduct('Nokia Edge')
    }))
})