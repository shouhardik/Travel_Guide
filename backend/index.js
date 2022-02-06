const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const app=express()

dotenv.config()

mongoose.connect('mongodb://localhost:27017/pin').then(()=>{
    console.log("Mongodb Connected");
})
.catch((err)=>console.log(err));


app.listen(8800,()=>{
    console.log("Connected Server");
})