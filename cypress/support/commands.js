import registrationForm from "../page-object-model/loginPage"

Cypress.Commands.add('login', () => {
    cy.visit('https://www.saucedemo.com/')
    registrationForm.inputUsername("standard_user")
        registrationForm.inputPassword("secret_sauce")
        registrationForm.clickLoginButton()
})