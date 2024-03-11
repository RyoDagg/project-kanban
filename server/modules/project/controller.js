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
const create= async(req,res)=>{
    try{
        const result=await Project.create(req.body)
        res.status(201).json(result)
    }
    catch(err){
        res.status(404).send(err)
    }
}
const getOneProject = async (req, res) => {
    try {
        const {id}=req.params
      const result = await Project.findByPk(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).send(error);
    }
  };
module.exports={getAll,create,getOneProject}