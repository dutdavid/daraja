const express = require('express')
const request = require('request')
const app = express()

// routes
app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/access_token', (req, res) => {
    // access token
    request({
        
    })
})

//listen
app.listen(80, (err, live) => {
    if(err){
        console.error(err)
    }

    console.log("Server running on port 80")
});