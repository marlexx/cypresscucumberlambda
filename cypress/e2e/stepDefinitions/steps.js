import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { InputForm } from "../../POM/inputFormSubmit";
import { SimpleForm } from "../../POM/simpleFormDemo";
import { Checkbox } from "../../POM/checkboxDemo";
import { JqueryDropdownSearch } from "../../POM/jqueryDropdownSearch";
import { BootstrapDatePicker } from "../../POM/bootstrapDatePickerDemo";
import { JavascriptAlertBox } from "../../POM/javascriptAlertBoxDemo";
import { Uploadfile } from "../../POM/uploadFileDemo";
import { Hover } from "../../POM/hoverDemo";

// INPUT FORM DEMO
{
  Given('the user navigated to the input form submit page', function () {
    cy.visit("input-form-demo");
    this.inputFormPage = new InputForm();
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
    this.simpleFormPage = new SimpleForm();
  });

  //single input field
  {
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
  }

  //two input fields
  {
    When('the user enters {string} and {string} in the input field under the [Two Input Fields] section', function (a, b) {
      this.simpleFormPage.inputValues(a, b);
    });

    When('the user clicks the [Get values] button', function () {
      this.simpleFormPage.getSum();
    });

    Then('the {string} message is displayed in the [Total a + b] section', function (total) {
      this.simpleFormPage.assertTotal(total);
    });
  }
}

// CHECKBOX DEMO
{
  Given('the user navigated to the checkbox-demo page', function () {
    cy.visit('checkbox-demo');
    this.checkboxPage = new Checkbox();
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

// JQUERY SELECT DROPDOWN
{
  // drop down with search box
  {
    Given('the user navigated to the jquery dropdown search demo page', function () {
      cy.visit('jquery-dropdown-search-demo');
      this.jqueryDropdownSearchPage = new JqueryDropdownSearch();
    });

    When('the user clicks on the dropdown from the [Drop Down with Search box] section', function () {
      this.jqueryDropdownSearchPage.openDropdownWSearch();
    });

    When('the user enters {string} as the search query', function (query) {
      this.jqueryDropdownSearchPage.search(query);
    });

    When('the user clicks on {string}', function (country) {
      this.jqueryDropdownSearchPage.selectFromSearch(country);
    });

    Then('the value {string} should be selected', function (country) {
      this.jqueryDropdownSearchPage.assertSelected(country);
    });
  }
}

// BOOTSTRAP DATE PICKER
{
  // start to end date picker
  {
    Given('the user navigated to the bootstrap date picker demo page', function () {
      cy.visit('bootstrap-date-picker-demo');
      this.bootstrapDatePickerPage = new BootstrapDatePicker();
    });

    When('the user manually selects {string} for the {string}', function (dateString, datePicker) {
      this.bootstrapDatePickerPage.openDatePicker(datePicker);
      if (datePicker == "Start Date")
        this.bootstrapDatePickerPage.selectStartDate(dateString);
      else
        this.bootstrapDatePickerPage.selectEndDate(dateString);
    });

    Then('the values of the Start and End dates should be {string} and {string}', function (startDateString, endDateString) {
      this.bootstrapDatePickerPage.assertDate(0, startDateString);
      this.bootstrapDatePickerPage.assertDate(1, endDateString);
    });
  }
}

// JAVASCRIPT ALERT BOX DEMO
{
  // javascript alert box
  {
    When('the user clicks the {int} st/nd/th [Click Me] button', function (Nbr) {
      this.javascriptAlertBoxPage.performClick(Nbr);
    });

  Given('the user navigated to the javascript alert box demo page', function () {
    cy.visit('javascript-alert-box-demo');
    this.javascriptAlertBoxPage = new JavascriptAlertBox();
  });

  Then('the alert is shown', function () {
    this.javascriptAlertBoxPage.assertAlert();
  });
}

// javascript prompt alert box
{

  When('the user clicks the 3 rd [Click Me] button', function (Nbr) {
    // CYPRESS MUST DO THIS IN THE SAME STEP IT ENTERS THE PROMPT
  });

    When('the user enters {string} in the alert window', function (message) {
      this.javascriptAlertBoxPage.enterPrompt(message);
    });

    When('the user clicks the [OK] button', function () {
      // CYPRESS DOES THIS AUTOMATICALLY
    });

    Then('the message under the [Click Me] button is {string}', function (message) {
      this.javascriptAlertBoxPage.assertOutput(message)
    });
}
}

// UPLOAD FILE DEMO
{
  // upload file
  {
    
    Given('the user naviaged to the upload file demo page', function () {
      cy.visit('upload-file-demo');
      this.uploadFilePage = new Uploadfile();
    });

    When('the user chooses a file to upload', function () {
      this.uploadFilePage.selectFile();
    });

    Then('the file name is displayed next to the button', function () {
      this.uploadFilePage.assertFile();
    });

    Then('the message {string} is present', function (string) {
      this.uploadFilePage.assertMessage();
    });
  }

  //drag and drop
{
  When('the user drags and drops a file', function(){
    this.uploadFilePage.dragNDropFile();
  })
}
}

// HOVER DEMO
{
  // hover buttons
  {
    Given('the user navigated to the hover demo', function () {
      cy.visit('hover-demo');
      this.hoverDemoPage = new Hover();
    });

    When('the user hovers on the {int} st [Hover Me] button', function (buttonNbr) {
      this.hoverDemoPage.hoverButton(buttonNbr);
    });

    Then('the background color of the button changes', function () {
      this.hoverDemoPage.assertColorOfButton(buttonNbr);
    });
  }
}