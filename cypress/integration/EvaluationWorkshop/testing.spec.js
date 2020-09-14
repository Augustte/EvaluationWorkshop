/// <reference types="cypress" />

import FoodOrder from '/Users/Owner/Documents/EvaluationWorkshop/cypress/page_objects/foodOrderSystem/FoodOrder.js';


var foodie = new FoodOrder();

var loginEmail = "admin@green.vln";
var loginPassword = "Turtle000";


beforeEach("Executes before each test", ()=>{
    cy.visit("https://lunch.devbstaging.com/login-password")

    //log in
    foodie.getLogInEmailField().type(loginEmail)
    foodie.getLogInPasswordField().type(loginPassword)
    cy.get('.v-btn__content').click()

    cy.wait(2000)
})

it("cart should be empty", ()=>{

    foodie.getCartButton().should("have.value", '')
})

it("change language", ()=>{

    foodie.getSettings().click()
    foodie.getLanguageDropdown().click()
    foodie.selectLithuanianLangauge().click()
    cy.contains("Nustatymai")

})

it("check if you can order from a specific restaurant", ()=>{

    foodie.chooseTheFirstDay().click()

    cy.contains("TEST_AB2").click()

    cy.wait(2000)

    cy.contains("Likęs laikas")

})

it("add some items to cart", ()=>{

    foodie.chooseTheFirstDay().click()

    cy.contains("TEST_AB2").click()

    cy.wait(2000)

  /*  cy.get(':nth-child(1) > .v-list__tile > .v-list__tile__avatar > .v-avatar > .v-tooltip > :nth-child(1) > span > .v-icon').then($button => {
        if ($button.is(':visible')){
          //you get here only if button is visible
          cy.get(':nth-child(1) > .v-list__tile > .v-list__tile__avatar > .v-avatar > .v-tooltip > :nth-child(1) > span > .v-icon').click()
        }
      })*/

    //put some items to the cart

    cy.get(':nth-child(2) > .layout > :nth-child(1) > .v-card__text > div').click()
    cy.get(':nth-child(4) > :nth-child(1) > .v-card--hover > .v-card__text > div').click()


    //order up

    cy.get('.orders-list-button > .v-btn__content').click()

    cy.get('.v-snack__content').should("be.visible")
})

it("add two identical items to cart", ()=>{

    foodie.chooseTheFirstDay().click()

    cy.contains("TEST_AB2").click()

    cy.wait(2000)


    cy.get(':nth-child(2) > .layout > :nth-child(1) > .v-card__text > div').click()
    cy.get(':nth-child(2) > .layout > :nth-child(1) > .v-card__text > div').rightclick()
    cy.get('.menuable__content__active > .v-list > :nth-child(1) > .v-list__tile').click()


    cy.get(':nth-child(1) > :nth-child(1) > .v-chip').then(($btn) => {

        const txt = $btn.text()

        cy.get(':nth-child(2) > :nth-child(1) > .v-chip').should(($btn2) => {
          expect($btn2.text()).to.eq(txt)
        })
      })

    //order up
})


it.only("when you get free food", ()=>{

    
    cy.contains("Patiekalų Redagavimas").click()
    
    cy.wait(2000)

    cy.get(':nth-child(2) > .v-list__tile > .v-list__tile__action > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > input').should("be.enabled")

    
    foodie.chooseTheFirstDay().click()

    cy.contains("TEST_AB2").click()

    cy.wait(2000)
 
    //put some items to the cart

    cy.get(':nth-child(2) > .layout > :nth-child(1) > .v-card__text > div').click()
    cy.get(':nth-child(4) > :nth-child(1) > .v-card--hover > .v-card__text > div').click()


    //order up

    foodie.getCartButton().should("have.value", '')



}
)



