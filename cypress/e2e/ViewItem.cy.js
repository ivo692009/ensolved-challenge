describe('View Item', () => {
  
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
      .get('[data-cy="entity"] > .d-flex > span')
      .click()
      .then(()=>{
        cy
        .get('[href="/to-do-item"]')
        .click()
      })
  
      cy
        .get(':nth-child(1) > .text-right > .btn-group > [data-cy="entityDetailsButton"]')
        .click()
    })
    
    it('All Information about an Item', () => {
      
        //ID
        cy
        .get('.jh-entity-details > :nth-child(1)')
        .should('contain','ID')

        //Title
        cy
        .get('.jh-entity-details > :nth-child(3)')
        .should('contain','Title')

        //Description
        cy
        .get('#description')
        .should('contain','Description')

        //User
        cy
        .get('.jh-entity-details > :nth-child(7)')
        .should('contain','User')

        //Folder
        cy
        .get('.jh-entity-details > :nth-child(9)')
        .should('contain','Folder')

        //Buttons
        cy
        .get('[data-cy="entityDetailsBackButton"]')
        .should('exist')

        cy
        .get('.btn-primary')
        .should('exist')

    })
  

  
  })