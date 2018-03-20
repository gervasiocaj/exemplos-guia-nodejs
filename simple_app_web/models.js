const mongoose = require('mongoose')

const alunoModel = mongoose.model('Aluno', {
  nome: { type: String, required: true },
  idade: { type: Number, required: true , min: 0 }
})

module.exports = { Aluno: alunoModel }