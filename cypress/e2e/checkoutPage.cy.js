import inventoryPage from "../page-object-model/inventoryPage"
import cartPage from "../page-object-model/cartPage"
import checkoutPage from "../page-object-model/checkoutPage"

describe('Smoke test for checkout page and its features', () => {

    beforeEach(() => {
        cy.login() 
    })

    it('Verify total amount in order review is calculated correctly', () => {
        const firstName = "Test"
        const lastName = "Lastname"
        const zipCode = "10001"
        inventoryPage.clickproductSortButton()
        inventoryPage.clickAddOnesieToCart()
        inventoryPage.clickCartButton()
        inventoryPage.clickCartButton()
        checkoutPage.clickCheckoutButton()
        checkoutPage.inputFirstName(firstName)
        checkoutPage.inputLastName(lastName)
        checkoutPage.inputZipCode(zipCode)
        checkoutPage.clickContinueButton()
        checkoutPage.elements.txtTotal().should('have.text', 'Total: $8.63')
    }) 

    it('Verify text is correctly displayed when order is finished', () => {
        const firstName = "Test"
        const lastName = "Lastname"
        const zipCode = "10001"
        inventoryPage.clickproductSortButton()
        inventoryPage.clickAddOnesieToCart()
        inventoryPage.clickCartButton()
        inventoryPage.clickCartButton()
        checkoutPage.clickCheckoutButton()
        checkoutPage.inputFirstName(firstName)
        checkoutPage.inputLastName(lastName)
        checkoutPage.inputZipCode(zipCode)
        checkoutPage.clickContinueButton()
        checkoutPage.clickfinishButton()
        checkoutPage.elements.txtThankYou().should('have.text', 'Thank you for your order!')
    }) 

    it('Verify inventory page is displayed when finished with the order and cliking back home button', () => {
        const firstName = "Test"
        const lastName = "Lastname"
        const zipCode = "10001"
        inventoryPage.clickproductSortButton()
        inventoryPage.clickAddOnesieToCart()
        inventoryPage.clickCartButton()
        inventoryPage.clickCartButton()
        checkoutPage.clickCheckoutButton()
        checkoutPage.inputFirstName(firstName)
        checkoutPage.inputLastName(lastName)
        checkoutPage.inputZipCode(zipCode)
        checkoutPage.clickContinueButton()
        checkoutPage.clickfinishButton()
        checkoutPage.clickBackHome()
        cy.url().should('include', '/inventory.html')
    })

    it('Verify number of items in cart', () => {
        const firstName = "Test"
        const lastName = "Lastname"
        const zipCode = "10001"
        inventoryPage.clickAddFirstItemToCartButton()
        inventoryPage.clickAddOnesieToCart()
        inventoryPage.clickCartButton()
        checkoutPage.clickCheckoutButton()
        checkoutPage.inputFirstName(firstName)
        checkoutPage.inputLastName(lastName)
        checkoutPage.inputZipCode(zipCode)
        checkoutPage.clickContinueButton()
        checkoutPage.elements.txtTotal('have.text', 'Total: $41.02')
    })
})

