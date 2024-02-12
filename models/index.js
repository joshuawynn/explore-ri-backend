const mongoose = require('mongoose')
const userSchema = require('./User')
const postSchema = require('./Post')
const TodoSchema = require('./Todo')
const ReviewSchema = require('./Review')

const User = mongoose.model('User', userSchema)
const Post = mongoose.model('Post', postSchema)
const Todo = mongoose.model('Todo', TodoSchema)
const Review = mongoose.model('Review', ReviewSchema)


module.exports = {
  User,
  Post,
  Todo,
  Review
}


