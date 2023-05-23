Feature: [Submitting forms]
The user can fill a form and submit the data

Scenario: The user submits a valid form
  Given the user navigated to the input form submit page
  When the user populates the fields with valid inputs
  And the user clicks the submit button
  Then the confirmation message is present