require('request') // necessário apenas como dependência
const request = require('request-promise') // implementação do request usando promises

let pessoas = ['nome/joao/idade/14', 'nome/maria/idade/16', 'nome/jose/idade/17']
let requisicoes = pessoas
    .map(x => `http://echo.jsontest.com/${x}`)
    .map(request)

Promise.all(requisicoes)
.then(resultado =>
  resultado
    .map(JSON.parse)
    .map(p => { p.idade = parseInt(p.idade); return p })
).then(resultado => {
  let tamanho = resultado.length
  let soma = resultado.reduce((prev, atual) => prev + atual.idade, 0)
  console.log(`Média de idade: ${(soma/tamanho).toPrecision(4)}`)
}).catch(console.error)