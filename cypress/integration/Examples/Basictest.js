
//intelligent code completion - https://docs.cypress.io/guides/tooling/IDE-integration#Intelligent-Code-Completion

/// <reference types="Cypress" /> 


describe ('My first test suite', ()=>{

    it('My first test case to validate no. of visivle products',() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)  //it'll only check for the visible products

        //should('have.length',4) - no. of elements which we are getting should be 4 as a total
    })

    it('My second test case to validate no. of visible products & add to cart',() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').find('.product').should('have.length',4) //parent-child dom element
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click() //it'll give 2nd product from the all products and click on add to cart button
        //contains() - it'll find the element which contains particualr keyword
        //eq(n) - select the item from nth index from the all available items
    })

    it('My third test case to select product dynamically based on the text',() => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').find('.product').each(($el, index, $list) => {
        const textVeg=$el.find('h4.product-name').text()
        if(textVeg.includes('Cashews'))
        {
            cy.wrap($el).find('button').click()
        }
        })
        //each - it'll go and find element from each index - https://docs.cypress.io/api/commands/each
        //we can user click with find , if want to use then need to use it woth warp command
    })

    it('My fourth test case to click on greenkart logo',() => {
       cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
       cy.get('.brand').then(function(logoelement) // added element in a function
       {
        cy.log(logoelement.text()) // fetch text from the function & printed in a log
       })
        
    })

    it('My fifth test case to optimize code',() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.product').as('productlocator')  // as - store value in a variable
        cy.get('.search-keyword').type('ca')
        cy.get('@productlocator').should('have.length',5)
         
     })

     it('My sixth test case to go to cart ',() => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').find('.product').each(($el, index, $list) => {
        const textVeg=$el.find('h4.product-name').text()
        if(textVeg.includes('Cashews'))
        {
            cy.wrap($el).find('button').click()
        }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})

