const express=require("express")
const patientmodel=require("../model/patientmodel")
const router=express.Router()

router.post("/patient_entry",async(req,res)=>{
    let data=req.body
    let patient=new patientmodel(data)
    let result=await patient.save()
    res.json({
        status:"success"
    })
})

module.exports=router