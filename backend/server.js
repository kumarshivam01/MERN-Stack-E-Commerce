const express = require('express')
const colors = require('colors')
const products  = require ('./data/products')
const connectDb = require('./config/config')
const dotenv = require('dotenv')
const productRoute = require('./routes/productRoute')
const errorHandler = require('./middlewares/errorMiddleware')
//dotenv congig
dotenv.config() 

//connect mongo db
connectDb()
const app = express()
  
app.get('/', (req,res)=>{
    res.send('<h1>welcome to node server</h1>')
})
   
app.use('/api/',productRoute) 
app.use(errorHandler) 

app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT }`.inverse.white)
})  