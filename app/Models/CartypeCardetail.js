'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CartypeCardetail extends Model {
  static get table() {
    return 'cartype_cardetails'
  }
  cartypes() {
    return this.belongsToMany('App/Models/Cartype')
  }
  cardetails() {
    return this.belongsToMany('App/Models/Cardetail')
  }
}

module.exports = CartypeCardetail
