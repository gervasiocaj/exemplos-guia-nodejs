require('request') // necessário apenas como dependência
const request = require('request-promise') // implementação do request usando promises

request('http://date.jsontest.com/')
  .then(JSON.parse)
  .then(body => request(`http://md5.jsontest.com/?text=${body.date}`))
  .then(JSON.parse)
  .then(body => { console.log(`Data de hoje: ${body.original}`); return body })
  .then(body => { console.log(`Hash md5 da data de hoje: ${body.md5}`) })
  .catch(console.error)