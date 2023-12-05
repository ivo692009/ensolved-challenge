describe('User Settings', () => {
  
    beforeEach(()=>{
      cy
      .visit('https://qa-challenge.ensolvers.com')
      cy
      .get('[data-cy="username"]')
      .type("user")
      
      cy
      .get('[data-cy="password"]')
      .type("user")

      cy
      .get('[data-cy="submit"]')
      .click()

      //Welcome message for success login
      cy
      .get('h2')
      .should('contain','Welcome to Ensolvers QA Challenge!') 

      cy
      .get('[data-cy="accountMenu"] > .d-flex')
      .click()
      .then(()=>{
        cy
        .get('[data-cy="settings"]')
        .click()
      })

  
    })
    
    it('Modify user data', () => {
      
        cy.wait(1000)
        cy
        .get('[data-cy="firstname"]')
        .clear()
        .type('Pepito')

        cy
        .get('[data-cy="lastname"]')
        .clear()
        .type('Trueno')

        cy
        .get('[data-cy="email"]')
        .clear()
        .type('pepitotrueno@gmail.com')

        cy
        .get('[data-cy="submit"]')
        .click()


        //Success modify
    })
  
    it('Wrong Email', () => {
    
     
        cy.wait(1000)
      
        cy
        .get('[data-cy="email"]')
        .clear()
        .type('33x3@gml.com')

        cy
        .get('[data-cy="submit"]')
        .click()

        //It should send a error message
        //But it doesn't

    })
  
    it.only('Empty slots', () => {
    
        cy.wait(1000)
        cy
        .get('[data-cy="firstname"]')
        .clear()

        cy
        .get('[data-cy="lastname"]')
        .clear()

        cy
        .get('[data-cy="email"]')
        .clear()

        cy
        .get('[data-cy="submit"]')
        .click()

        //Error message

        cy
        .get(':nth-child(3) > .invalid-feedback')
        .should('contain','Your email')

        cy.get(':nth-child(1) > .invalid-feedback')
        .should('contain','Your first name')

        cy.get(':nth-child(2) > .invalid-feedback')
        .should('contain','Your last name')
    })

  })