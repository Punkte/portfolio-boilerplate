Feature: Contact

Scenario: User sending email
  Given I'm a user attempting to send a message to Christella
  When I type "Elon Musk" as name
  Then submit button should still be disabled
  When I type "elon.musk@tesla.com" as email
  Then submit button should still be disabled
  When I click on submit button
  And I type "want to work with u" as subject
  Then submit button should still be disabled
  When I type "hi, how are you ?" as message
  Then submit button should'nt be disabled