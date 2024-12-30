import inventoryPage from "../page-object-model/inventoryPage"
import cartPage from "../page-object-model/cartPage"

describe('Smoke test for inventory page and its features', () => {

    beforeEach(() => {
        cy.login() 
    })

    it('Verify low to high sort button', () => {
        inventoryPage.clickproductSortButton()
        inventoryPage.validatePricesAreSortedLowToHigh()
        inventoryPage.elements.lowestPrice().first()
            .should('have.text', '$7.99')
    })

    it('Verify Twitter link is working', () => {
        inventoryPage.elements.twitterButton()
            .should('have.attr', 'href', 'https://twitter.com/saucelabs')

    })

    it('Verify Facebook link is working', () => {
        inventoryPage.elements.facebookButton()
            .should('have.attr', 'href', 'https://www.facebook.com/saucelabs')
    });
    

    it('Verify Linkedin link is working', () => {
        inventoryPage.elements.linkedinButton()
            .should('have.attr', 'href', 'https://www.linkedin.com/company/sauce-labs/')
    })

    it('Verify adding cheapest item in the cart', () => {
        inventoryPage.clickproductSortButton()
        inventoryPage.elements.lowestPrice().first()
            .should('have.text', '$7.99')
        inventoryPage.clickAddOnesieToCart()
        inventoryPage.clickCartButton()
        cartPage.elements.txtInventoryItemName()
            .should('have.text', 'Sauce Labs Onesie')
        cartPage.elements.txtInventoryItemPrice()
            .should('have.text', '$7.99')
    })

    it('Verify cart badge in correctly displayed', () => {
        inventoryPage.clickproductSortButton()
        inventoryPage.clickAddOnesieToCart()
        inventoryPage.elements.shoppingCartBadge().should('have.text', '1')
    })

    it('Verify the name on item page is correct', () => {
        inventoryPage.clickAddFirstItemToCartButton()
        inventoryPage.elements.shoppingCartBadge().should('have.text', '1')
    })

    it('Verify the name on item page is correct', () => {
        let itemName = "Sauce Labs Backpack"
        inventoryPage.clickAddFirstItemToCartButton()
        inventoryPage.clickCartButton()
        cartPage.elements.txtCartItem().should('have.text', itemName)

    })

    it('Verify number of items in cart', () => {
        let itemName = "Sauce Labs Backpack"
        inventoryPage.clickAddFirstItemToCartButton()
        inventoryPage.clickCartButton()
        cartPage.clickContinueShoppingButton()
        inventoryPage.clickAddOnesieToCart()
        inventoryPage.clickCartButton()
        cy.get(cartPage.elements.txtCartItem).should('have.length', '2')
    })


})