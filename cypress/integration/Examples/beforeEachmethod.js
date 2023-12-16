/// <reference types="Cypress" /> 

describe ('My seventh test suite', ()=>{

    beforeEach(() => {
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

        it('My second test case to use do assestion',(function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/').wait(5000)
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name) // will fetch name value from fixture file
        cy.get('select').select(this.data.gender) // will fetch gender value from fixture file
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name) //compare value with name
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2') // to validate attribute
        cy.get('input[id*="inlineRadio3"]').should('be.disabled')

    }))


})