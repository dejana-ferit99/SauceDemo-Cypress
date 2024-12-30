export class cartPage {
    elements = {
        txtInventoryItemName: () => cy.get("div.inventory_item_name"),
        txtInventoryItemPrice: () => cy.get("div.inventory_item_price"),
        onesieItemRemoveButton: () => cy.get("[data-test='remove-sauce-labs-onesie']"),
        continueShoppingButton: () => cy.get("#continue-shopping"),
        txtCartItem: () => cy.get("div.inventory_item_name")
    }

    clickRemoveOnesieButton() {
        this.elements.onesieItemRemoveButton().click()
    }

    clickContinueShoppingButton() {
        this.elements.continueShoppingButton().click()
    }

}

module.exports = new cartPage();