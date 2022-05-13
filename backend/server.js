const express = require('express')
const colors = require('colors')
const products  = require ('./data/products')
const connectDb = require('./config/config')
const dotenv = require('dotenv')

//dotenv congig
dotenv.config()

//connect mongo db
connectDb()
const app = express()

app.get('/', (req,res)=>{
    res.send('<h1>welcome to node server</h1>')
})

app.get('/products', (req,res)=>{
    res.json(products)
})

app.get('/products/:id',(req,res)=>{
    const product = products.find((p)=>p._id === req.params.id)
    res.json(product)
})

app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT }`.inverse.white)
})