'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('first_name', 50).nullable()
      table.string('last_name', 50).nullable()
      table.string('email').unique().notNullable()
      table.integer('phone_id').unsigned().unique().nullable()
        .references('id').inTable('phones')
      table.string('password').nullable()
      table.enu('gender', ['MALE', 'FEMALE']).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
