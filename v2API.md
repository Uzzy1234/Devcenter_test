# DevCenter_Test API Version 2 ENDPOINT
 This document contains list of all endpoints for Fleet(Cars), all **endpoints** should be prefixed with `v2/`

## RESOURCES

 - [Cars](#users)



### CARS

  > Endpoints handles manipulation of users resource

  | HTTP METHOD | ENDPOINT                           | FUNCTION                                                     |
  | ----------- | ---------------------------------- | ---------------------------------------------------------    |
  | **POST**    | [`cars`](#create-a-new-car-post-car) | Creates a new car                        |
  | **GET**     | [`cars`](#gets-all-cars) | Gets all car                              |
  | **GET**     | [`cars/{carId}`](#gets-a-car-detail-get-carId) | Gets a car detail    |
  | **PUT**     | [`cars/{carId}`] | Updates a car's detail |
  | **DELETE**  | [`cars/{carId}`] | Deletes a car |