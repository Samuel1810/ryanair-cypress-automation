import HomePage from '../../pages/HomePage';
import BookingDetails from '../../pages/BookingDetails';

describe('Successful Purchase Flow', () => {
    it('should complete a purchase successfully', () => {
        // Visit Ryanair website
        HomePage.visit()

        // Accept cookies
        HomePage.acceptCookiesButton()

        // Select departure and return flights
        HomePage.selectFromToDestinations('Lisbon', 'Madrid')

        HomePage.selectMonth()

        // Select departure and return dates
        HomePage.selectDepartureDate('2026-06-24').click()
        HomePage.selectReturnDate('2026-07-23').click()

        // Click on search button
        HomePage.searchButton()

        // Select flights
        BookingDetails.selectDepartureOption()
        BookingDetails.selectReturnOption()

        cy.wait(2000)

        // Choose fare option
        BookingDetails.chooseFareOption()
 
        // Confirm fare selection
        BookingDetails.confirmFareButton()

        // Click on login later
        BookingDetails.loginLater()

        // Fill in passenger details
        BookingDetails.titleInput()
        BookingDetails.firstNameInput('John')
        BookingDetails.lastNameInput('Doe')

        // Continue to next step
        BookingDetails.continueFlowButton()

        // Click on recommended seat button
        BookingDetails.recommendedSeatButton()

        // Click to deny Fast Track option
        BookingDetails.denyFastTrack()

        // Add cabin bags
        BookingDetails.chooseDepartureBag()
        BookingDetails.chooseReturnBag()
        BookingDetails.bagContinueButton()

        // Continue without extras
        BookingDetails.extrasContinueButton()

        // Continue without transport
        BookingDetails.transportContinueButton()

        BookingDetails.validateLoginRequest()
    });
});