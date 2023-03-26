const express = require('express')
const request = require('request')
const app = express()

// routes
app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/access_token', (req, res) => {
    // access token
    let url: ""
    let auth = new Buffer.from().toString('base64');

    request(
    {
        url: "",
        headers: {
            "Authorization": "Basic " + auth
        }
    },
    (error, response, body) => {
        if(error){
            console.log(error)
        }
        else{
            res.status(200).json(body)
        }
    }
    )
})

//listen
app.listen(80, (err, live) => {
    if(err){
        console.error(err)
    }

    console.log("Server running on port 80")
});