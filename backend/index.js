const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const app=express()
const userRoute=require("./routes/users")
const pinRoute=require("./routes/pin")
dotenv.config()

app.use(express.json())
const db='mongodb+srv://Shouhardik:SHOUHARDIK@cluster0.nrzqk.mongodb.net/pin?retryWrites=true&w=majority'
mongoose.connect(db,{useNewUrlParser:true}).then(()=>{
    console.log("Mongodb Connected");
})
.catch((err)=>console.log(err));

app.use("/api/users",userRoute)
app.use("/api/pins/",pinRoute)

app.listen(8800,()=>{
    console.log("Connected Server");
})