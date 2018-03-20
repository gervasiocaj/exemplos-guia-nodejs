const { Worker } = require('webworker-threads')

// usando com um arquivo secundário
// let w = new Worker('./fibonacci.js')

// usando com uma função
let w = new Worker(function () {
  function fibonacci (n) {
    return n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2)
  }
  this.onmessage = function (event) {
    if (event.data === 'kill') self.close()
    else postMessage(fibonacci(event.data))
  }
})

w.onmessage = event => console.log(event.data)
w.postMessage(10)
w.postMessage(15)
w.postMessage('kill')