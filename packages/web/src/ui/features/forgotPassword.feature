@ui
Feature: Performing Forgot Password functionality
    As a customer registered with email and password
    I want to be able to create a new password if I have forgotten my password
    So that I can still access My Vodafone via email and password

    Background:
        Given I open the Self Service web app

    #The @Verbose tag adds a screenshot and additional test metadata.###
    #StoryNoCON-786###
    Scenario: AC-3$AC-6: Positive scenario: Reset password Message
        When I reset my password using "unverified1" user
        Then I expect a reset password email sent message that contains the "unverified1" email address

    #The @Verbose tag adds a screenshot and additional test metadata.###
    #### This test can be run only in chrome sucessfully due to the functionality##
    @Verbose@ui
    @OnlyChrome
    ##StoryNoCON-786###
    Scenario: AC-7: Positive Scenario: Resent Reset password Message
        When I reset my password using "unverified2" user
        And I click on the send again button 4 times
        Then I expect a reset password email sent message that contains the "unverified2" email address

# #####StoryNo:CON-786######
# Functionality is in  progress
# @Verbose@ui
# Scenario Outline: AC-7&AC-8&AC-9:Positive Scenarios: Maximum Reset password Trial
#   When I click on the login button
#   And I set "<unverifiedEmail>" to the inputemailfield
#   And I click on the Forgot password on login form
#   And I press "Enter"
#   And I click on send again button upto six times on the forgot page
#   And I expect try in 60 minutes message on forgot password page
#   And I wait for cool down period to end
#   And I press "Enter"
#   Then I expect Reset password message on reset password page

#   Examples:
#     | unverifiedEmail           |
#     | unverifiedmehak@gmail.com |