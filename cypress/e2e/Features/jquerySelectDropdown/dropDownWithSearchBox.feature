Feature: [Dropdown with search box]

This dropdown has a search Bar

Scenario: The user searches for "Hong" and selects "Hong Kong"
  Given the user navigated to the jquery dropdown search demo page
  When the user clicks on the dropdown from the [Drop Down with Search box] section
  And the user enters "Hong" as the search query
  And the user clicks on "Hong Kong"
  Then the value "Hong Kong" should be selected