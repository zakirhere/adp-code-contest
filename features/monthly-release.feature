Feature: upcoming-shoe-release

  Scenario: View upcoming shoes release for a month from now
    Given I log in to shoe store
    And I could pause the test
    When I click "July" tab
    Then I should see more than 2 item listed
    And I should see brief description of each shoe
    And I should see relevant image of each shoe item
    And I should see suggested pricing of each shoe

    # THIS IS FOR TESTING DEBUGGING
#  Scenario: To navigate back and forth within shoe store
#    Given I log in to shoe store
#    When I click "May" tab
#    Then I click "June" tab
#    And I click "August" tab
#    And I click "November" tab
##    And I could pause the test
#    And I click "December" tab
#    And I click "January" tab
#    And I click "March" tab
