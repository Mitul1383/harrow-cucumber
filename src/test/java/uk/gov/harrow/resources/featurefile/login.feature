Feature: Login Functionality
  As a user I want to visit Harrow council website


  Scenario: Verify user should navigate to Login Page
    Given I am on Home page
    When I click on Log In tab
    Then I should be on Login Page successfully

  Scenario Outline: Verify User should not Login with invalid credentials
    Given I am on Home page
    And I click on Log In tab
    When I enter Your email in email field "<email>"
    And I enter password in password field "<password>"
    And I click on Log In button
    Then System should throw error message "<errorMessage>"
    Examples:
      | email                  | password  |      errorMessage                       |
      | mittulpattel@gmail.com | patel1212!| Invalid Username/Password supplied |
      | mittul@gmail.com       | patel1212@| Invalid Username/Password supplied |
      | pattel@gmail.com       | patel1111@| Invalid Username/Password supplied |
