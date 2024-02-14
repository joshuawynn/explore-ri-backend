const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
    try {
      // Extracts the necessary fields from the request body
      const { email, password } = req.body
      // Finds a user by a particular field (in this case, email)
      const user = await User.findOne({ email })
      // Checks if the password matches the stored digest
      let matched = await middleware.comparePassword(
        user.passwordDigest,
        password
      )
      // If they match, constructs a payload object of values we want on the front end
      if (matched) {
        let payload = {
          id: user.id,
          email: user.email
        }
        // Creates our JWT and packages it with our payload to send as a response
        let token = middleware.createToken(payload)
        return res.send({ user: payload, token })
      }
      res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    } catch (error) {
      console.log(error)
      res.status(401).send({ status: 'Error', msg: 'An error has occurred!' })
    }
  }

const Register = async (req, res) => {
    try {
      // Extracts the necessary fields from the request body
      const { email, password, name } = req.body
      // Hashes the provided password
      let passwordDigest = await middleware.hashPassword(password)
      // Checks if there has already been a user registered with that email
      let existingUser = await User.findOne({ email })
      if (existingUser) {
        return res.status(400).send("A user with that email has already been registered!")
      } else {
        // Creates a new user
        const user = await User.create({ name, email, passwordDigest })
        // Sends the user as a response
        res.send(user)
      }
    } catch (error) {
      throw error
    }
  }

  const UpdatePassword = async (req, res) => {
    try {
      const { email, newPassword, confirmPassword } = req.body;
  
      // Ensures the new password and confirmation match
      if (newPassword !== confirmPassword) {
        return res.status(400).send({ status: 'Error', msg: 'New passwords do not match!' });
      }
  
       const user = await User.findOne({ email });
      // console.log(user.passwordDigest, currentPassword)
      // // Verifies current password
      // const isMatch = await middleware.comparePassword(user.passwordDigest, currentPassword);
      // if (!isMatch) {
      //   return res.status(401).send({ status: 'Error', msg: 'Current password is incorrect!' });
      // }
  
      // Hashes and updates the new password
      const newPasswordDigest = await middleware.hashPassword(newPassword);
      user.passwordDigest = newPasswordDigest;
      await user.save();
  
      res.send({ status: 'Success', msg: 'Password updated successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: 'Error', msg: 'An error occurred while updating the password.' });
    }
  };
  
  module.exports = {
    Login,
    Register,
    UpdatePassword 
  };
  