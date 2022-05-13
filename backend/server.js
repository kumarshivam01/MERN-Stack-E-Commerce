const express = require('express')
const product = require ('./data/products')
const app = express()

app.get('/', (req,res)=>{
    res.send('<h1>welcome to node server</h1>')
})

app.get('/products', (req,res)=>{
    res.json(product)
})

app.get('/products/:id',(req,res)=>{
    const product = product.find((p)=>p.id === req.params.id)
    res.json(product)
})

app.listen(8080,()=>{
    console.log("server running on port 8080")
})