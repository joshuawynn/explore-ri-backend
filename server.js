const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const AuthRouter = require('./routes/AuthRouter')
const PostRouter = require('./routes/PostRouter')
const TodosRouter = require('./routes/Todos')
const ReviewsRouter = require('./routes/Reviews')


const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', AuthRouter)
app.use('/posts', PostRouter)
app.use('/todos', TodosRouter)
app.use('/reviews', ReviewsRouter)


app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})