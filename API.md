# DevCenter_Test API Version 1 ENDPOINT
 This document contains list of all endpoints for Developer(User), all **endpoints** should be prefixed with `v1/`

## RESOURCES

 - [Auth](#auth)
 - [Users](#users)


### AUTH

> Groups of endpoint for user authentication

| HTTP METHOD | ENDPOINT                            | FUNCTION                                                      |
| ------------| ------------------------------------| -----------------------------------------------               |
| **POST**    | [`auth/login`](#login-a-user-post-authentication)| Creates a new token associated with the user Id  |


### USERS

  > Endpoints handles manipulation of users resource

  | HTTP METHOD | ENDPOINT                           | FUNCTION                                                     |
  | ----------- | ---------------------------------- | ---------------------------------------------------------    |
  | **POST**    | [`users`](#create-a-new-user-post-user) | Creates a new user                        |
  | **GET**     | [`users`](#gets-all-users) | Gets all user                              |
  | **GET**     | [`users/{userId}`](#gets-a-user-detail-get-userId) | Gets a user detail    |
  | **PUT**     | [`users/{userId}`] | Updates a user's detail |
  | **DELETE**  | [`users/{userId}`] | Deletes a user |