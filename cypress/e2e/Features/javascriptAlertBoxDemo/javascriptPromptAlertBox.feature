Feature: [Javascript prompt alert box]

The alert box is shown when the user clicks the "click me" button, it requires an input and then it outputs it to the page.

Scenario: the user clicks the button
Given the user navigated to the javascript alert box demo page
When the user clicks the 3 rd [Click Me] button
And the user enters "test test✅" in the alert window
And the user clicks the [OK] button
Then the message under the [Click Me] button is "You have entered 'test test✅' !"