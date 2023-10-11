// Jeg importerer først express
const express = require('express')
// nedenfor løser jeg cors fejlen ved at tillade alle at tilgå serveren
const cors = require('cors')
const { get } = require('http')
const { send } = require('process')
// jeg definerer porten og app til at bruge express
const app = express()
const port = 8080

app.use(cors())
// Jeg laver et JSON objekt der holder på dyrene
    // jeg lytter efter porten 8080 der er defineret tidligere
app.listen(port)
// Jeg laver en get request der viser at at serveren virker
app.get('/', function(req,res){
    console.log("Server is listening on port 8080")
    res.send('Server is listening on port 8080')
    
})