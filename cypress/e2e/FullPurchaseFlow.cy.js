import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import AddressPage from '../pages/AddressPage';
import ProductPage from '../pages/ProductPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Register, Logout, Login, and Purchase via Bank Wire', () => {
  before(function () {
    cy.fixture('user').then(user => {
      user.email = `testuser_${Date.now()}@testmail.com`; // dynamic email
      this.user = user;
    });

    cy.fixture('product').then(product => {
      this.product = product;
    });
  });

  it('registers, logs out, logs in, adds product to cart, and completes purchase via Bank Wire', function () {
    // Step 1: Register
    RegisterPage.visit();
    RegisterPage.initiateRegistration(this.user.email);
    RegisterPage.fillRegistrationForm(this.user);

    // Step 2: Add address
    AddressPage.visit();
    AddressPage.createFirstAddress(this.user);

    // Step 3: Logout
    cy.get("a[title='Log me out']").should('be.visible').click();
    cy.get('.login').should('be.visible');

    // Step 4: Login
    LoginPage.visit(); // Reload the login page
    LoginPage.login(this.user.email, this.user.password);
    LoginPage.verifyLoginSuccess();

    // Step 5: Product purchase
    ProductPage.visitProduct(this.product.id, this.product.size, this.product.color);
    ProductPage.addToCart();
    ProductPage.proceedToCheckoutFromModal();

    // Step 6: Checkout
    CheckoutPage.proceedFromSummary();
    CheckoutPage.proceedFromAddress();
    CheckoutPage.agreeToTerms();
    CheckoutPage.proceedFromShipping();
    CheckoutPage.selectBankWirePayment();
    CheckoutPage.confirmOrder();

    // Step 7: Verify order
    CheckoutPage.verifyOrderCompletion();
    CheckoutPage.goToOrderHistory();
    
    // Step : Logout
    cy.get("a[title='Log me out']").should('be.visible').click();
    cy.get('.login').should('be.visible');
    
  });
});
