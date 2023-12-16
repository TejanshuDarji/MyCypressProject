/// <reference types="Cypress" /> 


describe ('My sixth test suite', ()=>{

    before(() => { // Before runs only once before run other tests
        cy.fixture('example').then(function (data) { //data variable only accessible in this block only
           this. data = data; // this defines global data which will be accessible in every testcase
           // this variable scope is entire class
        })
    });
    

    it('My first test case to use before mathod',(function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name) // will fetch name value from fixture file
        cy.get('select').select(this.data.gender) // will fetch gender value from fixture file

    }))

 

})