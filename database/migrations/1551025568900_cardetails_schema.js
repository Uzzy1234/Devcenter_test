'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CardetailsSchema extends Schema {
  up () {
    this.create('cardetails', (table) => {
      table.increments()
      table.string('car_name', 50).nullable()
      table.string('car_colour', 50).nullable()
      table.string('car_driver').unique().notNullable()
      table.enu('driver_gender', ['MALE', 'FEMALE']).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cardetails')
  }
}

module.exports = CardetailsSchema
