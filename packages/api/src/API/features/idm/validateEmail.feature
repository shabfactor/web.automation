@api
Feature: validate email to check if the user exists in the system
  As a developer
  I want to verify the customer identity based on email address

  Scenario: user exists in the system
    Given I have identity service available
    When  I verify a customer email dxvfnz@gmail.com
    Then  The verification done successfully

  Scenario: verify with non existing email address
    Given I have identity service available
    When  I verify a customer email dxvfnz_non_exist@gmail.com
    Then  The verification failed with a bad request
    And   I get the validated email not exist response

  Scenario: verify with wrong email format
    Given I have identity service available
    When  I verify a customer email dxvfnz
    Then  The verification failed with a bad request
    And   I get the validated email wrong format response