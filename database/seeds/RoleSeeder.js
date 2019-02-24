'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Role = use('App/Models/Role')

class RoleSeeder {
  async run() {
    const rolesArray = [
      { title: "FRONTEND" }, { title: "BACKEND" }, { title: "UI/UX" }
    ]

    const roles = await Role.createMany(rolesArray)
  }
}

module.exports = RoleSeeder
