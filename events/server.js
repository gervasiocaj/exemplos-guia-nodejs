const VERDE = '\x1b[32m%s\x1b[0m'
const MAGENTA = '\x1b[35m%s\x1b[0m'

const { EventEmitter } = require('events')
let grupo = new EventEmitter()

grupo.on('maria', msg => console.log(VERDE, msg))
grupo.on('joao', msg => console.log(MAGENTA, msg))

grupo.emit('maria', 'boa noite')
grupo.emit('joao', 'até amanhã')