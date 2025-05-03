class SignupPage {
    verifyEnterAccountInfo() {
      cy.contains('Enter Account Information').should('be.visible');
    }
  
    fillAccountInfo(user) {
      cy.get('#id_gender2').check();
      cy.get('[data-qa="password"]').type(user.password);
      cy.get('[data-qa="days"]').select(user.dob.day);
      cy.get('[data-qa="months"]').select(user.dob.month);
      cy.get('[data-qa="years"]').select(user.dob.year);
  
      if (user.newsletter) cy.get('#newsletter').check();
      if (user.offers) cy.get('#optin').check();
    }
  
    fillAddressInfo(user) {
      cy.get('[data-qa="first_name"]').type(user.firstName);
      cy.get('[data-qa="last_name"]').type(user.lastName);
      cy.get('[data-qa="company"]').type(user.company);
      cy.get('[data-qa="address"]').type(user.address1);
      cy.get('[data-qa="address2"]').type(user.address2);
      cy.get('[data-qa="country"]').select(user.country);
      cy.get('[data-qa="state"]').type(user.state);
      cy.get('[data-qa="city"]').type(user.city);
      cy.get('[data-qa="zipcode"]').type(user.zipcode);
      cy.get('[data-qa="mobile_number"]').type(user.mobileNumber);
    }
  
    clickCreateAccount() {
      cy.get('button[data-qa="create-account"]').click();
    }
  
    verifyAccountCreated() {
      cy.contains('Account Created!').should('be.visible');
      cy.contains('Continue').click();
    }
  }
  
  export default SignupPage;
  