@ui
Feature: Performing Login Functionality
    As a customer
    I want to be able to login to my self-service account using my email address and password
    so that I can manage my Vodafone’s services.

    Background:
        Given I open the Self Service web app

    #####StoryNo:CON-494######
    @Verbose@ui
    Scenario Outline: AC1 :Postive Scenarios -Login Email Format Validation with Valid email address
        When I enter the "<ValidEmail>" on the login form
        Then I expect an error message not to be shown on the login form

        Examples:
            | ValidEmail  |
            | a@gmail.nz  |
            | _@yaoho.com |
            | 123@g.com   |
            | A-z@yah.co  |

    ###StoryNoCON-537###
    @Verbose@ui
    Scenario: AC2: Negative scenario - Login with invalid email
        When I login with "invalidEmail1" using Enter action
        Then I expect an invalid email address message to be shown
        And I expect the login form login button to be disabled

    ###StoryNoCON-537&BugNoCON-1460#####
    ###The @Verbose tag adds a screenshot and additional test metadata.###
    @Verbose@ui
    Scenario Outline: AC4A: Positive scenario - Login with valid credentials (click action)
        When I login with "<user-profile>" using click action
        Then I expect a login success message to be shown on the alert

        Examples:
            | user-profile |
            | valid2       |
            | valid3       |

    ###StoryNoCON-537&BugNoCON-1460#####
    ###The @Verbose tag adds a screenshot and additional test metadata.###
    @Verbose@ui
    Scenario Outline: AC4B: Positive scenario - Login with valid credentials (enter action)
        When I login with "<user-profile>" using Enter action
        Then I expect a login success message to be shown on the alert

        Examples:
            | user-profile |
            | valid2       |
            | valid3       |

    ####AC5: StoryNo:CON-537####
    @Verbose@ui
    Scenario: AC5: Login with UnVerified email address with correct credential
        When I login with "unverified1" using click action
        Then I expect a message to validate email sent to "unverified1" on the check your email page

    ###StoryNoCON-537###
    @Verbose@ui
    Scenario: AC6: Negative scenario - Login with invalid credentials
        When I login with "invalidPassword1" using Enter action
        Then I expect a wrong details error message to be shown in the info bubble


    ###StoryNoCON-537###
    @Verbose@ui
    Scenario: AC7: Negative scenario - Login with invalid credentials 5 times
        When I login with "invalidPassword1" using Enter action
        And I click on the login button 4 more times
        Then I expect to be shown a link to reset my password in the info bubble

    # #####StoryNo:CON-1703####
    @Verbose@ui
    Scenario: AC7: Verified Reset your password link directs to forgot password tile
        When I login with "invalidPassword3" using Enter action
        And I click on the login button 4 more times
        And I click on the reset password link
        And I click on the reset my password button
        Then I expect a reset password email sent message that contains the "invalidPassword3" email address