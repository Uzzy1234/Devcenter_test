'use strict'

const { test, trait } = use('Test/Suite')('Cardetail')
const Car = use('App/Models/Cardetail')

trait('Test/ApiClient')
trait('Auth/Client')
trait('Session/Client')


test('get all cars', async ({ client }) => {
  const response = await client
    .get('v2/cars')
    .end()

  response.assertStatus(200) //show all cars

})


test('get a car by Id', async ({ client }) => {

  const response = await client
    .get('v2/cars/1')
    .end()
  response.assertStatus(200) //show cars by id

})

test('delete a car by Id', async ({ client }) => {

  const response = await client
    .delete('v2/cars/1')
    .end()
    
  response.assertStatus(200) //show car

})
