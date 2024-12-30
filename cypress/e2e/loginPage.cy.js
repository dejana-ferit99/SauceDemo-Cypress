import registrationForm from "../page-object-model/loginPage"
import inventoryPage from "../page-object-model/inventoryPage"

describe('Smoke test login feature', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Login with wrong password', () => {
        registrationForm.inputUsername("standard_user")
        registrationForm.inputPassword("123456")
        registrationForm.clickLoginButton()
        registrationForm.elements.loginErrorMessage()
            .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('Login with wrong username', () => {
        registrationForm.inputUsername("standard_")
        registrationForm.inputPassword("secret_sauce")
        registrationForm.clickLoginButton()
        registrationForm.elements.loginErrorMessage()
            .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('Login with username and password', () => {
        registrationForm.inputUsername("standard_user")
        registrationForm.inputPassword("secret_sauce")
        registrationForm.clickLoginButton()
        inventoryPage.elements.title()
            .should('have.text', 'Swag Labs')
        
    })

})