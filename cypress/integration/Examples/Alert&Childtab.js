/// <reference types="Cypress" /> 


describe ('My third test suite', ()=>{

    it('My first test case to accept alert or popup',() => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()  //click on alert button
        cy.get('input[value="Confirm"]').click() //click on confirm button
        cy.on('window:alert',(str)=>  //window.alert() instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.
        {
            expect(str).to.equal('Hello , share this practice page and share your knowledge') //compare output
        })
        
    })

    it('My second test case to accept alert or popup',() => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()  //click on alert button
        cy.get('input[value="Confirm"]').click() //click on confirm button
        cy.on('window:confirm',(str)=>  //window.confirm() instructs the browser to display a dialog with an optional message, and to wait until the user either confirms or cancels the dialog.
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?') //compare output
        })
        
    })

/*   it('My fourth test case to handle child window or child tab',() => {

        Cypress.config('pageLoadTimeout', 100000)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("#opentab").invoke('removeAttr','target').click(); //removing target attribute , so it'll not open new link in new tab
        
        cy.origin("https://www.qaclickacademy.com",()=>
        {
         cy.get("#navbarSupportedContent a[href*='about']").click();
         cy.get(".mt-50 h2").should('contain','QAClick Academy');
  
        })
      
    })
*/   //above block is commented out because currently qaclickacademy is not working and there might be chance due to that this testcase will fail

        it('My fourth test case to handle child window or child tab', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    
           cy.get(".blinkingText").invoke('removeAttr','target').click(); //removing target attribute , so it'll not open new link in new tab
           cy.get(".col-md-6 h2").should('contain','An Academy to ');
     
    })
    
})


