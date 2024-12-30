export class registrationForm {

    elements = {
        usernameInputField: () => cy.get("[data-test='username']"),
        passwordInputFiled: () => cy.get("[data-test='password']"),
        loginButton: () => cy.get("[id='login-button']"),
        loginErrorMessage: () => cy.get("[data-test='error']")
    }

    inputUsername(username) {
        this.elements.usernameInputField().click()
        this.elements.usernameInputField().type(username)
    }

    inputPassword(password) {
        this.elements.passwordInputFiled().click()
        this.elements.passwordInputFiled().type(password)
    }

    clickLoginButton() {
        this.elements.loginButton().click()
    }
}

module.exports = new registrationForm();