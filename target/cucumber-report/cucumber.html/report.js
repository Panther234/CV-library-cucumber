$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/JobSearchTest.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search Test",
  "description": "",
  "id": "job-search-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Verify user should be able to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-able-to-search-job-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"\u003cJOB TITLE\u003e\" in job title field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"\u003cLOCATION\u003e\" in location field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"\u003cDISTANCE\u003e\" in the distance field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"\u003cMINIMUM SALARY\u003e\" data in the minimum salary field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"\u003cMAXIMUM SALARY\u003e\" data in the maximum salary field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"\u003cSALARY TYPE\u003e\" salary type",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"\u003cJOB TYPE\u003e\" job type",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"\u003cRESULT\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "job-search-test;verify-user-should-be-able-to-search-job-successfully;",
  "rows": [
    {
      "cells": [
        "JOB TITLE",
        "LOCATION",
        "DISTANCE",
        "MINIMUM SALARY",
        "MAXIMUM SALARY",
        "SALARY TYPE",
        "JOB TYPE",
        "RESULT"
      ],
      "line": 20,
      "id": "job-search-test;verify-user-should-be-able-to-search-job-successfully;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 21,
      "id": "job-search-test;verify-user-should-be-able-to-search-job-successfully;;2"
    },
    {
      "cells": [
        "Scientist",
        "Harrow",
        "up to 15 miles",
        "30000",
        "50000",
        "Per annum",
        "Contract",
        "Contract Scientist jobs in Harrow on the Hill"
      ],
      "line": 22,
      "id": "job-search-test;verify-user-should-be-able-to-search-job-successfully;;3"
    },
    {
      "cells": [
        "Pharmaceutical",
        "Cambridgeshire",
        "up to 7 miles",
        "30000",
        "60000",
        "Per annum",
        "Any",
        "Pharmaceutical jobs in Cambridgeshire"
      ],
      "line": 23,
      "id": "job-search-test;verify-user-should-be-able-to-search-job-successfully;;4"
    },
    {
      "cells": [
        "Retail Manager",
        "West London",
        "up to 25 miles",
        "30000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Retail Manager jobs in West London"
      ],
      "line": 24,
      "id": "job-search-test;verify-user-should-be-able-to-search-job-successfully;;5"
    },
    {
      "cells": [
        "Automation Tester",
        "HA1 1AB",
        "up to 10 miles",
        "300",
        "400",
        "Per day",
        "Contract",
        "Contract Automation Tester jobs in HA1 1AB"
      ],
      "line": 25,
      "id": "job-search-test;verify-user-should-be-able-to-search-job-successfully;;6"
    },
    {
      "cells": [
        "Research Scientist",
        "Newcastle upon Tyne",
        "up to 10 miles",
        "400",
        "500",
        "Per day",
        "Contract",
        "Contract Research Scientist jobs in Newcastle upon Tyne"
      ],
      "line": 26,
      "id": "job-search-test;verify-user-should-be-able-to-search-job-successfully;;7"
    },
    {
      "cells": [
        "Tester",
        "Watford, Hertfordshire",
        "up to 5 miles",
        "40000",
        "60000",
        "Per annum",
        "Contract",
        "Contract Tester jobs in Watford"
      ],
      "line": 27,
      "id": "job-search-test;verify-user-should-be-able-to-search-job-successfully;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9694079600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 2840290500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify user should be able to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-able-to-search-job-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Tester\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Harrow\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 5 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"30000\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"50000\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per annum\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Permanent\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 851454800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 491335800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 231626400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 176571700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 336971300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 207294500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 140693500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 200993900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 192293700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 40545065800,
  "status": "passed"
});
formatter.after({
  "duration": 222100,
  "status": "passed"
});
formatter.before({
  "duration": 4887320100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 2415185500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify user should be able to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-able-to-search-job-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Scientist\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Harrow\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 15 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"30000\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"50000\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per annum\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Contract\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Contract Scientist jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Scientist",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 634587400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 383028400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 134927200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 269433900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 387733100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 230253100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 94361500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 163338000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 249497800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Scientist jobs in Harrow on the Hill",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 70009808400,
  "status": "passed"
});
formatter.after({
  "duration": 61800,
  "status": "passed"
});
formatter.before({
  "duration": 4333687100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 3035583700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify user should be able to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-able-to-search-job-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Pharmaceutical\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Cambridgeshire\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 7 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"30000\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"60000\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per annum\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Any\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Pharmaceutical jobs in Cambridgeshire\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Pharmaceutical",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 1333693900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cambridgeshire",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 348516100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 7 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 319225100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 289245400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 356289700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 203676300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 163725900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 159332800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 232749500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pharmaceutical jobs in Cambridgeshire",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 89947479300,
  "status": "passed"
});
formatter.after({
  "duration": 39200,
  "status": "passed"
});
formatter.before({
  "duration": 4245049700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 2442530400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify user should be able to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-able-to-search-job-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Retail Manager\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"West London\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 25 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"30000\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"50000\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per annum\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Permanent\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Permanent Retail Manager jobs in West London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Retail Manager",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 834843200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "West London",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 272797300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 25 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 223435300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 213483300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 370463800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 213342600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 168843300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 221975900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 198314000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Retail Manager jobs in West London",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 64896132300,
  "status": "passed"
});
formatter.after({
  "duration": 53800,
  "status": "passed"
});
formatter.before({
  "duration": 10470302100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 2450109800,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify user should be able to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-able-to-search-job-successfully;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Automation Tester\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"HA1 1AB\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 10 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"300\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"400\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per day\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Contract\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Contract Automation Tester jobs in HA1 1AB\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Tester",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 1172746700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA1 1AB",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 286671900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 221321300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 232424300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 377024900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 157546800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per day",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 214770300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 158999500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 230526600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Automation Tester jobs in HA1 1AB",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 13471149700,
  "status": "passed"
});
formatter.after({
  "duration": 51500,
  "status": "passed"
});
formatter.before({
  "duration": 5703396400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 2482017700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify user should be able to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-able-to-search-job-successfully;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Research Scientist\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Newcastle upon Tyne\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 10 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"400\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"500\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per day\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Contract\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Contract Research Scientist jobs in Newcastle upon Tyne\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Research Scientist",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 1135972300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Newcastle upon Tyne",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 359787800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 274128600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 255711700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 362839700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 295072200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per day",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 242219800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 240799700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 307870000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Research Scientist jobs in Newcastle upon Tyne",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 12395638200,
  "status": "passed"
});
formatter.after({
  "duration": 44600,
  "status": "passed"
});
formatter.before({
  "duration": 6089062600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 3001554100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify user should be able to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-able-to-search-job-successfully;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Tester\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Watford, Hertfordshire\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 5 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"40000\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"60000\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per annum\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Contract\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Contract Tester jobs in Watford\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 1795199300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Watford, Hertfordshire",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 464524200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 225248900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 259599400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 409935800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 398224100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 121554900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 175141700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 215048400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Tester jobs in Watford",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 9951123500,
  "status": "passed"
});
formatter.after({
  "duration": 42600,
  "status": "passed"
});
});