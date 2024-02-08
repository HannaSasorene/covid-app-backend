const cors=require("cors")
const express=require("express")
const mongoose=require("mongoose")
const patientrouter=require("./controller/patientrouter")
const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://hanna1234:hanna1234@cluster0.upyigfj.mongodb.net/patientDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/patient",patientrouter)

app.listen(3001,()=>{
    console.log("Server is running")
})
