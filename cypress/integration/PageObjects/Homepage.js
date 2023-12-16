class Homepage
{
   getEditbox()
   {
    return cy.get('input[name="name"]:nth-child(2)')
   }

   gettwowaydatabounding()
   {
    return cy.get(':nth-child(4) > .ng-untouched')
   }

   getgender()
   {
    return cy.get('select')
   }

   getratiobutton()
   {
    return cy.get('input[id*="inlineRadio3"]')
   }

   getenterpruener()
   {
      return cy.get('input[name="name"]:nth-child(2)')
   }

   getshoptab()
   {
      return cy.get('a[href*="shop"]')
   }


}
  
export default Homepage;