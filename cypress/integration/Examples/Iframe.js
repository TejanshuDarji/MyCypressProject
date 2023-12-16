/// <reference types="Cypress" /> 
/// <reference types="Cypress-iframe" /> // refrence for iframe command

import 'cypress-iframe' // npm install -D cypress-iframe - run this command in terminal & it will import cypress-iframe plugin

describe('My fifth Test Suite', function() {

it('My first test case to validate element in iframe ',function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('#courses-iframe') // move focus to ifram
        cy.wait(10000)
        cy.iframe().find('a[href*="mentorship"]').eq(0).click() // inside the iframe find the 1st matched element and click on it
        cy.wait(10000)
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2) //on the mentiorship page , compare the pricing-title element

    })

})

