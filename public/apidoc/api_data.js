define({ "api": [
  {
    "type": "delete",
    "url": "/authorizations/current",
    "title": "Delete current token",
    "description": "<p>Delete current token</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V1/AuthController.php",
    "groupTitle": "Auth",
    "name": "DeleteAuthorizationsCurrent"
  },
  {
    "type": "post",
    "url": "/authorizations",
    "title": "Create a token",
    "description": "<p>Create a token</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "version": "0.2.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"data\": {\n        \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbHVtZW4tYXBpLWRlbW8uZGV1L2FwaS9hdXRob3JpemF0aW9ucyIsImlhdCI6MTQ4Mzk3NTY5MywiZXhwIjoxNDg5MTU5NjkzLCJuYmYiOjE0ODM5NzU2OTMsImp0aSI6ImViNzAwZDM1MGIxNzM5Y2E5ZjhhNDk4NGMzODcxMWZjIiwic3ViIjo1M30.hdny6T031vVmyWlmnd2aUr4IVM9rm2Wchxg5RX_SDpM\",\n        \"expired_at\": \"2017-03-10 15:28:13\",\n        \"refresh_expired_at\": \"2017-01-23 15:28:13\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401\n{\n  \"error\": \"User or password is incorrect\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V1/AuthController.php",
    "groupTitle": "Auth",
    "name": "PostAuthorizations"
  },
  {
    "type": "put",
    "url": "/authorizations/current",
    "title": "Refresh token",
    "description": "<p>Refresh token)</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>old-jwt-token, value-started-with-Bearer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL21vYmlsZS5kZWZhcmEuY29tXC9hdXRoXC90b2tlbiIsImlhdCI6IjE0NDU0MjY0MTAiLCJleHAiOiIxNDQ1NjQyNDIxIiwibmJmIjoiMTQ0NTQyNjQyMSIsImp0aSI6Ijk3OTRjMTljYTk1NTdkNDQyYzBiMzk0ZjI2N2QzMTMxIn0.9UPMTxo3_PudxTWldsf4ag0PHq1rK8yO9e5vqdwRZLY\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbHVtZW4tYXBpLWRlbW8uZGV1L2FwaS9hdXRob3JpemF0aW9ucyIsImlhdCI6MTQ4Mzk3NTY5MywiZXhwIjoxNDg5MTU5NjkzLCJuYmYiOjE0ODM5NzU2OTMsImp0aSI6ImViNzAwZDM1MGIxNzM5Y2E5ZjhhNDk4NGMzODcxMWZjIiwic3ViIjo1M30.hdny6T031vVmyWlmnd2aUr4IVM9rm2Wchxg5RX_SDpM\",\n        \"expired_at\": \"2017-03-10 15:28:13\",\n        \"refresh_expired_at\": \"2017-01-23 15:28:13\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V1/AuthController.php",
    "groupTitle": "Auth",
    "name": "PutAuthorizationsCurrent"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Current user info",
    "description": "<p>Current user info</p>",
    "group": "user",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"id\": 2,\n    \"email\": 'test@gmail.com',\n    \"name\": \"foobar\",\n    \"created_at\": \"2015-09-08 09:13:57\",\n    \"updated_at\": \"2015-09-08 09:13:57\",\n    \"deleted_at\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V1/UserController.php",
    "groupTitle": "user",
    "name": "GetUser"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "User list",
    "description": "<p>User list</p>",
    "group": "user",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      \"id\": 2,\n      \"email\": \"490554191@qq.com\",\n      \"name\": \"fff\",\n      \"created_at\": \"2015-11-12 10:37:14\",\n      \"updated_at\": \"2015-11-13 02:26:36\",\n      \"deleted_at\": null\n    }\n  ],\n  \"meta\": {\n    \"pagination\": {\n      \"total\": 1,\n      \"count\": 1,\n      \"per_page\": 15,\n      \"current_page\": 1,\n      \"total_pages\": 1,\n      \"links\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V1/UserController.php",
    "groupTitle": "user",
    "name": "GetUsers"
  },
  {
    "type": "get",
    "url": "/users/{id}",
    "title": "Some user's info",
    "description": "<p>Some user's info</p>",
    "group": "user",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"id\": 2,\n    \"email\": \"490554191@qq.com\",\n    \"name\": \"fff\",\n    \"created_at\": \"2015-11-12 10:37:14\",\n    \"updated_at\": \"2015-11-13 02:26:36\",\n    \"deleted_at\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V1/UserController.php",
    "groupTitle": "user",
    "name": "GetUsersId"
  },
  {
    "type": "patch",
    "url": "/user",
    "title": "Update my info",
    "description": "<p>Update my info</p>",
    "group": "user",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Parameter",
            "type": "Url",
            "optional": true,
            "field": "avatar",
            "description": "<p>avatar</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": 2,\n   \"email\": 'test@gmail.com',\n   \"name\": \"ffff\",\n   \"created_at\": \"2015-10-28 07:30:56\",\n   \"updated_at\": \"2015-10-28 09:42:43\",\n   \"deleted_at\": null,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V1/UserController.php",
    "groupTitle": "user",
    "name": "PatchUser"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create a user",
    "description": "<p>Create a user</p>",
    "group": "user",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>email[unique]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL21vYmlsZS5kZWZhcmEuY29tXC9hdXRoXC90b2tlbiIsImlhdCI6IjE0NDU0MjY0MTAiLCJleHAiOiIxNDQ1NjQyNDIxIiwibmJmIjoiMTQ0NTQyNjQyMSIsImp0aSI6Ijk3OTRjMTljYTk1NTdkNDQyYzBiMzk0ZjI2N2QzMTMxIn0.9UPMTxo3_PudxTWldsf4ag0PHq1rK8yO9e5vqdwRZLY\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"email\": [\n        \"The e-mail is already registered\"\n    ],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V1/UserController.php",
    "groupTitle": "user",
    "name": "PostUsers"
  },
  {
    "type": "put",
    "url": "/user/password",
    "title": "Edit password",
    "description": "<p>Edit password</p>",
    "group": "user",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old_password",
            "description": "<p>Old password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>New password confirmation</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"password\": [\n        \"Inconsistent password entered\",\n        \"Old and new password cannot be the same\"\n    ],\n    \"password_confirmation\": [\n        \"Inconsistent password entered\"\n    ],\n    \"old_password\": [\n        \"Wrong password\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/V1/UserController.php",
    "groupTitle": "user",
    "name": "PutUserPassword"
  }
] });
