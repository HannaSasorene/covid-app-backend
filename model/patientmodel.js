const mongoose=require("mongoose")

const patientSchema=new mongoose.Schema(
    {
    patientName:String,
    patientPhone:String,
    patientAddress:String,
    patientSymptom:String,
    patientStatus:String
}
)

module.exports=mongoose.model("patient",patientSchema)