describe('Restore Password', () => {
  
    beforeEach(()=>{
      cy
      .visit('https://qa-challenge.ensolvers.com')

      cy
      .get('[data-cy="forgetYourPasswordSelector"]')
      .click()
  
    })
    
    it('Correct email', () => {

        cy.get('[data-cy="emailResetPassword"]')
        .type("pepegrillo@gmail.com")

        cy.get('[data-cy="submit"]')
        .click()

        //Correct way
    })
  
    it('Invalid Email', () => {
        
        cy.get('[data-cy="emailResetPassword"]')
        .type("xx..@il.com")

        cy.get('[data-cy="submit"]')
        .click()

        //Send error message
        cy
        .xpath('//*[@id="app-view-container"]/div[1]/div/div/div/div/form/div/div')
        .should('contain', 'Your email is invalid.')

    })
  
  })