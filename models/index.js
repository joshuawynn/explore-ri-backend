const mongoose = require('mongoose')
const userSchema = require('./User')
const postSchema = require('./Post')
const todoSchema = require('./Todo')
const destinationSchema = require('./Destination')
const activitySchema = require('./Activity')

const User = mongoose.model('User', userSchema)
const Post = mongoose.model('Post', postSchema)
const Todo = mongoose.model('Todo', todoSchema)
const Destination = mongoose.model('Destination', destinationSchema)
const Activity = mongoose.model('Activity', activitySchema)

module.exports = {
  User,
  Post,
  Todo,
  Destination,
  Activity
}


