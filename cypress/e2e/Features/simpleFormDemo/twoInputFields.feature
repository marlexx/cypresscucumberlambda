Feature: [Sum Two Input Fields]

This feature reflects the sum of the two inputs to the output.

Rule 1: The output should display "NaN" if any of the input values are non-numeric

Scenario: The user inputs two numbers and clicks the button
  Given the user navigated to the simple form demo page
  When the user enters "2" and "3" in the input field under the [Two Input Fields] section
  And the user clicks the [Get values] button
  Then the "5" message is displayed in the [Total a + b] section

@Rule1
Scenario: The user inputs two symbols and clicks the button
  Given the user navigated to the simple form demo page
  When the user enters "a" and "2" in the input field under the [Two Input Fields] section
  And the user clicks the [Get values] button
  Then the "NaN" message is displayed in the [Total a + b] section