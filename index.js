
const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

const app = express()
mongoose.connect(process.env.MONGO_URL).then(() =>{
    console.log("Mongo DB Connected")
})


app.get("/", (req,res) =>{
    res.send("hello");
})


app.listen(5000,() =>{
    console.log("listening to server")
})




