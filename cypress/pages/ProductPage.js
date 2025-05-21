class ProductPage {
  visitProduct(productId, size, color) {
    const url = `http://www.automationpractice.pl/index.php?id_product=${productId}&controller=product#/1-size-${size}/8-color-${color}`;
    cy.visit(url);
  }

  addToCart() {
    cy.get('#add_to_cart button').click();
  }

  proceedToCheckoutFromModal() {
    cy.get('div#layer_cart', { timeout: 10000 }).should('be.visible');
    cy.get('a.btn.btn-default.button.button-medium').contains('Proceed to checkout').click();
  }
}

export default new ProductPage();
