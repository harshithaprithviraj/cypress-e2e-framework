# Cypress E2E Framework

This repository contains a Cypress-based End-to-End (E2E) testing framework to automate the testing of web applications. It includes tests for functionalities like adding products to the cart, signing up, contacting support, and more.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Tests](#running-the-tests)
- [Folder Structure](#folder-structure)

---

## Introduction

The **Cypress E2E Framework** provides automated end-to-end tests for web applications. The framework uses Cypress to test various user interactions such as:

- Adding products to the cart
- Signing up for an account
- Submitting a contact form
- Deleting accounts

The goal is to ensure that key application features are working correctly and efficiently by running automated tests.

---

## Installation

To get started with the Cypress E2E Framework, follow the steps below:

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone git@github.com:harshithaprithviraj/cypress-e2e-framework.git

2. Install Dependencies
Navigate to the project directory and install the required dependencies using npm:
cd cypress-e2e-framework
npm install

Configuration
The framework is pre-configured to work with Cypress. You can modify the following files:

1. cypress.json
This file holds global configurations for Cypress. You can modify it to customize settings such as:

baseUrl: The base URL for your application (e.g., https://yourapp.com).

timeouts, retries, viewport sizes, and other Cypress configurations.

Example:
json
{
  "baseUrl": "https://automationexercise.com",
  "viewportWidth": 1280,
  "viewportHeight": 720,
  "retries": {
    "runMode": 2,
    "openMode": 0
  }
}
2. commands.js
Located in cypress/support/commands.js, this file is where you can define custom Cypress commands to be reused across multiple tests. These commands could be anything like logging in, adding items to a cart, or navigating to different pages.

Example:

javascript

Cypress.Commands.add("login", (username, password) => {
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});
This custom command can then be reused in any of your test files to perform login actions.

3. support/e2e.js
This file, located in cypress/support/e2e.js, is used for global configurations and behavior modifications for Cypress. It allows you to set up global hooks, event listeners, and configurations that apply across all your tests.

This file is automatically loaded before any test begins, making it the perfect place for setting up global behavior, like:

Adding event listeners

Configuring application-wide hooks (before, after)

Modifying Cypress's default behavior or adding plugins

Example:

javascript

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});
Running the Tests
Open Cypress Test Runner (Interactive Mode)
To run the tests interactively, open the Cypress Test Runner by running:


npx cypress open
This will open the Cypress interface where you can select and run your test cases in an interactive mode.

Run Tests in Headless Mode
To run tests in headless mode (without the UI), use the following command:


npx cypress run
This will execute all the tests in the background and generate a report.

Folder Structure
Here’s the structure of the project:


cypress/
├── e2e/                    # End-to-end test files
│   ├── addToCartTest.cy.js  # Test file for adding products to the cart
│   ├── contactUsTest.cy.js  # Test file for submitting the contact form
│   ├── signupDeleteAccount.cy.js  # Test file for signing up and deleting an account
├── fixtures/                # Static data for tests
│   ├── contactFormData.json  # Data for contact form test
│   ├── userData.json        # Data for user test scenarios
├── pageObjects/             # Page Object Model (POM) files
│   ├── cartPage.js          # Page object for cart page
│   ├── homePage.js          # Page object for home page
│   ├── contactUsPage.js     # Page object for contact us page
│   ├── signupPage.js        # Page object for signup page
├── support/                 # Custom commands and global configuration
│   ├── commands.js          # Custom commands
│   ├── e2e.js               # Global configuration file for Cypress
├── cypress.json             # Cypress configuration file
