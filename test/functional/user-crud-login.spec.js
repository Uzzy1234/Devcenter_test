'use strict'

const { test, trait } = use('Test/Suite')('User')
const User = use('App/Models/User')

trait('Test/ApiClient')
trait('Auth/Client')
trait('Session/Client')


test('get all users', async ({ client }) => {
  const response = await client
    .get('v1/users')
    .end()

  response.assertStatus(200) //show all users

})


test('get a user by Id', async ({ client }) => {

  const response = await client
    .get('v1/users/1')
    .end()
  response.assertStatus(200) //show users by id

})

test('delete a user by Id', async ({ client }) => {

  const response = await client
    .delete('v1/users/1')
    .end()
    
  response.assertStatus(200) //show users

})
