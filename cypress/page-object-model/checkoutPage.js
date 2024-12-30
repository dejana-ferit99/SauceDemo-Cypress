export class checkoutPage {
    elements =  {
        checkoutButton: () => cy.get("#checkout"),
        firstNameField: () => cy.get("#first-name"),
        lastNameField: () => cy.get("#last-name"),
        zipCodeField: () => cy.get("#postal-code"),
        continueButton: () => cy.get("#continue"),
        txtTotal: () => cy.get("div.summary_total_label"),
        finishButton: () => cy.get("#finish"),
        txtThankYou: () => cy.get("h2.complete-header"),
        backHomeButton: () => cy.get("#back-to-products")
    }

    clickCheckoutButton() {
        this.elements.checkoutButton().click()
    }

    inputFirstName(firstName) {
        this.elements.firstNameField().click()
        this.elements.firstNameField().type(firstName)
    }

    inputLastName(lastName) {
        this.elements.lastNameField().click()
        this.elements.lastNameField().type(lastName)
    }

    inputZipCode(zipCode) {
        this.elements.zipCodeField().click()
        this.elements.zipCodeField().type(zipCode)
    }

    clickContinueButton() {
        this.elements.continueButton().click()
    }

    clickfinishButton() {
        this.elements.finishButton().click()
    }

    clickBackHome() {
        this.elements.backHomeButton().click()
    }

}

module.exports = new checkoutPage();