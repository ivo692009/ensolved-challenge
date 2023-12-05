describe('LogIn', () => {
  
  beforeEach(()=>{
    cy
    .visit('https://qa-challenge.ensolvers.com')

  })
  
  it('Susscesfull access', () => {
    
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

  it('Empty slots', () => {
    
    cy
    .get('[data-cy="username"]')
    .type(" ")

    cy
    .get('[data-cy="password"]')
    .type(" ")

    cy
    .get('[data-cy="submit"]')
    .click()

    //Should send error message
    cy
    .get('.Toastify__toast-body')
    .should("exist")

  })

  it('Invalid fields', () => {
    
    cy
    .get('[data-cy="username"]')
    .type("asd")

    cy
    .get('[data-cy="password"]')
    .type("asd")

    cy
    .get('[data-cy="submit"]')
    .click()

    //Should send error message
    cy
    .get('.Toastify__toast-body')
    .should("exist")
  })
})