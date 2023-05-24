Feature: [Start To End Date Picker]

The pickers let you select one start date and one end date, there is no output so the only assertion needed is if the values selected values are the ones the user clicked on

Rule 1: The user can NOT select a start date that is after the end date or a end date that is before the start date

Scenario: The user selects valid start and end dates
  Given the user navigated to the bootstrap date picker demo page
  When the user manually selects "09/07/1998" for the "Start Date"
  And the user manually selects "24/11/2032" for the "End Date"
  Then the values of the Start and End dates should be "09/07/1998" and "24/11/2032"

@Rule1
Scenario: The user selects a start date that is after the end date
  Given the user navigated to the bootstrap date picker demo page
  When the user manually selects "15/10/2026" for the "End Date"
  And the user manually selects "18/10/2026" for the "Start Date"
  Then the values of the Start and End dates should be "15/10/2026" and "15/10/2026"

Scenario: The user selects a end date that is before the start date
  Given the user navigated to the bootstrap date picker demo page
  When the user manually selects "18/10/1995" for the "Start Date"
  And the user manually selects "15/10/1995" for the "End Date"
  Then the values of the Start and End dates should be "18/10/1995" and "18/10/1995"