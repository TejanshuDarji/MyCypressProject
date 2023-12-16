import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";

// import HomePage from '../../../../support/pageObjects/HomePage'
// import ProductPage from '../../../../support/pageObjects/ProductPage'

// const ProductPage = new productpage()
// const homePage = new Homepage()
    

Given('I open Ecommerce page',()=>{

    cy.visit('https://rahulshettyacademy.com/angularpractice/')

})

When('I add items to cart', ()=>{

    cy.get('a[href*="/angularpractice/shop"]').click() //this will click on shop button
        cy.selectproduct('Blackberry') // we created custom command as a selectproduct in the command.js file
        //.selectproduct('Nokia Edge')
        
        this.data.productnames.forEach(function(element) { // this will fetch productnames from fixtures file
            cy.selectproduct(element) // this is a custom command which runs for the elements present in fixtures file
            
        });

        ProductPage.checkoutbutton().click()
        ProductPage.checkout().click()

})

And('Validate the total prices',()=>{

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

})

Then('select the country,submit and verify success message',()=>{

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

    })

    When('I fill the form detail', ()=>{

        homePage.getEditbox().type(this.data.name) // will fetch name value from fixture file
        homePage.getgender().select(this.data.gender)
    
    })

    Then('Validate form behaviour',()=> {

        homePage.gettwowaydatabounding().should('have.value',this.data.name) //compare value with name
        homePage.getenterpruener().should('have.attr','minlength','2') // to validate attribute
        homePage.getratiobutton().should('be.disabled')

    })

    And('select the shop page',()=>{

        homePage.getshoptab().click()

    })