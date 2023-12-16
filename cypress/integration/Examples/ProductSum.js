/// <reference types="Cypress" /> 

import productpage from "../PageObjects/Product";

describe ('My thirteenth test suite', ()=>{

    beforeEach(() => { //beforeEach is a function which executes before all testcases
        cy.fixture('example').then(function (data) { //data variable only accessible in this block only
           this. data = data; // this defines global data which will be accessible in every testcase
           // this variable scope is entire class
        })
    });

    it('My first testcase to use page object pattern for productepage',(function() {
        Cypress.config('defaultCommandTimeout',8000) // this command applies to only this it block
        const ProductPage = new productpage() //productpage is a object we we defined in the Pageobjects folder
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('a[href*="/angularpractice/shop"]').click() //this will click on shop button
        cy.selectproduct('Blackberry') // we created custom command as a selectproduct in the command.js file
        //.selectproduct('Nokia Edge')
        
    
        this.data.productnames.forEach(function(element) { // this will fetch productnames from fixtures file
            cy.selectproduct(element) // this is a custom command which runs for the elements present in fixtures file
            
        });

        ProductPage.checkoutbutton().click()
        var sum=0

       // To sum a value of 2 product price
        cy.get('tr td:nth-child(4) strong').each(($el,index,$list) =>
        {
            //cy.log($el.text())
            const amount=$el.text()
            var res=amount.split(" ") //it'll store value in index , for example if value is $.5000 then res[0]=$. and res[1]=5000
            res=res[1].trim() // trim() will remove extra spaces 
            sum=Number(sum)+Number(res) // Number will convert string into number formate
            
        }).then(function(){ // non-cypress
            cy.log(sum) //it'll wait function to execute first before printing sum before cypress is asynchronous
        })

        // Validate Total of 2 product
        cy.get('h3 strong').then(function(element)
        {
            const amount=element.text()
            var res=amount.split(" ") //it'll store value in index , for example if value is $.5000 then res[0]=$. and res[1]=5000
            var total=res[1].trim() // trim() will remove extra spaces 
            expect(Number(total)).to.equal(sum)
        })

        
        //ProductPage is a const we we introduced in the 3rd line
        ProductPage.checkout().click()
        ProductPage.textbox().type('India')
        ProductPage.selectcountry().click()
        ProductPage.terms().click({force:true})
        ProductPage.purchase().click()
       // ProductPage.alert().should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
       ProductPage.alert().then(function(element)
       {
            const actualText=element.text()
            expect(actualText.includes("Success")).to.be.true //jquery assertion -https://docs.cypress.io/guides/references/assertions#Chai
            // if(actualText.includes("Success"))
            // {

            // }
       })

    }))
})