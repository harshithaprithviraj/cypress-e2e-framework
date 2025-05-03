# Cypress E2E Framework

This repository contains a Cypress-based End-to-End (E2E) testing framework to automate the testing of web applications. It includes tests for functionalities like adding products to the cart, signing up, contacting support, and more.
## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Tests](#running-the-tests)
- [Folder Structure](#folder-structure)

- 
## Introduction

The **Cypress E2E Framework** provides automated end-to-end tests for web application. The framework uses Cypress for testing various user interactions such as:

- Adding products to the cart
- Signing up for an account
- Submitting a contact form
- Deleting accounts

The goal is to ensure that key application features are working correctly and efficiently by running automated tests.
## Installation

To get started with the Cypress E2E Framework, follow the steps below:

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone git@github.com:harshithaprithviraj/cypress-e2e-framework.git

## Running the Tests

### 1. Open Cypress Test Runner (Interactive Mode)

To run the tests interactively, open the Cypress Test Runner by running:

```bash
npx cypress open
cypress/
├── e2e/ # End-to-end test files
│ ├── addToCartTest.cy.js # Test file for adding products to the cart
│ ├── contactUsTest.cy.js # Test file for submitting the contact form
│ ├── signupDeleteAccount.cy.js # Test file for signing up and deleting an account
├── fixtures/ # Static data for tests
│ ├── contactFormData.json # Data for contact form test
│ ├── userData.json # Data for user test scenarios
├── pageObjects/ # Page Object Model (POM) files
│ ├── cartPage.js # Page object for cart page
│ ├── homePage.js # Page object for home page
│ ├── contactUsPage.js # Page object for contact us page
│ ├── signupPage.js # Page object for signup page
├── support/ # Custom commands and global configuration
│ ├── commands.js # Custom commands
│ ├── e2e.js # Global configuration file for Cypress
├── cypress.json # Cypress configuration file



