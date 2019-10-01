context('Navigation', () => {
  it('open browser', () => {
    cy.log("Open Browser and navigate to given URL")
    cy.visit('https://phptravels.com/demo/')

    cy.log('Verify Title - Application Test Drive')
    cy.get('.upper').contains('Application Test Drive')

    cy.log('Verify link www.phptravels.net is available and should be open in new browser.')
    cy.get('a[href ="//www.phptravels.net"]').should('have.attr', 'target', '_blank')
  })

  it('Navigate to url with diffrent origin:', () => {
    cy.log('Navigate to www.phptravels.net')
    cy.visit('https://www.phptravels.net')

    cy.log('Click on my account drop down')
    cy.get('[class="collapse navbar-collapse"] li[id="li_myaccount"]>a').click()

    cy.log('Click on login')
    cy.get('[class="collapse navbar-collapse"] li[id="li_myaccount"]>ul a[href="https://www.phptravels.net/login"]').click()

    cy.log('Enter User name')
    cy.get('[name="username"]').type('user@phptravels.com')

    cy.log('Enter password')
    cy.get('[name="password"]').type('demouser')

    cy.log('Click on login button')
    cy.get('[id="loginfrm"] button[type="submit"]').click()

    cy.log('Click on invoice button')
    cy.get(':nth-child(2) > .col-md-2.offset-0 > .btn').invoke('removeAttr', 'target').click()

    cy.log('verify page has “INVOICE“ text')
    cy.get('[style="font-size: 34px;text-transform:uppercase;font-weight: bold;"]').contains('Invoice')
  })
})