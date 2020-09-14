class FoodOrder {

    constructor(){
   
    }



    getLogInEmailField(){
        return cy.get(':nth-child(1) > .v-input__control > .v-input__slot > .v-text-field__slot > input')
    }

    getLogInPasswordField(){
       return cy.get(':nth-child(2) > .v-input__control > .v-input__slot > .v-text-field__slot > input')
    }

    getCartButton(){

       return cy.get('.flex > :nth-child(2) > :nth-child(1)')
    }

    getSettings(){

        return cy.get(':nth-child(5) > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title > span')
    }

    getLanguageDropdown(){
        return cy.get('.xs12 > :nth-child(1) > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
    }

    selectLithuanianLangauge(){
        return cy.get('.menuable__content__active > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title')
    }

    chooseTheFirstDay(){
        return cy.get('.v-list__group--active > .v-list__group__header > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title')
    }

}

export default FoodOrder;