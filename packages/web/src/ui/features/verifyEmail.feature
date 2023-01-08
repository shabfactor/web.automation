@ui
Feature: Performing verfiy email functionality
    As a customer
    I want to be able to validate my email before I can activate my account
    so that I can be assured the collection of quality data (email address is deliverable and valid).

    Background:
        Given I open the Self Service web app

    #The @Verbose tag adds a screenshot and additional test metadata.

    #####AC2: StoryNo:CON-911####
    @Verbose@ui
    Scenario: AC-1: Login wiith UnVerified account for the very first time
        When I login with "unverified1" using click action
        Then I expect a message to validate email sent to "unverified1" on the check your email page


    #####AC2: StoryNo:CON-911####
    @Verbose@ui
    Scenario: AC-2: Login wiith UnVerified account
        When I login with "unverified2" using click action
        And I click on the Send again button upto 3 times
        Then I expect a validate and prevent unauthorized message sent to "unverified2" on the check your email page

# #     ######StoryNo:CON-537#####
# #     @Verbose@ui
#####  Discussion is in progress (under build)
# #     Scenario Outline: AC3: Verified email address with the wrong password for the first time.
# #         When I click on the login button
# #         And I set "<email>" to the inputemailfield
# #         And I set "<password>" on the password field
# #         And I click on the login button on the login form
# #         And I click on the Send again button after three times
# #         Then I expect a maximum amount message on the check your email page.

# #         Examples:
# #             | email                          | password  |
# #             | emailunverified.user@email.com | password1 |

