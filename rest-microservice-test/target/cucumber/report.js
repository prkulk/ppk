$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/authorize-facebook.feature");
formatter.feature({
  "line": 1,
  "name": "Validate \"/restms/welcome\" service",
  "description": "Http method \t\t\t: \tGET \nContext path \t\t\t: \t/restms/welcome",
  "id": "validate-\"/restms/welcome\"-service",
  "keyword": "Feature"
});
formatter.before({
  "duration": 329153529,
  "status": "passed"
});
formatter.before({
  "duration": 67509,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Validate rest-microservice message API",
  "description": "",
  "id": "validate-\"/restms/welcome\"-service;validate-rest-microservice-message-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@rest-microservice"
    },
    {
      "line": 5,
      "name": "@Fast"
    },
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I use \"welcome\" service",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I make \"GET\" api \"/message/\" call",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "add below headers:",
  "rows": [
    {
      "cells": [
        "headerName",
        "headerValue"
      ],
      "line": 10
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 11
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I retrieve JSON results",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "expect a status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "The response should contain \"$..message\" with value \"Welcome to micro services\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "welcome",
      "offset": 7
    }
  ],
  "location": "TestRestUtilSteps.i_use_service(String)"
});
formatter.result({
  "duration": 79797497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 8
    },
    {
      "val": "/message/",
      "offset": 18
    }
  ],
  "location": "TestRestUtilSteps.i_make_api_call(String,String)"
});
formatter.result({
  "duration": 210800792,
  "status": "passed"
});
formatter.match({
  "location": "TestRestUtilSteps.add_below_headers(DataTable)"
});
formatter.result({
  "duration": 1597623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JSON",
      "offset": 11
    }
  ],
  "location": "TestRestUtilSteps.i_retrieve_results(String)"
});
formatter.result({
  "duration": 23609178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "TestRestUtilSteps.the_status_code_should_be(int)"
});
formatter.result({
  "duration": 2164163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$..message",
      "offset": 29
    },
    {
      "val": "Welcome to micro services",
      "offset": 53
    }
  ],
  "location": "TestRestUtilSteps.the_response_should_contain_with_value(String,String)"
});
formatter.result({
  "duration": 29693753,
  "status": "passed"
});
formatter.after({
  "duration": 17660,
  "status": "passed"
});
formatter.after({
  "duration": 13332,
  "status": "passed"
});
formatter.before({
  "duration": 407678,
  "status": "passed"
});
formatter.before({
  "duration": 19757,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Validate rest-microservice name API",
  "description": "",
  "id": "validate-\"/restms/welcome\"-service;validate-rest-microservice-name-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@rest-microservice"
    },
    {
      "line": 18,
      "name": "@Fast"
    },
    {
      "line": 18,
      "name": "@Smoke"
    },
    {
      "line": 18,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I use \"welcome\" service",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I make \"GET\" api \"/name/\" call",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "add below headers:",
  "rows": [
    {
      "cells": [
        "headerName",
        "headerValue"
      ],
      "line": 23
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 24
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I retrieve JSON results",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "expect a status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "The response should contain \"$..name\" with value \"Magpie !!!\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "welcome",
      "offset": 7
    }
  ],
  "location": "TestRestUtilSteps.i_use_service(String)"
});
formatter.result({
  "duration": 73944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 8
    },
    {
      "val": "/name/",
      "offset": 18
    }
  ],
  "location": "TestRestUtilSteps.i_make_api_call(String,String)"
});
formatter.result({
  "duration": 96978336,
  "status": "passed"
});
formatter.match({
  "location": "TestRestUtilSteps.add_below_headers(DataTable)"
});
formatter.result({
  "duration": 173816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JSON",
      "offset": 11
    }
  ],
  "location": "TestRestUtilSteps.i_retrieve_results(String)"
});
formatter.result({
  "duration": 5374711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "TestRestUtilSteps.the_status_code_should_be(int)"
});
formatter.result({
  "duration": 166146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$..name",
      "offset": 29
    },
    {
      "val": "Magpie !!!",
      "offset": 50
    }
  ],
  "location": "TestRestUtilSteps.the_response_should_contain_with_value(String,String)"
});
formatter.result({
  "duration": 3080474,
  "status": "passed"
});
formatter.after({
  "duration": 22637,
  "status": "passed"
});
formatter.after({
  "duration": 17036,
  "status": "passed"
});
formatter.before({
  "duration": 273729,
  "status": "passed"
});
formatter.before({
  "duration": 20062,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Not API found, 404 case",
  "description": "",
  "id": "validate-\"/restms/welcome\"-service;not-api-found,-404-case",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@rest-microservice"
    },
    {
      "line": 30,
      "name": "@Fast"
    },
    {
      "line": 30,
      "name": "@Smoke"
    },
    {
      "line": 30,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I use \"welcome\" service",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I make \"GET\" api \"/notFound/\" call",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I retrieve JSON results",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "expect a status code 404",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "welcome",
      "offset": 7
    }
  ],
  "location": "TestRestUtilSteps.i_use_service(String)"
});
formatter.result({
  "duration": 72894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 8
    },
    {
      "val": "/notFound/",
      "offset": 18
    }
  ],
  "location": "TestRestUtilSteps.i_make_api_call(String,String)"
});
formatter.result({
  "duration": 100782022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JSON",
      "offset": 11
    }
  ],
  "location": "TestRestUtilSteps.i_retrieve_results(String)"
});
formatter.result({
  "duration": 13134920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 21
    }
  ],
  "location": "TestRestUtilSteps.the_status_code_should_be(int)"
});
formatter.result({
  "duration": 169813,
  "status": "passed"
});
formatter.after({
  "duration": 18881,
  "status": "passed"
});
formatter.after({
  "duration": 15231,
  "status": "passed"
});
});