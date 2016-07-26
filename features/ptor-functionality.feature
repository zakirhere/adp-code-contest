Feature: keyboard-functionality

#  Scenario: Enter email address through sendkeys
#    Given I log in to shoe store
#    When I enter "zakirhere@gmail.com" as email address
#    And I submit the email subscription
#    Then I should see successful notification message containing "zakirhere@gmail.com"
#    And I could pause the test

  Scenario: Enter email address through copy-paste
    Given I log in to shoe store
    When I save some text to clipboard
    And I simulate keyboard paste through Ctrl plus V
    And I could pause the test
    And I submit the email subscription
    Then I should see successful notification message containing "zakirhere"

