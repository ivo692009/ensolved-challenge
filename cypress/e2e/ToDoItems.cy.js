describe('To Do Items', () => {
  
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
  
    })
    
    it('All Buttons should exists', () => {
      
        //Refresh button
        
        cy
        .get('.mr-2')
        .should('exist')

        //Create new item
       
        cy
        .get('[data-cy="entityCreateButton"]')
        .should('exist')

        //view item

        cy
        .get(':nth-child(1) > .text-right > .btn-group > [data-cy="entityDetailsButton"]')
        .should('exist')
        
        //Edit item

        cy
        .get(':nth-child(1) > .text-right > .btn-group > [data-cy="entityEditButton"]')
        .should('exist')
        
        //Delete item

        cy
        .get(':nth-child(1) > .text-right > .btn-group > [data-cy="entityDeleteButton"]')
        .should('exist')

    })
  
    it('Items should exist', () => {
    
        //ID section
       
        cy
        .get('thead > tr > :nth-child(1)')
        .should('contain', 'ID')

        cy
        .get('tbody > :nth-child(1) > :nth-child(1)')
        .should('exist')

        //Title section
       
        cy
        .get('thead > tr > :nth-child(2)')
        .should('contain', 'Title')

        cy
        .get('tbody > :nth-child(1) > :nth-child(2)')
        .should('exist')

        //Description section

        cy
        .get('thead > tr > :nth-child(3)')
        .should('contain','Description')

        cy
        .get('tbody > :nth-child(1) > :nth-child(3)')
        .should('exist')

        //Folder Section

        cy
        .get('thead > tr > :nth-child(4)')
        .should('contain','Folder')

        cy
        .get('tbody > :nth-child(1) > :nth-child(4)')
        .should('exist')


    })
  
  })