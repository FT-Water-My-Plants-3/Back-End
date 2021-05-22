const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const knex = require('knex')
const fileUpload = require('express-fileupload')

const PlantsRouter = require('./plants/plants-router')
const UsersRouter = require('./users/users-router')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())
server.use(fileUpload())

server.use('/api/plants', PlantsRouter)
server.use('/api/users', UsersRouter)

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" })
})

server.post('/upload', async (req, res) => {
    const {name, data} = req.files.pic
    if(name && data) {
      await knex.insert({name, img: data}).into('img')
      res.status(200)
    } else {
      res.status(400).json({
        message: `image not real`
      })
    }
  })
  
  server.get('/img/:id', async (req, res) => {
    const id = req.params.id
    const img = await knex('img').where({id}).first()
    if (img) {
      res.end(img.img)
    } else {
      res.end(`No such image`)
    }
  })

module.exports = server