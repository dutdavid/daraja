const express = require('express')
const app = express();

// routes
app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/home', (req, res) => {
    res.send("Hello we're home")
})

//listen