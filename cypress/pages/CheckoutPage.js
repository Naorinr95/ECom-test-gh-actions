class CheckoutPage {
  proceedFromSummary() {
    cy.get('.cart_navigation a[title="Proceed to checkout"]').click();
  }

  proceedFromAddress() {
    cy.get('button[name="processAddress"]').click();
  }

  agreeToTerms() {
    cy.get('#cgv').check();
  }

  proceedFromShipping() {
    cy.get('button[name="processCarrier"]').click();
  }

  selectBankWirePayment() {
    cy.get('.bankwire').click();
  }

  confirmOrder() {
    cy.contains('button', 'I confirm my order').click();
  }

  verifyOrderCompletion() {
    cy.get('.alert.alert-success').should('contain.text', 'Your order on My Shop is complete.');
  }

  goToOrderHistory() {
    cy.get('a[title="Go to your order history page"]').click();
    cy.get('.page-heading.bottom-indent').should('contain.text', 'Order history');
  }
}

export default new CheckoutPage();
