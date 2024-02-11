const mongoose = require('mongoose')
const userSchema = require('./User')
const postSchema = require('./Post')
const todoSchema = require('./Todo')
const ReviewSchema = require('./Review')

const User = mongoose.model('User', userSchema)
const Post = mongoose.model('Post', postSchema)
const Todo = mongoose.model('Todo', todoSchema)
const Review = mongoose.model('Review', todoSchema)


module.exports = {
  User,
  Post,
  Todo,
  Review
}


