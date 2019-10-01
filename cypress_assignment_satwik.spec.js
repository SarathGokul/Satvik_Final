context('PHP Travels', () => {
  var nativeUrlCom_demo = "https://phptravels.com/demo/";
  var linkForPHPTravels = "https://www.phptravels.net";
  var titleApplicationTestDrive = "Application Test Drive";
  var username = "user@phptravels.com";
  var password = "demouser"
  var titleInvoice = "Invoice";

  it('open browser', () => {

    cy.log("Navigate to URL - " +nativeUrlCom_demo)
    cy.visit(nativeUrlCom_demo)   
    
    cy.log('Verify Title - '+titleApplicationTestDrive)
    cy.get('.upper').contains(titleApplicationTestDrive)  
    
    cy.log('Verify first available button for "www.phptravels.net" is available and should open in new browser.')    
    cy.get('[data-wow-delay="0.5s"] > .resource-box > :nth-child(1) > .col-md-9 > .col-md-12 > :nth-child(1) > :nth-child(1) > .row > .btn').should('have.attr', 'target', '_blank')

    cy.get('[data-wow-delay="0.5s"] > .resource-box > :nth-child(1) > .col-md-9 > .col-md-12 > :nth-child(1) > :nth-child(1) > .row > .btn')
    .invoke('attr','href')
    .then($href => {   
       linkForPHPTravels = 'https:'+ $href   
       cy.log('Fetched link is: '+linkForPHPTravels)
     })
  
  })
  
  it('Navigate to fetched url for given button as it is a diffrent origin:', () => {
     
     cy.log('Navigate to '+ linkForPHPTravels)    
     cy.visit(linkForPHPTravels)

    cy.log('Click on my account drop down')    
    cy.get('[class="collapse navbar-collapse"] li[id="li_myaccount"]>a').click()
      
    cy.log('Click on login')    
    cy.get('[class="collapse navbar-collapse"] li[id="li_myaccount"]>ul a[href="https://www.phptravels.net/login"]').click()
      
    cy.log('Enter User name')    
    cy.get('[name="username"]').type(username)
      
    cy.log('Enter password')    
    cy.get('[name="password"]').type(password)
       
    cy.log('Click on login button')    
    cy.get('[id="loginfrm"] button[type="submit"]').click()
       
    cy.log('Click on invoice button')    
    cy.get(':nth-child(2) > .col-md-2.offset-0 > .btn').invoke('removeAttr', 'target').click()
       
    cy.log('verify page has '+titleInvoice+' text')    
    cy.get('[style="font-size: 34px;text-transform:uppercase;font-weight: bold;"]').contains(titleInvoice)
      
   })
   
})