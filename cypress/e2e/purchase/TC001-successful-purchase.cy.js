import HomePage from '../../pages/HomePage';
import BookingDetails from '../../pages/BookingDetails';

describe('Successful Purchase Flow', () => {
    it('should complete a purchase successfully', () => {
        // Visit Ryanair website
        HomePage.visit()

        // Accept cookies
        HomePage.acceptCookiesButton().click()

        // Select departure and return flights
        HomePage.selectFromToDestinations('Lisbon', 'Madrid')

        // Select departure and return dates
        HomePage.selectDepartureDate('2025-09-23').click()
        HomePage.selectReturnDate('2025-10-25').click()

        // Click on search button
        HomePage.searchButton().click()

        // Select flights
        BookingDetails.selectDepartureOption()
            .should('be.visible')
            .click()
        BookingDetails.selectReturnOption()
            .should('be.visible')
            .click()

        cy.wait(2000)

        // Choose fare option
        BookingDetails.chooseFareOption()
            .should('be.visible')
            .click()
 
        // Confirm fare selection
        BookingDetails.confirmFareButton()
            .should('be.visible')
            .click()

        // Click on login later
        BookingDetails.loginLater()
            .should('be.visible')
            .click()

        // Fill in passenger details
        BookingDetails.titleInput()
            .should('be.visible')
            .click()
            .get('.dropdown__menu')
            .contains('Mr')
            .click()
        BookingDetails.firstNameInput('John')
        BookingDetails.lastNameInput('Doe')

        // Continue to next step
        BookingDetails.continueFlowButton()
            .should('be.visible')
            .click()

        // Click on recommended seat button
        BookingDetails.recommendedSeatButton()
            .should('be.visible')
            .click()

        // Click to deny Fast Track option
        BookingDetails.denyFastTrack()
            .should('be.visible')
            .click()

        // Add cabin bags
        BookingDetails.chooseDepartureBag()
            .should('be.visible')
            .click()
        BookingDetails.chooseReturnBag()
            .should('be.visible')
            .click()
        BookingDetails.bagContinueButton()
            .should('be.visible')
            .click()

        // Continue without extras
        BookingDetails.extrasContinueButton()
            .should('be.visible')
            .click()

        // Continue without transport
        BookingDetails.transportContinueButton()
            .should('be.visible')
            .click()
    });
});