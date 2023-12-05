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
  
       //Delete folder

       cy
       .get(':nth-child(1) > .text-right > .btn-group > [data-cy="entityDeleteButton"]')
       .click()

    })
    
    it('Delete a folder', () => {
      
        cy
        .get('[data-cy="entityConfirmDeleteButton"]')
        .click()

        //it should delete the folder
        //But it trows a 400 error

    })
  

  
  })