describe('Dashboard', () => {
  
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
    
    it('Manage To-Do Item works', () => {
      
        cy
        .get(':nth-child(1) > .mr-2')
        .click()

        //Success enter in to do item url 
        cy
        .url()
        .should('contain','https://qa-challenge.ensolvers.com/to-do-item?page=1&sort=id,asc')

    })
  
    it('Manage Folders works', () => {
    
        cy
        .get(':nth-child(2) > .mr-2')
        .click()

        //Success enter in folder url
        cy
        .url()
        .should('contain','https://qa-challenge.ensolvers.com/folder')

      
    })
  
   
  })