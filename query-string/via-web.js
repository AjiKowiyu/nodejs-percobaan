const http  = require('http')
const URL   = require('url')
const qs    = require('querystring')
const port  = 3000


let server = http.createServer( function(request, respon) {
    let url_asli        = request.url
    let url_querystring = URL.parse(url_asli).query
    let url_object      = qs.parse( url_querystring )

    respon.writeHead(200, {'Content-Type' : 'text/html'})
    respon.write(
        `<pre>` +
        `url asli           : <b>${url_asli}</b> <br>` +
        `url querystring    : <b>${url_querystring}</b> <br>` +
        `url objek          : <b>${JSON.stringify( url_object )}</b> <br>` +
        `</pre>` +
        `<h1>nama saya adalah ${url_object.nama}, bekerja sebagai ${url_object.pekerjaan}</h1>`
    )
    respon.end()
})


server.listen(port, ()=>{
    console.log(`server sudah on, buka http://localhost:${port}`)
})