export class inventoryPage {

    elements = {
        title: () => cy.get("div.app_logo"),
        productSortButton: () => cy.get("select.product_sort_container"),
        productName: () => cy.get("div.inventory_item_name"),
        productPrice: () => cy.get("div.inventory_item_price"),
        lowestPrice: () => cy.get("div.inventory_item_price"),
        twitterButton: () => cy.get("li.social_twitter > a"),
        facebookButton: () => cy.get("li.social_facebook > a"),
        linkedinButton: () => cy.get("li.social_linkedin > a"),
        cartButton: () => cy.get("a.shopping_cart_link"),
        oniseAddToCartButton: () => cy.get("#add-to-cart-sauce-labs-onesie"),
        shoppingCartBadge: () => cy.get("#shopping_cart_container > a > span.shopping_cart_badge"),
        addFirstItemToCartButton: () => cy.get("[name='add-to-cart-sauce-labs-backpack']")
    }

    clickproductSortButton() {
        this.elements.productSortButton().select("Price (low to high)")
    }

    validatePricesAreSortedLowToHigh() {
        this.elements.productPrice().then(items => {
            const prices = [];

            items.each((index, item) => {
                const priceText = Cypress.$(item).text();
                const price = parseFloat(priceText.replace("$", "").trim());
                prices.push(price);
            });

            for (let i = 1; i < prices.length; i++) {
                if (prices[i] < prices[i - 1]) {
                    throw new Error("Items are not sorted correctly from low to high!");
                }
            }
        });
    }

    clickCartButton() {
        this.elements.cartButton().click()
    }

    clickAddOnesieToCart () {
        this.elements.oniseAddToCartButton().click()
    }

    clickAddFirstItemToCartButton() {
        this.elements.addFirstItemToCartButton().click()
    }

}

module.exports = new inventoryPage();