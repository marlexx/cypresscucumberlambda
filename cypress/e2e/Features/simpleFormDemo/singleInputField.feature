Feature: [Single Input Field]

This feature reflects the message from the input to the output.

Rule 1: The output message should NOT change if the button [Get Checked Value] is not pressed


Scenario: The user inputs a message and clicks the button
  Given the user navigated to the simple form demo page
  When the user enters "something" in the input field under the [Single Input Field] section
  And the user clicks the [Get Checked value] button
  Then the "something" message is displayed in the [Your Message] section

@Rule1
Scenario: The user inputs a message
  Given the user navigated to the simple form demo page
  When the user enters "something" in the input field under the [Single Input Field] section
  Then the "something" message is NOT displayed in the [Your Message] section