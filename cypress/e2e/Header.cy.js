describe('Header', () => {
  
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

  
    })
    
    it('All item should exist', () => {
      cy
      .get(':nth-child(1) > .d-flex > span')
      .should('exist')

      cy
      .get(':nth-child(1) > .mr-2')
      .should('exist')

      cy
      .get(':nth-child(2) > .mr-2')
      .should('exist')

      cy
      .get('[data-cy="entity"] > .d-flex > span')
      .should('exist')

      cy
      .get('[data-cy="entity"] > .d-flex > span')
      .click()
      .then(()=>{
        cy
        .get('[href="/to-do-item"]')
        .should('exist')
      })
      

      cy
      .get('[data-cy="entity"] > .d-flex > span')
      .click()
      .then(()=>{
        cy
        .get('[href="/folder"]')
        .should('exist')
      })

      cy
      .get('[data-cy="accountMenu"] > .d-flex')
      .should('exist')

      cy
      .get('[data-cy="accountMenu"] > .d-flex')
      .click()
      .then(()=>{
        cy
        .get('[data-cy="settings"]')
        .should('exist')
      })
      
      cy
      .get('[data-cy="accountMenu"] > .d-flex')
      .click()
      .then(()=>{
        cy
        .get('[data-cy="logout"]')
        .should('exist')
      })

    })
  
    it('Log out', () => {
    
      cy
      .get('[data-cy="accountMenu"] > .d-flex')
      .click()
      .then(()=>{
        cy
        .get('[data-cy="logout"]')
        .click()
      })
      
      //Success logout message

      cy
      .get('h4')
      .should('contain','Logged out')
    })
  
  })