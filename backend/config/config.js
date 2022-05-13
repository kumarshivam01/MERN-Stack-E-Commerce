const mongoose = require('mongoose')
require('colors')
const connectDb = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("mongoDb connect sucessfully".inverse.green)
    } catch (error) {
        console.log({message:error.message})   
    }
}

module.exports = connectDb