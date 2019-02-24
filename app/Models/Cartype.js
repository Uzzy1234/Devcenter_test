'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cartype extends Model {
  static get hidden() {
    return ['created_at', 'updated_at']
  }
  cardetails() {
    return this.belongsToMany('App/Models/Cardetail').pivotTable('cartype_cardetails')
  }
}


module.exports = Cartype
