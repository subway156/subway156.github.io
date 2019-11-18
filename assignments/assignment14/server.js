const Joi = require('joi')
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('public'))

const cars = [
    {id:1, name:"Ford Fiesta", hp:"150", price:'15000'},
    {id:2, name:"Dodge Charger", hp:"400", price:'30000'},
    {id:3, name:"Toyota Corolla", hp:"200", price:'18000'},
    {id:4, name:"Mclaren 620s", hp:"750", price:'240000'}
]

app.get('/api/cars',(req,res)=>{
    res.send(cars)
})

app.get('/api/cars/:id',(req,res)=>{
    const requestID = parseInt(req.params.id)
    const car = cars.find(s=>s.id === requestID)

    if(!car){
        res.status(404).send(`The car with id ${car.id} was not found`)
        return
    }

    res.send(car)
})
//render html page
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/api/cars', (req,res)=>{
    const car ={
        id : cars.length +1,
        singer : req.body.name,
        genre: req.body.genre
    }

    cars.push(car)
    res.send(car)
})
//listen 
const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})