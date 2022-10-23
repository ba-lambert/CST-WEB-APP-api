const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const userRoutes = require("./routes/userRoutes") 
const blogRoutes = require("./routes/blogRoutes") 
const app = express()
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true});

//middleware
app.use(cors())
app.use(express.json())

app.use("/api/user",userRoutes)
app.use("/",blogRoutes)
app.listen(4000,()=>{
    console.log("Sever have been started")
})