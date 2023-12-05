describe('Folders', () => {
  
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
        .get('[href="/folder"]')
        .click()
      })
  
    })
    
    it('All Buttons should exists', () => {
      
        //Refresh button
        cy
        .get('.mr-2')
        .should('exist')

        //Create new folder
        cy
        .get('[data-cy="entityCreateButton"]')
        .should('exist')

        //view folder

        cy
        .get(':nth-child(1) > .text-right > .btn-group > [data-cy="entityDetailsButton"]')
        .should('exist')

        //Edit folder

        cy
        .get(':nth-child(1) > .text-right > .btn-group > [data-cy="entityEditButton"]')
        .should('exist')

        //Delete folder

        cy
        .get(':nth-child(1) > .text-right > .btn-group > [data-cy="entityDeleteButton"]')
        .should('exist')

    })
  
    it.only('Folders should exist', () => {
    
        //ID section
        cy
        .get('thead > tr > :nth-child(1)')
        .should('contain','ID')

        cy
        .get('tbody > :nth-child(1) > :nth-child(1)')
        .should('exist')

        //Name Folder
        cy
        .get('thead > tr > :nth-child(2)')
        .should('contain', 'Name')

        cy
        .get('tbody > :nth-child(1) > :nth-child(2)')
        .should('exist')
    })
  
  })