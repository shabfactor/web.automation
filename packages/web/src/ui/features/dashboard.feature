@ui
Feature: Dashboard Skeleton
    As a Vodafone customer
    I want to view dashboard with widgets
    So that I can have a summarized view of my services with Vodafone

    Background:
        Given I open the Self Service web app

    Scenario Outline: CON-1580:AC3 - Placeholder widgets
        When I login with "<user>" using click action
        Then I should see the following placeholder "<widgets>"

        Examples:
            | user   | widgets                                                      |
            | valid1 | PrimaryUsage, SecondaryUsage, Payment, OtherService, Account |

    Scenario Outline: CON-1580:AC4 - Placeholder Header
        When I login with "<user>" using click action
        Then I Should see placholder header with logo, notification, search icons

        Examples:
            | user   |
            | valid1 |