const fs = require('fs')
let arquivo = './dados.json'

fs.readFile(arquivo, leuArquivo)

function leuArquivo (err, data) {
  if (err) console.error('Falha ao ler o arquivo:', err)
  
  try {
    data = JSON.parse(data)
  } catch (e) {
    data = {}
  }
  
  if (!data.pessoas) data.pessoas = []
  data.pessoas.push('joao')
  fs.writeFile(arquivo, JSON.stringify(data), salvouArquivo)
}

function salvouArquivo (err) {
  if (err) console.error('Falha ao salvar o arquivo:', err)
  else console.log('Sucesso :D')
}