/// <reference types="Cypress" /> 


describe ('My fourth test suite', ()=>{

    it('My first test case to validate price from web table',() => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {  // css to select nth child - it'll select 2nd column from table
 
            const text=$el.text()
            if(text.includes("Python")) // if python text is included 
            {
         
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price) // https://docs.cypress.io/api/commands/next - then go to price tab
                {
                 const priceText=   price.text()
                 expect(priceText).to.equal('25') // validate price is 25 or not
                })
            }
         
        })

    })


    it('My second test case to validate mouse hover',() => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover-content').invoke('show') //it'll show hiddne lements
        cy.contains('Top').click() //it'll click on the element which contains Top keyword
        //cy.contains('Top').click({force:true}) //it'll forcefullt find the element with Top keyword and click on that 
        cy.url().should('include','top') // it'll validate that url contains top keyword
        
    })

})

