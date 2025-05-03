import HomePage from '../pageObjects/homePage';
import LoginPage from '../pageObjects/loginPage';
import SignupPage from '../pageObjects/signupPage';

const homePage = new HomePage();
const loginPage = new LoginPage();
const signupPage = new SignupPage();

describe('End-to-End Test - Signup and Delete Account', () => {
  before(() => {
    cy.fixture('userData').as('user');
  });

  it('should create and delete user account successfully', function () {
    const randomEmail = `harshitha.qa+${Date.now()}@example.com`;

    // Step 1-3: Visit and verify home page
    homePage.visit();
    homePage.verifyHomePage();

    // Step 4-5: Navigate to Signup/Login and verify
    homePage.clickSignupLogin();
    loginPage.verifyNewUserSignup();

    // Step 6-7: Enter name and email, click signup
    loginPage.enterNameAndEmail(this.user.name, randomEmail);
    loginPage.clickSignupButton();

    // Step 8-9: Enter account info
    signupPage.verifyEnterAccountInfo();
    signupPage.fillAccountInfo(this.user);

    // Step 10-12: Fill address info
    signupPage.fillAddressInfo(this.user);

    // Step 13-14: Create account and verify
    signupPage.clickCreateAccount();
    signupPage.verifyAccountCreated();

    // Step 15-16: Verify logged in
    loginPage.verifyLoggedIn(this.user.name);

    // Step 17-18: Delete account and verify
    loginPage.clickDeleteAccount();
    loginPage.verifyAccountDeleted();
  });
});
