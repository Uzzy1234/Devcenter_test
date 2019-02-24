'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserRoleSchema extends Schema {
  up () {
    this.create('role_user', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable()
        .references('id').inTable('users')
      table.integer('role_id').unsigned().notNullable()
        .references('id').inTable('roles')

      table.unique(['user_id', 'role_id'])
    })
  }

  down () {
    this.drop('role_user')
  }
}

module.exports = UserRoleSchema
