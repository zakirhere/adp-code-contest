Feature: upcoming-shoe-release

Scenario: View upcoming shoes release for a month from now
 Given I log in to shoe store
 When I click "July" tab
 Then I should see more than "1" item listed
 And I should see brief description of each shoe
 And I should see relevant image of each shoe item
 And I should see suggested pricing of each shoe

