/// <reference types="Cypress" /> 


describe ('My tenth test suite', ()=>{

    beforeEach(() => {
        cy.fixture('example').then(function (data) { //data variable only accessible in this block only
           this. data = data; // this defines global data which will be accessible in every testcase
           // this variable scope is entire class
        })
    });

    it('My first test case to add to cart multiple product by parameterise',(function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('a[href*="/angularpractice/shop"]').click() //this will click on shop button
    
        this.data.productnames.forEach(function(element) { // this will fetch productnames from fixtures file
            cy.selectproduct(element) // this is a custom command which runs for the elements present in fixtures file
        });
        
    }))
})