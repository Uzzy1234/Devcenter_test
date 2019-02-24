'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CardetailsCartypeSchema extends Schema {
  up () {
    this.create('cartype_cardetail', (table) => {
      table.increments()
      table.integer('cardetail_id').unsigned().notNullable()
        .references('id').inTable('cardetails')
      table.integer('cartype_id').unsigned().notNullable()
        .references('id').inTable('cartypes')

      table.unique(['cardetail_id', 'cartype_id'])
    })
  }

  down () {
    this.drop('cartype_cardetail')
  }
}

module.exports = CardetailsCartypeSchema
