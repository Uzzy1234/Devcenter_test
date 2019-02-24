'use strict'
const Car = use('App/Models/Cardetail')

class CarController {
  async index({ response }) {

    const cars = await Car.query().with('cartypes').fetch();

    return response.status(200).json({
      status: "success",
      data: {
        cars
      }
    })
  }
}

module.exports = CarController
