const http = require('http')

let server = http.createServer((req, res) => {
    console.log('tes nyalain server')
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('Hello World!<hr><hr>')
})

server.listen(3000, ()=>{
    console.log('server sudah siap jalan')
})