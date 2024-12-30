import inventoryPage from "../page-object-model/inventoryPage"
import cartPage from "../page-object-model/cartPage"

describe('Smoke test for cart page and its features', () => {

    beforeEach(() => {
        cy.login() 
    })

    it('Verify removing item from the cart', () => {
        inventoryPage.clickproductSortButton()
        inventoryPage.clickAddOnesieToCart()
        inventoryPage.clickCartButton()
        cartPage.clickRemoveOnesieButton()
        cartPage.elements.txtInventoryItemName().should('not.exist')
    })

    it('Verify Back to inventory button is working', () => {
        inventoryPage.clickproductSortButton()
        inventoryPage.clickAddOnesieToCart()
        inventoryPage.clickCartButton()
        cartPage.clickRemoveOnesieButton()
        cartPage.clickContinueShoppingButton()
        cy.url().should('include', '/inventory.html')
    })


})