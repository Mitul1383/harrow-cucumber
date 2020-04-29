Feature: Council Tax and CoronaVirus page Functionality
  As a user I want to visit Harrow Council website


  Scenario: Verify user should navigate to Council Tax page
    Given I am on Home page
    When I click on Council Tax tab
    Then I should be in Council Tax successfully


  Scenario: Verify user should navigate to CoronaVirus Page
    Given I am on Home page
    When I click on CoronaVirus tab
    Then I should be in CoronaVirus page successfully