const express = require('express')
const app = express()
const cakes = require('./cakes')
//allows us to access js/css/images if in a public directory
app.use(express.static('public'))


app.get('/',(req,res)=> {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/cakes',(req,res)=>{
    res.send(cakes)
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})

