class HomePage {
    visit() {
        cy.visit('/')
    }

    acceptCookiesButton(){
        cy.get('[data-ref="cookie.accept-all"]', { timeout: 10000 }).click()
    }

    fromInput(){
        return cy.get('#input-button__departure')
    }

    toInput(){
        return cy.get('#input-button__destination')
    }

    selectFromDestination(){
        return cy.get('span[data-ref="airport-item__name"]')
    }

    selectToDestination(){
        return cy.get('span[data-ref="airport-item__name"]')
    }

    selectMonth() {
        cy.get(':nth-child(10) > .m-toggle__month').click()
    }

    selectDepartureDate(date){
        return cy.get("div[tabindex='0'][data-id='" + date +"']")
    }

    selectReturnDate(date){
        return cy.get("div[tabindex='0'][data-id='" + date +"']")
    }

    searchButton(){
        return cy.get('.flight-search-widget__start-search-cta', { timeout: 10000 }).click()
    }

    selectFromToDestinations(from, to){
        this.fromInput().clear().type(from);
        this.selectFromDestination().contains(from).click();
        this.toInput().clear().type(to);
        this.selectToDestination().contains(to).click();
    }
}

export default new HomePage;