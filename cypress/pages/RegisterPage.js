class RegisterPage {
  visit() {
    cy.visit('http://www.automationpractice.pl/index.php');
    cy.get('.login').click(); // Click "Sign in" button
  }

  initiateRegistration(email) {
    cy.get('#email_create').type(email);
    cy.get("button[id='SubmitCreate'] span").click();
    cy.get('.page-heading').should('have.text', 'Create an account');



  }

  fillRegistrationForm(user) {
    // Wait for form to load
    cy.get('#customer_firstname').should('be.visible');
    cy.get('#customer_firstname').type(user.firstName);
    cy.get('#customer_lastname').type(user.lastName);
    cy.get('#passwd').type(user.password);
    cy.get("button[id='submitAccount'] span").click(); // Register
    cy.get('.page-heading').should('have.text', 'My account');


  }
}

export default new RegisterPage();
