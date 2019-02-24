'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cardetail extends Model {
  cartypes() {
    return this.belongsToMany('App/Models/Cartype')
  }
}

module.exports = Cardetail
