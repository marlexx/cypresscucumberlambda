Feature: [Checkbox]

Basic Checkbox

Scenario: The user checks the checkbox
  Given the user navigated to the checkbox-demo page
  When the user checks the checkbox under the [Single Checkbox Demo] section
  Then the message "Success - Check box is checked" is displayed
  And the checkboxes state is checked
