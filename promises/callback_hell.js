const request = require('request')
request('http://date.jsontest.com/', function (err, res) {
  if (err) console.error(err)
  else {
    let body = JSON.parse(res.body)
    request(`http://md5.jsontest.com/?text=${body.date}`, function (err, res) {
      if (err) console.error(err)
      else {
        let body = JSON.parse(res.body)
        console.log(`Data de hoje: ${body.original}`)
        console.log(`Hash md5 da data de hoje: ${body.md5}`)
      }
    })
  }
})