$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/gov/harrow/resources/featurefile/counciltaxandcoronavirus.feature");
formatter.feature({
  "line": 1,
  "name": "Council Tax and Coronavirus page Functionality",
  "description": "As a user\r\nI want to visit Harrow Council website",
  "id": "council-tax-and-coronavirus-page-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 19065463300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to Council Tax page",
  "description": "",
  "id": "council-tax-and-coronavirus-page-functionality;verify-user-should-navigate-to-council-tax-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Council Tax tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be in Council Tax successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 744201600,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxAndCoronavirusFeature.iClickOnCouncilTaxTab()"
});
formatter.result({
  "duration": 11264496000,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxAndCoronavirusFeature.iShouldBeInCouncilTaxSuccessfully()"
});
formatter.result({
  "duration": 158494300,
  "status": "passed"
});
formatter.after({
  "duration": 158000,
  "status": "passed"
});
formatter.before({
  "duration": 13624582600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify user should navigate to Coronavirus Page",
  "description": "",
  "id": "council-tax-and-coronavirus-page-functionality;verify-user-should-navigate-to-coronavirus-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Coronavirus tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should be in Coronavirus page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 49100,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxAndCoronavirusFeature.iClickOnCoronavirusTab()"
});
formatter.result({
  "duration": 1339695800,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxAndCoronavirusFeature.iShouldBeInCoronavirusPageSuccessfully()"
});
formatter.result({
  "duration": 108086300,
  "status": "passed"
});
formatter.after({
  "duration": 69100,
  "status": "passed"
});
formatter.uri("src/test/java/uk/gov/harrow/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "As a user\r\nI want to visit Harrow council website",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 18002517800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify user should navigate to Login Page",
  "description": "",
  "id": "login-functionality;verify-user-should-navigate-to-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Log In tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be on Login Page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 65500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLogInTab()"
});
formatter.result({
  "duration": 26585547400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iShouldBeOnLoginPageSuccessfully()"
});
formatter.result({
  "duration": 145593100,
  "status": "passed"
});
formatter.after({
  "duration": 47600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify User should not Login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Log In tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Your email in email field \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password in password field \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Log In button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "System should throw error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 19,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "mittulpattel@gmail.com",
        "patel1212!",
        "Invalid Username/Password supplied"
      ],
      "line": 20,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "mittul@gmail.com",
        "patel1212@",
        "Invalid Username/Password supplied"
      ],
      "line": 21,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "pattel@gmail.com",
        "patel1111@",
        "Invalid Username/Password supplied"
      ],
      "line": 22,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13605017500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify User should not Login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Log In tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Your email in email field \"mittulpattel@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password in password field \"patel1212!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Log In button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "System should throw error message \"Invalid Username/Password supplied\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 40400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLogInTab()"
});
formatter.result({
  "duration": 16067109000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mittulpattel@gmail.com",
      "offset": 35
    }
  ],
  "location": "LoginTest.iEnterYourEmailInEmailField(String)"
});
formatter.result({
  "duration": 401697900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel1212!",
      "offset": 36
    }
  ],
  "location": "LoginTest.iEnterPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 337041000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLogInButton()"
});
formatter.result({
  "duration": 1309862400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Username/Password supplied",
      "offset": 35
    }
  ],
  "location": "LoginTest.systemShouldThrowErrorMessage(String)"
});
formatter.result({
  "duration": 87801400,
  "status": "passed"
});
formatter.after({
  "duration": 57300,
  "status": "passed"
});
formatter.before({
  "duration": 15877193800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify User should not Login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Log In tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Your email in email field \"mittul@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password in password field \"patel1212@\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Log In button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "System should throw error message \"Invalid Username/Password supplied\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 49100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLogInTab()"
});
formatter.result({
  "duration": 15495983400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mittul@gmail.com",
      "offset": 35
    }
  ],
  "location": "LoginTest.iEnterYourEmailInEmailField(String)"
});
formatter.result({
  "duration": 271437600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel1212@",
      "offset": 36
    }
  ],
  "location": "LoginTest.iEnterPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 261927900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLogInButton()"
});
formatter.result({
  "duration": 1104326500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Username/Password supplied",
      "offset": 35
    }
  ],
  "location": "LoginTest.systemShouldThrowErrorMessage(String)"
});
formatter.result({
  "duration": 71310300,
  "status": "passed"
});
formatter.after({
  "duration": 26500,
  "status": "passed"
});
formatter.before({
  "duration": 20773665800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify User should not Login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Log In tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Your email in email field \"pattel@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password in password field \"patel1111@\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Log In button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "System should throw error message \"Invalid Username/Password supplied\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 56100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLogInTab()"
});
formatter.result({
  "duration": 20382945000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pattel@gmail.com",
      "offset": 35
    }
  ],
  "location": "LoginTest.iEnterYourEmailInEmailField(String)"
});
formatter.result({
  "duration": 338592400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel1111@",
      "offset": 36
    }
  ],
  "location": "LoginTest.iEnterPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 253703400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLogInButton()"
});
formatter.result({
  "duration": 1155447700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Username/Password supplied",
      "offset": 35
    }
  ],
  "location": "LoginTest.systemShouldThrowErrorMessage(String)"
});
formatter.result({
  "duration": 311933800,
  "status": "passed"
});
formatter.after({
  "duration": 39700,
  "status": "passed"
});
});