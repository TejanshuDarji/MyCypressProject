Feature: End to End Ecommerce validation

    Application regression // feature description

    Scenario: Ecommerce Products delievery
    Given I open Ecommerce page
    When I add items to cart
    And Validate the total prices
    Then select the country,submit and verify success message


    Scenario : Filling the form to shop
    Given I open Ecommerce page
    When I fill the form detail
    Then Validate form behaviour
    And select the shop page
