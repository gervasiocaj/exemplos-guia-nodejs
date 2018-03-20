const request = require('request')

const loadJSON = (url, cb) => request(url, { json: true }, cb)

loadJSON('http://date.jsontest.com/', function (err, res) {
  if (err) console.error(err)
  else {
    loadJSON(`http://md5.jsontest.com/?text=${res.body.date}`, function(err, res){
      if (err) console.error(err)
      else {
        console.log(`Data de hoje: ${res.body.original}`)
        console.log(`Hash md5 da data de hoje: ${res.body.md5}`)
      }
    })
  }
})