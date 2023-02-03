// describe('template spec', () => {
//   it('Visits the Kitchen Sink', () => {
//     cy.visit('https://example.cypress.io')
//     cy.contains('type').click()
//     cy.url().should('include', '/commands/actions')


//     cy.get('#email1').type('raymond@email.com')

//     cy.get('#email1').should('have.value', 'raymond@email.com')
//   })
// })

describe("Domino's", () => {
  it('Build pizza and put in shopping cart', () => {
    cy.visit('https://www.dominos.com/en/restaurants')
    cy.get('#Carryout').click()
    cy.get('#City').type('New York')
    cy.get('#Region').select('NY')
    cy.get('.css-14js2j3').eq(0).click()
    cy.get('.js-orderCarryoutNow').eq(1).click()
    cy.get('.js-buildYourOwnPizza').eq(0).click()
    cy.get('.pizza-topping__weight').eq(0).select('Light')
    cy.get('.pizza-topping__weight').eq(1).select('Extra')
    cy.get('input[value="P"]').click()
    cy.get('.single-page-pizza-builder-desktop__add-to-order').click()
    cy.get('.site-nav__toggle--cart').click()
    cy.get('.btn--link-outline-offset').contains('Large (14") Hand Tossed Pizza')
  })
})
