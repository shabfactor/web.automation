@ui
Feature: Widget quick action menu

    Background:
        Given I open the Self Service web app
        And I login with "valid1" using click action

    Scenario Outline: CON-1973:AC1,AC2,AC3 - Options under quick action
        When I click on the kebab menu button on the "<widget>"
        And The "<widget>" quick action menu is open
        And The menu on "<widget>" should have the following "<options>" with icons
        Then Clicking outside should close the menu on "<widget>"

        Examples:
            | widget       | options                                                                                                        |
            | PrimaryUsage | View usage details, Switch plan, Pause plan, Cancel plan, Edit plan name & image, Remove widget from dashboard |
