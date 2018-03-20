const mongoose = require('mongoose')
const { Aluno } = require('./models')
const config = require('./config')

const express = require('express')
const app = express()

app.get('/api/v1/aluno', function (req, res) {
  Aluno.find({}).select({ _id: true, nome: true })
    .then(a => res.status(200).json(a))
    .catch(e => res.status(500).end())
})

app.get('/api/v1/aluno/:id', function (req, res) {
  Aluno.findById(req.params.id)
    .then(a => res.status(200).json(a))
    .catch(e => res.status(404).end())
})

const listen = new Promise(function(resolve, reject) {
  app.listen(8000)
    .on('listening', resolve)
    .on('error', reject)
})

mongoose.connect(config.db_url)
  .then(listen)
  .then(() => console.log("Servidor online!"))
  .catch(console.error)