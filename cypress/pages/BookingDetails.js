class BookingDetails {

    selectDepartureOption() {
        cy.get('.ng-tns-c2000314541-15 > .flight-card-summary__footer > .flight-card-summary__tags > .flight-card-summary__select-btn')
            .should('be.visible')
            .click()
    }

    selectReturnOption() {
        return cy.get('.flight-card-summary__select-btn')
            .should('be.visible')
            .click()
    }

    chooseFareOption() {
        return cy.get('[data-e2e="fare-card-standard"] > .fare-table__fare-column-border', { timeout: 30000 })
            .should('be.visible')
            .click()
    }

    confirmFareButton() {
        cy.get(':nth-child(2) > fare-table-upgrade-footer > .fare-footer__submit-btn', { timeout: 30000 })
            .should('be.visible')
            .click()
    }

    loginLater() {
        cy.get('.login-touchpoint__login-later')
            .should('be.visible')
            .click()
    }

    titleInput() {
        cy.get('.dropdown__toggle')
            .should('be.visible')
            .click()
            .get('.dropdown__menu')
            .contains('Mr')
            .click()
    }

    firstNameInput(firstName) {
        cy.get('input[id="form.passengers.ADT-0.name"]').type(firstName)
    }

    lastNameInput(lastName) {
        cy.get('input[id="form.passengers.ADT-0.surname"]').type(lastName)
    }

    continueFlowButton() {
        cy.get('.continue-flow__button')
            .should('be.visible')
            .click()
    }

    recommendedSeatButton() {
        cy.get('.passenger-carousel__cta')
            .should('be.visible')
            .click()
    }

    denyFastTrack() {
        cy.get('.enhanced-takeover-beta__product-dismiss-cta')
            .should('be.visible')
            .click()
    }

    chooseDepartureBag() {
        cy.get('[data-ref="product.outbound"] > .pax-row > .pax-row__controls > bags-cabin-bag-table-controls-container.ng-star-inserted > bags-cabin-bag-table-controls > :nth-child(1) > bags-small-bag-pax-control.ng-star-inserted > [data-ref="product.small-bag"] > .ng-star-inserted > .product-selector > .product-selector__container > .product-selector__control > .ry-radio-circle-button > .ry-radio-circle-button__label')
            .should('be.visible')
            .click()
    }

    chooseReturnBag() {
        cy.get('[data-ref="product.inbound"] > .pax-row > .pax-row__controls > bags-cabin-bag-table-controls-container.ng-star-inserted > bags-cabin-bag-table-controls > :nth-child(1) > bags-small-bag-pax-control.ng-star-inserted > [data-ref="product.small-bag"] > .ng-star-inserted > .product-selector > .product-selector__container > .product-selector__control > .ry-radio-circle-button > .ry-radio-circle-button__label')
            .should('be.visible')
            .click()
    }

    bagContinueButton() {
        cy.get('.ry-button--gradient-yellow')
            .should('be.visible')
            .click()
    }

    extrasContinueButton() {
        cy.get('.airport-and-flight__cta')
            .should('be.visible')
            .click()
    }

    transportContinueButton() {
        cy.get('.transport__cta', { timeout: 10000 })
            .should('be.visible')
            .click()
    }

    validateLoginRequest() {
        cy.xpath("/html[1]/body[1]/app-root[1]/ry-portal[1]/div[1]/ry-auth-popup-container[1]/ry-overlay[1]")
            .should('exist')
    }
}

export default new BookingDetails;