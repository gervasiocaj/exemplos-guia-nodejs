const mongoose = require('mongoose')
const { Aluno } = require('./models')
const config = require('./config')

const nunjucks = require('nunjucks')
const express = require('express')
const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.get('/aluno', function (req, res) {
  Aluno.find({}).select({ _id: true, nome: true })
    .then(a => res.render('lista_alunos.html', { titulo: 'Alunos', alunos: a }))
    .catch(e => res.render('404.html'))
})

app.get('/aluno/:id', function (req, res) {
  Aluno.findById(req.params.id)
    .then(a => res.render('unico_aluno.html', { titulo: 'Aluno', aluno: a }))
    .catch(e => res.render('404.html'))
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