@api
Feature: send reset password email
  As a developer
  I want to verify that the customer is able to reset his/her password.

  Scenario: successfully send the reset password email
    Given I have identity service available
    When  I send a reset password email to dxvfnz@gmail.com
    Then  I get a sending reset password email success response

  Scenario: send the reset password email to a non existing email address
    Given I have identity service available
    When  I send a reset password email to dxvfnz_non_exist@gmail.com
    Then  I get a sending reset password email bad request response
    And   I get a sending reset password email user not existing response

  Scenario: send the reset password email to a wrong format email address
    Given I have identity service available
    When  I send a reset password email to dxvfnz
    Then  I get a sending reset password email bad request response
    And   I get a sending reset password email format error response