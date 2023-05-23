import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { inputForm } from "../../POM/inputFormSubmit";
import { simpleForm } from "../../POM/simpleFormDemo";
import { checkbox } from "../../POM/checkboxDemo";

// INPUT FORM DEMO
{
  Given('the user navigated to the input form submit page', function () {
    cy.visit("input-form-demo");
    this.inputFormPage = new inputForm();
  });

  When('the user populates the fields with valid inputs', function () {
    this.inputFormPage.fillWithRandomData();
  });

  When('the user clicks the submit button', function () {
    this.inputFormPage.submit();
  });

  Then('the confirmation message is present', function () {
    this.inputFormPage.assertSubmit();
  });
}

// SIMPLE FORM DEMO
{

  Given('the user navigated to the simple form demo page', function () {
    cy.visit("simple-form-demo");
    this.simpleFormPage = new simpleForm();
  });

  //single input field

  When('the user enters {string} in the input field under the [Single Input Field] section', function (message) {
    this.simpleFormPage.inputMessage(message);
  });

  When('the user clicks the [Get Checked value] button', function () {
    this.simpleFormPage.getCheckedValue();
  });

  Then('the {string} message is displayed in the [Your Message] section', function (message) {
    this.simpleFormPage.assertValue(message);
  });

  Then('the {string} message is NOT displayed in the [Your Message] section', function (message) {
    this.simpleFormPage.assertNotValue(message);
  });

  //two input fields

  When('the user enters {string} and {string} in the input field under the [Two Input Fields] section', function (a, b) {
    this.simpleFormPage.inputValues(a,b);
  });

  When('the user clicks the [Get values] button', function () {
    this.simpleFormPage.getSum();
  });
  
  Then('the {string} message is displayed in the [Total a + b] section', function (total) {
    this.simpleFormPage.assertTotal(total);
  });
}

// CHECKBOX DEMO
{
  Given('the user navigated to the checkbox-demo page', function () {
    cy.visit('checkbox-demo');
    this.checkboxPage = new checkbox();
  });

//single checkbox

  When('the user checks the checkbox under the [Single Checkbox Demo] section', function () {
    this.checkboxPage.singleCheckboxChangeState();
  });

  Then('the message {string} is displayed', function (string) {
    this.checkboxPage.assertMsg();
  });

  Then('the checkboxes state is checked', function () {
    this.checkboxPage.assertState();
  });
}