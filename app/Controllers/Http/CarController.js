'use strict'
const Car = use('App/Models/Cardetail')
const Cartype = use('App/Models/Cartype')
const { validate } = use('Validator')

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

  async store({ request, response }) {
    const { driverName, carName, carColour, driverGender, carType } = request.all()

    const rules = {
      driverName: 'required|string',
      carColour: 'required|string',
      carName: 'string',
      carType: 'required|in:CAR,TRUCK,BUS',
      driverGender: 'string|in:MALE,FEMALE'
    }

    const validation = await validate(request.all(), rules)

    if (validation.fails()) {
      return response.status(400).send({ status: 'fail', data: validation.messages() })
    }

    const car = new Car()
    car.car_name = carName
    car.car_colour = carColour
    car.car_driver = driverName
    car.driver_gender = driverGender
    await car.save()

    if (carType === "CAR") {

      //get frontend role
      const cartypes = await Cartype.findBy('title', 'CAR')

      //save role for the user
      await car.cartypes().attach([cartypes.id])
      return response.status(201).send({
        status: 'success',
        data: {
          car
        }
      })
    }
    if (carType === "TRUCK") {

      //get backend role
      const cartypes = await Cartype.findBy('title', 'TRUCK')

      //save role for the user
      await car.cartypes().attach([cartypes.id])
      return response.status(201).send({
        status: 'success',
        data: {
          car
        }
      })

    }

    if (carType === "BUS") {

      //get ui/ux role
      const cartypes = await Cartype.findBy('title', 'BUS')

      //save role for the user
      await car.cartypes().attach([cartypes.id])
      return response.status(201).send({
        status: 'success',
        data: {
          car
        }
      })

    }
  }

  async show({ params, response }) {

    const car = await Car.find(params.id)
    car.cartypes = await car.cartypes().fetch()
    return response.status(200).json({
      status: "success",
      data: {
        car
      }
    })
  }
}

module.exports = CarController
