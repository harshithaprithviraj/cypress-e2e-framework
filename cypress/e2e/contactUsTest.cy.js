import ContactUsPage from '../pageObjects/contactUsPage';
import HomePage from '../pageObjects/homePage';

const contactUsPage = new ContactUsPage();
const homePage = new HomePage();

describe('Test Case 6: Contact Us Form', () => {
  before(() => {
    cy.fixture('contactFormData').as('contactData');
    cy.visit('http://automationexercise.com');
  });

  it('should submit contact form successfully', function () {
    // Step 3: Verify home page
    homePage.verifyHomePage();

    // Step 4-5: Navigate and verify 'Contact Us' page
    contactUsPage.clickContactUs();
    contactUsPage.verifyGetInTouchVisible();

    // Step 6: Fill contact form using fixture data
    contactUsPage.fillContactForm(
      this.contactData.name,
      this.contactData.email,
      this.contactData.subject,
      this.contactData.message
    );

    // Step 7: Upload file
    contactUsPage.uploadFile(this.contactData.file);

    // Step 8-9: Submit and handle alert
    contactUsPage.clickSubmit();
    contactUsPage.handleAlert();

    // Step 10: Verify success message
    contactUsPage.verifySuccessMessage();

    // Step 11-12: Click Home and verify
    contactUsPage.clickHomeButton();
    contactUsPage.verifyHomePage();
  });
});
