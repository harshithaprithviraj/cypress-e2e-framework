class CartPage {
    verifyProductInCartWithQuantity(expectedQty) {
      cy.get('#cart_info_table', { timeout: 10000 }).should('exist');
  
      // Look for the button that shows quantity
      cy.get("tr[id='product-1'] td.cart_quantity button.disabled", { timeout: 8000 })
        .should('have.text', expectedQty.toString());
    }
  
    verifyWrongQuantityNotPresent(wrongQty) {
      cy.get("tr[id='product-1'] td.cart_quantity button.disabled")
        .should('not.have.text', wrongQty.toString());
    }
  
    verifyQuantityControls() {
      // Make sure the disabled button (showing quantity) exists
      cy.get("tr[id='product-1'] td.cart_quantity button.disabled").should('exist');
  
      // And optionally look for enabled increment/decrement buttons if they exist
      cy.get("tr[id='product-1'] td.cart_quantity button:not(.disabled)").should('exist');
    }
  
    verifyNoEmptyCartMessage() {
      cy.contains('Your cart is empty').should('not.exist');
    }
  }
  
  export default CartPage;
  