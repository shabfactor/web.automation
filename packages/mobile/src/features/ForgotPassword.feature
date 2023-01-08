@ForgotPassword_feature
Feature: Forgot Password Functionality
              As a user
              I want reset my password
  So that I can Login successfully & securely access the features of the app


        Background:
            Given I open My Vodafone App

        @smoke
        Scenario Outline: As a User, I should be able to send an Reset password confirmation email successfully

    
             When I click on the Forgot Password link on the Login page
              And I Enter the "<user>"
              And I click on Send Email button
             Then I should be able to see the successfull message sent to the user

        Examples:
                  | user                     |
                  | prepay valid credentials |


        @CON-611 @smoke
        Scenario Outline: Sign in with verified email address and valid password and Resend Email for 5 Times

              And I click on the Forgot Password link on the Login page
              And I Enter the "<user>"
              And I click on Send Email button
             When I click on Resend Email button for 5 times
             Then I should be displayed with a exceeded attempt message for "<user>"

        Examples:
                  | user                     |
                  | prepay valid credentials |