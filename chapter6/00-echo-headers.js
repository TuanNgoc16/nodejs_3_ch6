const express = require('express');

const app = express()

// configure Handlebars view engine


app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000
app.get('/', (req, res) => res.render('home'))

app.get('/headers', (req, res) => {
    res.type('text/plain')
    const headers = Object.entries(req.headers)
    .map(([key, value]) => `${key}: ${value}`)
    res.send(headers.join('\n'))
   })
   
app.use((req, res) => {
    res.status(404)
    res.render('404')
})
   // custom 500 page
   app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})
   app.listen(port,() => console.log(
    `Express started on http://localhost:${port}:`+
    `press Ctrl-C to terminate`
))