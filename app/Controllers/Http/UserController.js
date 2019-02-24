'use strict'

const User = use('App/Models/User')
const Phone = use('App/Models/Phone')
const Role = use('App/Models/Role')
const { validate } = use('Validator')

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

  async store({ request, response }) {
    const { email, firstName, lastName, password, gender, phoneNumber, phoneCode, role } = request.all()

    const rules = {
      email: 'required|email|unique:users,email',
      firstName: 'required|string',
      lastName: 'required|string',
      password: 'string',
      role: 'required|in:FRONTEND,BACKEND,UI/UX',
      gender: 'string|in:MALE,FEMALE',
      phoneNumber: 'string',
      phoneCode: 'string'
    }

    const validation = await validate(request.all(), rules)

    if (validation.fails()) {
      return response.status(400).send({ status: 'fail', data: validation.messages() })
    }

    if (phoneNumber) {
      var phone = new Phone()
      phone.number = phoneNumber
      phone.code = phoneCode
      await phone.save()
    }

    const user = new User()
    user.first_name = firstName
    user.last_name = lastName
    user.email = email
    user.password = password
    user.phone_id = phoneNumber ? phone.id : null
    user.gender = gender
    await user.save()

    if (role === "FRONTEND") {

      //get frontend role
      const roles = await Role.findBy('title', 'FRONTEND')

      //save role for the user
      await user.roles().attach([roles.id])
      return response.status(201).send({
        status: 'success',
        data: {
          user
        }
      })
    }
    if (role === "BACKEND") {

      //get backend role
      const roles = await Role.findBy('title', 'BACKEND')

      //save role for the user
      await user.roles().attach([roles.id])
      return response.status(201).send({
        status: 'success',
        data: {
          user
        }
      })

    }

    if (role === "UI/UX") {

      //get ui/ux role
      const roles = await Role.findBy('title', 'UI/UX')

      //save role for the user
      await user.roles().attach([roles.id])
      return response.status(201).send({
        status: 'success',
        data: {
          user
        }
      })

    }
  }

  async show({ params, response }) {

    const user = await User.find(params.id)
    user.roles = await user.roles().fetch()
    return response.status(200).json({
      status: "success",
      data: {
        user
      }
    })
  }

  async update({ params, request, response }) {

    try {
      const user = await User.findOrFail(params.id)

      const {
        firstName = user.first_name,
        lastName = user.last_name,
        gender = user.gender,
      } = request.all()

      user.first_name = firstName
      user.last_name = lastName
      user.gender = gender
      await user.save()
      return response.status(200).json({
        status: "success",
        data: {
          user
        }
      })
    } catch (err) {

      return response.status(400).json({
        status: "fail",
        data: {
          error: "User does not exist"
        }
      })
    }
  }

  async destroy({ params, response }) {
    const user = await User.find(params.id)
    user.roles = await user.roles().fetch()
    await user.roles().detach()
    await user.delete()
    return response.status(200).json({
      status: "success",
      data: {
        user
      }
    })
  }

}

module.exports = UserController
