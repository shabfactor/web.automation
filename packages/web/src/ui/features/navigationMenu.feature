@Smoke
@Ui
Feature: Navigation Menu
    As a Vodafone self service web user
    I should be able to view a menu
    So that I can navigate in the web app to find relevant info about my service

    Background:
        Given I open the Self Service web app

    # Currently failing due to screen height of 720px (menu is cut off)
    Scenario: CON-1798:AC1&AC:2/CON-1811:AC3 - Open pages when click on navigation menu item
        When I login as "smoke user"
        Then Each menu item should open its respective page
            | option              | page               |
            | Dashboard           | Dashboard          |
            | Accounts & Services | AccountsServices   |
            | Plans               | Plans              |
            | Devices             | Devices            |
            | Payments & Charges  | PaymentsAndCharges |
            | My Orders           | Orders             |
            | Rewards             | Rewards            |
            | Help                | Help               |
            | Account Settings    | AccountSettings    |
            | Preferences         | Preferences        |
            | Log Out             | Logout             |