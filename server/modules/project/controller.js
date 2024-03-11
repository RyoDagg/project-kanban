const express=require("express")
const Project=require("./model")
const getAll= async (req,res)=>{
    try{
        const result=await Project.findAll()
        res.status(200).json(result)
    }
    catch(err){
res.status(404).send(err)
    }
}
module.exports={getAll}