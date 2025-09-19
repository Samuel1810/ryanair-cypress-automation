class BookingDetails {

    selectDepartureOption() {
        return cy.get('.ng-tns-c2000314541-15 > .flight-card-summary__footer > .flight-card-summary__tags > .flight-card-summary__select-btn')
    }

    selectReturnOption() {
        return cy.get('.flight-card-summary__select-btn')
    }

    chooseFareOption() {
        return cy.get('[data-e2e="fare-card-standard"] > .fare-table__fare-column-border', { timeout: 30000 })
    }

    confirmFareButton() {
        return cy.get(':nth-child(2) > fare-table-upgrade-footer > .fare-footer__submit-btn', { timeout: 30000 })
    }

    loginLater() {
        return cy.get('.login-touchpoint__login-later')
    }

    titleInput() {
        return cy.get('.dropdown__toggle')
    }

    firstNameInput(firstName) {
        cy.get('input[id="form.passengers.ADT-0.name"]').type(firstName)
    }

    lastNameInput(lastName) {
        cy.get('input[id="form.passengers.ADT-0.surname"]').type(lastName)
    }

    continueFlowButton() {
        return cy.get('.continue-flow__button')
    }

    recommendedSeatButton() {
        return cy.get('.passenger-carousel__cta')
    }

    denyFastTrack() {
        return cy.get('.enhanced-takeover-beta__product-dismiss-cta')
    }

    chooseDepartureBag() {
        return cy.get('[data-ref="product.outbound"] > .pax-row > .pax-row__controls > bags-cabin-bag-table-controls-container.ng-star-inserted > bags-cabin-bag-table-controls > :nth-child(1) > bags-small-bag-pax-control.ng-star-inserted > [data-ref="product.small-bag"] > .ng-star-inserted > .product-selector > .product-selector__container > .product-selector__control > .ry-radio-circle-button > .ry-radio-circle-button__label')
    }

    chooseReturnBag() {
        return cy.get('[data-ref="product.inbound"] > .pax-row > .pax-row__controls > bags-cabin-bag-table-controls-container.ng-star-inserted > bags-cabin-bag-table-controls > :nth-child(1) > bags-small-bag-pax-control.ng-star-inserted > [data-ref="product.small-bag"] > .ng-star-inserted > .product-selector > .product-selector__container > .product-selector__control > .ry-radio-circle-button > .ry-radio-circle-button__label')
    }

    bagContinueButton() {
        return cy.get('.ry-button--gradient-yellow')
    }

    extrasContinueButton() {
        return cy.get('.airport-and-flight__cta')
    }

    transportContinueButton() {
        return cy.get('.transport__cta', { timeout: 10000 })
    }
}

export default new BookingDetails;