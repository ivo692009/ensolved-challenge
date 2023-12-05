describe('Create or Edit a Folder', () => {
  
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
      
      cy
      .get('[data-cy="entityCreateButton"]')
      .click()
   

    })
    
    it('Create a New Folder', () => {
      
        cy.wait(1000)

        cy
        .get('[data-cy="name"]')
        .type('New Folder Automation')

        cy
        .get('[data-cy="entityCreateSaveButton"]')
        .click()

        //success new folder

    })
  
    it.only('Empty Slots', () => {
      
     cy.wait(1000)
        
        cy
        .get('[data-cy="name"]')
        .clear()

        cy
        .get('[data-cy="entityCreateSaveButton"]')
        .click()

        //Should send a message it says it needs a name
        //But it pass

    })

  
  })