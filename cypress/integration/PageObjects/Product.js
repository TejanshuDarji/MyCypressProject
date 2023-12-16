class productpage
{
    checkoutbutton()
    {
       return cy.get('.nav-link.btn.btn-primary')
    }
    checkout()
    {
        return cy.get('.btn.btn-success')
    }
    textbox()
    {
        return cy.get('input[type*="text"]')
    }
    purchase()
    {
        return cy.get('input[value="Purchase"]')
    }
    terms()
    {
        return cy.get('label[for="checkbox2"]')
    }
    alert()
    {
        return cy.get('.alert')
    }
    selectcountry()
    {
        return cy.get('div[class="suggestions"] ul li a')
    }
}
  
export default productpage;