@api
Feature: send verification email
  As a developer
  I want to verify that customer is able to send verification email to verify his/her email address.

  Scenario: successfully send the verification email
    Given I have identity service available
    When  I send a verification email to dxvfnz@gmail.com
    Then  I get a sending verification email success response

  Scenario: send the verification email to a non existing email address
    Given I have identity service available
    When  I send a verification email to dxvfnz_non_exist@gmail.com
    Then  I get a sending verification email bad request response
    And   I get a sending verification email user not existing response

  Scenario: send the verification email to a wrong format email address
    Given I have identity service available
    When  I send a verification email to dxvfnz
    Then  I get a sending verification email bad request response
    And   I get a sending verification email format error response