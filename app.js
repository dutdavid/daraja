const express = require('express')
const body_parser = require('body-parser')
const app = express();
app.use(body_parser.json)

// routes
app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/home', (req, res) => {
    res.send("Hello we're home")
})

//listen
app.listen(8000);