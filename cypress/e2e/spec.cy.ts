describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.debug();
    cy.contains('Cypress-demo is running')
  })
})
