
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const bcrypt = require("bcrypt")
var cors = require('cors')


dotenv.config()
app.use(express.json()
);
app.use(cors())


app.use("/api/auth", authRoute) // predefining route or initial an route path




mongoose.connect(process.env.MONGO_URL).then(() =>{
    console.log("Mongo DB Connected")
})


app.get("/", (req,res) =>{
    res.send("hello");
})


app.listen(5000,() =>{
    console.log("listening to server")
})




