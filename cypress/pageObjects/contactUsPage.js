class ContactUsPage {
    clickContactUs() {
      cy.get('a[href="/contact_us"]').click();
    }
  
    verifyGetInTouchVisible() {
      cy.get('.contact-form').should('contain.text', 'Get In Touch');
    }
  
    fillContactForm(name, email, subject, message) {
      cy.get('input[data-qa="name"]').type(name);
      cy.get('input[data-qa="email"]').type(email);
      cy.get('input[data-qa="subject"]').type(subject);
      cy.get('textarea[data-qa="message"]').type(message);
    }
  
    uploadFile(fileName) {
      cy.get('input[name="upload_file"]').attachFile('sample1.txt');
    }
  
    clickSubmit() {
      cy.get('input[data-qa="submit-button"]').click();
    }
  
    handleAlert() {
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Success! Your details have been submitted successfully.');
      });
    }
  
    verifySuccessMessage() {
      cy.get('.status.alert.alert-success').should(
        'contain.text',
        'Success! Your details have been submitted successfully.'
      );
    }
  
    clickHomeButton() {
      cy.get('a.btn.btn-success').click();
    }
  
    verifyHomePage() {
      cy.url().should('eq', 'https://automationexercise.com/');
      cy.get('body').should('contain.text', 'Home');
    }
  }
  
  export default ContactUsPage;
  