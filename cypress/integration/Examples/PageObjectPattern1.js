/// <reference types="Cypress" /> 


import Homepage from '../PageObjects/Homepage.js'

describe ('My elevanth test suite', ()=>{

    before(() => { // before means it'll run only once before starting execution of all testcases
        cy.fixture('example').then(function (data) { //data variable only accessible in this block only
           this. data = data; // this defines global data which will be accessible in every testcase
           // this variable scope is entire class
        })
    });
       
    // In below block , first we define all objects values in the pageobjects.js and then we are fetching from there

        it('My first testcase to use page object pattern for Homepage',(function() {
            const homePage = new Homepage() //Homepage is a object we we defined in the Pageobjects folder
        cy.visit('https://rahulshettyacademy.com/angularpractice/').wait(5000)
        homePage.getEditbox().type(this.data.name) // will fetch name value from fixture file
        homePage.getgender().select(this.data.gender) // will fetch gender value from fixture file
        homePage.gettwowaydatabounding().should('have.value',this.data.name) //compare value with name
        homePage.getenterpruener().should('have.attr','minlength','2') // to validate attribute
        homePage.getratiobutton().should('be.disabled')

    }))

})