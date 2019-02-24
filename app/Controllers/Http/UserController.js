'use strict'

const User = use('App/Models/User')

class UserController {
  async index({ response }) {

    const users = await User.query().with('roles').fetch();

    return response.status(200).json({
      status: "success",
      data: {
        users
      }
    })
  }
}

module.exports = UserController
