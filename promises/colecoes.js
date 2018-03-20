const request = require('request-promise') // implementação do request usando promises

const loadJSON = url => request(url, { json: true })

let pessoas = ['nome/joao/idade/14', 'nome/maria/idade/16', 'nome/jose/idade/17']
let requisicoes = pessoas
    .map(x => `http://echo.jsontest.com/${x}`)
    .map(loadJSON)

Promise.all(requisicoes)
.then(resultado =>
  resultado
    .map(p => { p.idade = parseInt(p.idade); return p })
).then(resultado => {
  let tamanho = resultado.length
  let soma = resultado.reduce((prev, atual) => prev + atual.idade, 0)
  console.log(`Média de idade: ${(soma/tamanho).toPrecision(4)}`)
}).catch(console.error)