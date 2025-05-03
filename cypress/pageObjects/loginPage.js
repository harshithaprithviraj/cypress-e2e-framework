class LoginPage {
    verifyNewUserSignup() {
      cy.contains('New User Signup!').should('be.visible');
    }
  
    enterNameAndEmail(name, email) {
      cy.get('input[placeholder="Name"]').type(name);
      cy.get('input[data-qa="signup-email"]').type(email);
    }
  
    clickSignupButton() {
      cy.get('button[data-qa="signup-button"]').click();
    }
    
  
    verifyLoggedIn(username) {
      cy.contains(`Logged in as ${username}`).should('be.visible');
    }
  
    clickDeleteAccount() {
      cy.contains('Delete Account').click();
    }
  
    verifyAccountDeleted() {
      cy.contains('ACCOUNT DELETED!').should('be.visible');
      cy.contains('Continue').click();
    }
  }
  
  export default LoginPage;
  