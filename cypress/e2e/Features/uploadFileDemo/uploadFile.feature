Feature: [Uploading files]

This feature enables the user to import a files

Scenario: the user imports a file
  Given the user naviaged to the upload file demo page
  When the user chooses a file to upload
  Then the file name is displayed next to the button
  And the message "File Successfully Uploaded" is present

Scenario: the user drags and drops a file
  Given the user naviaged to the upload file demo page
  When the user drags and drops a file
  Then the file name is displayed next to the button
  And the message "File Successfully Uploaded" is present