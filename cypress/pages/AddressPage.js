class AddressPage {
  visit() {
    cy.visit('http://www.automationpractice.pl/index.php?controller=my-account');
    cy.get('.page-heading').should('contain.text', 'My account');
  }

  createFirstAddress(user) {
    // Click "Add my first address"
    cy.get("a[title='Add my first address']").should('be.visible').click();

    // Fill address form
    cy.get('#firstname').should('be.visible').clear().type(user.firstName);
    cy.get('#lastname').clear().type(user.lastName);
    cy.get('#address1').type('123 Test Street');
    cy.get('#city').type('TestCity');
    cy.get('#id_state').select('California');
    cy.get('#postcode').type('90210'); 
    cy.get('#id_country').select('United States');
    cy.get('#phone_mobile').type('1234567890');
    cy.get('#alias').clear().type('My Address');

    // Submit address
    cy.get('#submitAddress').click();

    // Verify success
    cy.get('.page-heading').should('contain.text', 'My addresses');
  }
}

export default new AddressPage();
