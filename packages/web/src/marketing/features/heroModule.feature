@ui
Feature: CMS Hero module Functionality
    As a content Editor
    I want to be able to view  my page
    so that I can see how the hero module looks like

    Background:
        Given I open the Hero module URL

    @Verbose@ui
    Scenario: CMS: Postitve Scenerio: Verify self service URL
        When I click on the Get Started button
        Then I should go to Self service web application

    @Verbose@ui
    Scenario: CMS: Positive Scenerio - Verify the HeroModule page
        When Hero module page is displayed
        Then I expect the heading,paragraph,footer,image and button on the hero module page
