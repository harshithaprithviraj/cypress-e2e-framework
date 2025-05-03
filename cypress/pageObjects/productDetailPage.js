// cypress/pageObjects/productDetailPage.js

class ProductDetailPage {
    verifyProductDetailPage() {
      cy.get('.product-information').should('be.visible');
    }
  
    changeQuantityTo(quantity) {
      cy.get('#quantity').clear().type(quantity);
    }
  
    clickAddToCart() {
      cy.get('button.cart').click(); // Or use the full selector if needed
    }
  
    clickViewCart() {
      cy.contains('View Cart').click();
    }
  }
  
  export default ProductDetailPage;
  