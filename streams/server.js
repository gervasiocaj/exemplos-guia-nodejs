const fs = require('fs-extra')
const express = require('express')
const app = express()

app.get('/v1', function (req, res) {
	fs.readFile('./backup.txt').then(file => res.send(file))
})

app.get('/v2', function (req, res) {
	fs.createReadStream('./backup.txt').pipe(res)
})

app.listen(8000)