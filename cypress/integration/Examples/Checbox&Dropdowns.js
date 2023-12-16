/// <reference types="Cypress" /> 


describe ('My second test suite', ()=>{

    it('My first test case to select checbox',() => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1') //check first checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked') // uncheck first checkbox
        cy.get('input[type="checkbox"]').check(['option2','option3']) // get all checkbox type elements & select multiple chekbox

        //check-uncheck - used for checkbox to check & uncheck
        //and - if we use and immediatelly after one command then it'll treated as the same
        //check - accept value property
    
    })

    it('My second test case to select static dropdown',() => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('select').select('option2').should('have.value','option2')  //select is a value attribute
        
    })

    it('My third test case to select dynamic dropdown',() => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el,index,$list) => {
            if($el.text()=='India')
            {
                cy.wrap($el).click()
            }

        // each command documentation : https://docs.cypress.io/api/commands/each    
        })
        cy.get('#autocomplete').should('have.value','India')
    })


    it('My fourth test case to verify that edit box is displaying or not ',() => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#displayed-text').should('be.visible')  //main field is visible
        cy.get('#hide-textbox').click() //click on hide button
        cy.get('#displayed-text').should('not.be.visible') // to validate now main field is not visible
        cy.get('#show-textbox').click() //click on show button
        cy.get('#displayed-text').should('be.visible') //to validate now main field is visible
    })

    it('My fifth test case to select radio button ',() => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="radio2"]').check() //select 2nd radio button
        cy.get('[value="radio2"]').should('be.checked') //to validate 2nd radio button is checked or not
    })

})