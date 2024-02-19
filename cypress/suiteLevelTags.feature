@testIsolation(false)
Feature: Apply Feature tags at the suite level

    Scenario: Open a page
        Given I load a page

    Scenario: the page still exists
        Then the page should exist
