describe('Create or Edit Item', () => {
  
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
        .get('[data-cy="entityCreateButton"]')
        .click()
  
    })
    
    it('Create a New Item', () => {

        cy.wait(1000)
        //Title
        cy
        .get('[data-cy="title"]')
        .type('Test Item auto')

        //Description
        cy
        .get('[data-cy="description"]')
        .type('Test Auto Description')

        //First numer 15 Folder
        cy
        .get('[data-cy="folder"]')
        .select('15')

        //Save
        cy
        .get('[data-cy="entityCreateSaveButton"]')
        .click()

        //Success create a new item

    })
  
    it.only('Empty Slots', () => {
    
        cy.wait(1000)
        //Title
        cy
        .get('[data-cy="title"]')
        .clear()

        //Description
        cy
        .get('[data-cy="description"]')
        .clear()

        //First numer 15 Folder

        //Save
        cy
        .get('[data-cy="entityCreateSaveButton"]')
        .click()

        //Error message, fields are requierd
        //But it create anyway
    })
  
  })