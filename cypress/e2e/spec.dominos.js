/*
1. Order pizza for carryout
2. Find pizza store in New York City (2nd address)
3. Build your own pizza
4. With light cheese
5. With extra Robust Inspired Tomato Sauce
6. With pepperoni
7. Add to order (put in shopping cart)
8. Finally, it checks if shopping cart has text "Large (14") Hand Tossed Pizza"
*/

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
