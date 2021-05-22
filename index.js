require('dotenv').config();

const path = require('path')
const express = require('express')
const fileUpload = require('express-fileupload')

const server = require('./api/server');
const { default: knex } = require('knex');

const PORT = process.env.PORT || 5000;

server.use(fileUpload())

server.use(express.static(path.join(__dirname, 'client/dist')))

server.get('*', (req, res) => {
    // if you want to serve a SPA using Express you totally can!
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'))
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

server.listen(PORT, () => console.log(`\n** server up on port ${PORT} **\n`));