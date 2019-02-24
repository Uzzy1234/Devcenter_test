'use strict'

/*
|--------------------------------------------------------------------------
| CartypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Cartype = use('App/Models/Cartype')

class CartypeSeeder {
  async run() {
    const rolesArray = [
      { title: "CAR" }, { title: "TRUCK" }, { title: "BUS" }
    ]

    const cartypes = await Cartype.createMany(rolesArray)
  }
}

module.exports = CartypeSeeder
