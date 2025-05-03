import HomePage from '../pageObjects/homePage';
import ProductDetailPage from '../pageObjects/productDetailPage';
import CartPage from '../pageObjects/cartPage';

const homePage = new HomePage();
const productDetailPage = new ProductDetailPage();
const cartPage = new CartPage();

describe('Add to Cart Test - Positive and Negative Assertions', () => {
  it('should add product with quantity 4 to cart and verify it', () => {
    const productQty = 4;  // Define the product quantity variable

    homePage.visit();

    // ✅ Positive: Home page visible
    homePage.verifyHomePage();

    // ❌ Negative: Ensure 404 or error messages not shown
    cy.contains('404').should('not.exist');
    cy.contains('Page Not Found').should('not.exist');

    // Click 'View Product'
    homePage.clickViewProduct();

    // ✅ Positive: Product detail should be visible
    productDetailPage.verifyProductDetailPage();

    // ❌ Negative: Quantity field shouldn't be disabled or empty
    cy.get('#quantity').should('not.be.disabled').and('have.value', '1');

    // Change quantity to 4
    productDetailPage.changeQuantityTo(productQty);

    // Add to cart
    productDetailPage.clickAddToCart();

    // View Cart
    productDetailPage.clickViewCart();

    // Verify product is in the cart with the correct quantity
    cartPage.verifyProductInCartWithQuantity(productQty);

    // Optionally: Verify wrong quantity is not present
    cartPage.verifyWrongQuantityNotPresent(5);

    // ❌ Negative: Make sure quantity is not accidentally 1 or 0
    cy.get("tr[id='product-1'] td.cart_quantity button.disabled")
    .should('not.have.text', '1')
    .and('not.have.text', '0');
  

    // ❌ Negative: Ensure no "Your cart is empty" messages
    cy.contains('Your cart is empty').should('not.exist');
  });
});
