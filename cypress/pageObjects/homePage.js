class HomePage {
  visit() {
    cy.visit('https://automationexercise.com');
  }

  verifyHomePage() {
    cy.get('div[class="item active"] div[class="col-sm-6"] h2')
      .should('contain', 'Full-Fledged practice website for Automation Engineer');
  }
  clickViewProduct() {
    cy.get('.features_items .product-image-wrapper').first().trigger('mouseover');
    cy.contains('View Product').first().click();
  }

  clickSignupLogin() {
    cy.get('a[href="/login"]').click();
  }
}

export default HomePage;
