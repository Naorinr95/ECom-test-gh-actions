class LoginPage {
  visit() {
    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');
  }

  clickLogin() {
    // Optional – if your test lands on the home page and needs to click "Sign in"
    cy.get('.login').click(); // "Sign in" button in header
  }

  login(email, password) {
    cy.get('#email').type(email);
    cy.get('#passwd').type(password);
    cy.get('#SubmitLogin').click();
  }

  verifyLoginSuccess() {
    cy.get('.account').should('be.visible'); // Check if user account link is visible
    cy.url().should('include', 'controller=my-account');
  }

  logout() {
     cy.get("a[title='Log me out']").should('be.visible').click();
  }
  verifyLogout() {
    cy.get('.login').should('be.visible');
  }
  
}

export default new LoginPage();