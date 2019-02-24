'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CartypeSchema extends Schema {
  up () {
    this.create('cartypes', (table) => {
      table.increments()
      table.string('title', 255).unique().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cartypes')
  }
}

module.exports = CartypeSchema
