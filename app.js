const express = require('express')
const body_parser = require('body-parser')
const app = express();
app.use(body_parser.json)

// routes
app.get('/', (req, res) => {
    res.send("Hello world")
})


//listen
app.listen(80, (err, live) => {
    if(err){
        console.error(err)
    }

    console.log("Server running on port 80")
});