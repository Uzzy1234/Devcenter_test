'use strict'
const { validate } = use('Validator')
const User = use('App/Models/User')

class AuthController {
  async login({ request, response, auth }) {
    const { email, password } = await request.all()

    const rules = {
      email: 'required|email',
      password: 'string'
    }

    const validation = await validate(request.all(), rules)

    if (validation.fails()) {
      return response.status(400)
        .send({ status: 'fail', data: validation.messages() })
    }

    if (email && password) {
      try {
        if (await auth.attempt(email, password)) {
          const user = await User.findBy('email', email)
          const roles = await user.roles().fetch()
          const token = await auth.generate(user)
          return response.status(200).json({
            status: 'success',
            data: {
              user: {
                firstName: user.first_name,
                lastName: user.last_name,
                email: user.email,
                roles: roles
              },
              token: token.token,

            }
          })
        }
      } catch (err) {
        return response.status(401).json({
          status: 'error',
          data: {
            message: "Email or password does not match"
          }
        })
      }
    } else {
      return response.status(401).json({
        status: 'error',
        data: {
          message: "Please provide valid credentials"
        }
      })
    }
  }
}

    module.exports = AuthController
