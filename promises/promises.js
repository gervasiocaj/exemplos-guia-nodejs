const request = require('request-promise') // implementação do request usando promises

const loadJSON = url => request(url, { json: true })

loadJSON('http://date.jsontest.com/')
  .then(body => loadJSON(`http://md5.jsontest.com/?text=${body.date}`))
  .then(body => { console.log(`Data de hoje: ${body.original}`); return body })
  .then(body => { console.log(`Hash md5 da data de hoje: ${body.md5}`) })
  .catch(console.error)