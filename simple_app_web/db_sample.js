const mongoose = require('mongoose')
const { Aluno } = require('./models')
const config = require('./config')

let joao = new Aluno({ nome: 'João', idade: 14 })

mongoose.connect(config.db_url)
  .then(() => joao.save())
  .then(console.log)
  .catch(console.error)