@ForgotPassword_feature
Feature: Dashboard Functionality
              As a user
              I want to navigate on the dashboard
              So that I can securely access the features of the app on the dashboard


        Background:
            Given I open My Vodafone App

        @smoke
        Scenario Outline: As a User, I should be able to verify the placeholder widgets on the dashboard for  primary Usage

    
             When I sign in with the valid "prepay valid credentials"
              And I Set the Pin successfully
              And I am taken to the dashboard view with success message for "prepay valid credentials"
             Then I verify the Placeholder widgets on the dashboard for "<widget>"

        Examples:
                  | widget                   |
                  | Primary Usage            |
                  | Secondary Usage          |
                  | payments Tertiary widget |
                  | My other services        |
                  | account                  |
     

     