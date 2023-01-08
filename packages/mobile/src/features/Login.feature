
@Login_feature
Feature: Login to My Vodafone app
              As a user
              I want to login
  So that I can securely access the features of the app

        Background:
            Given I open My Vodafone App

        @CON-611 @smoke
        Scenario: Sign in successful with correct email address and password

             When I sign in with the valid "prepay valid credentials"
              And I Set the Pin successfully
             Then I am taken to the dashboard view with success message for "prepay valid credentials"



        @CON-611 @smoke
        Scenario Outline: Sign in with verified email address and invalid password

             When I sign in with the invalid "prepay invalid credentials"
             Then I should be displayed with "<error message>"

        Examples:
                  | error message                   |
                  | login_err_invalidCredentialsTxt |

        @CON-611  @smoke
        Scenario Outline: Sign in with unverified email address and valid password

             When I sign in with the unverified "<user>"
              And I naviagte on the "<verify email>" page
             Then I should verify email sent message to the "<user>"

        Examples:
                  | user                     | verify email |
                  | unverified email address | Verify email |


        @CON-611 @smoke
        Scenario Outline: Sign in with unverified email address and valid password and Resend Email for 3 Times

             When I sign in with the unverified "<user>"
              And I should be displayed with verify email "<user>" page
              And I click on Resend Email button for 3 times
             Then I should be displayed with a exceeded attempt message for "<user>"

        Examples:
                  | user                     |
                  | unverified email address |



# This functionality is still in discussion

  # @CON-611 @notAutomated @smoke_test
  # Scenario: Sign in with wrong password entered for 5 times

  #   Given I am user with a verified email address
  #   When I sign in with no email address no password
  #   Then I should be displayed with error message

  



# This functionality is still in development and will be re-open once dashboard is developed

        @CON-611 @notAutomated @smoke_test
        Scenario: Sign in with Keep me signed in checked box

             When I enter valid "prepay valid credentials"
              And I sign in with Keep me logged in check box selected
              And I am taken to the dashboard view with success message for "prepay valid credentials"
             When I close and open the App again
             Then I am taken to the dashboard view with success message for "prepay valid credentials"




     #    @CON-611 @smoke
        Scenario: Sign in functionality when Initial Pin has been already Set

             When I sign in with the valid "prepay valid credentials"
              And I Set the Pin successfully
              And I am taken to the dashboard view with success message for "prepay valid credentials"
              And I click on Log out
              And I sign in with the valid "prepay valid credentials"
             Then I should directly naviagted on the Dashboard with success message for "prepay valid credentials"

       

# # Android test-id testing with react-native code fix
#  @CON-611 @Automated @Android_test
#   Scenario: Sign in again when Initial Pin has been Set

#     Given I am user with a verified email
#     And I verify ID 
   
   
    

















