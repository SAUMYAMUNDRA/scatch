const express =require('express')
const ownerModel=require("../models/owner.models.js")
const router=express.Router();
router.get("/admin",function(req,res){
    res.render("createproducts");
});

if(process.env.NODE_ENV==="development"){
    router.post("/create",async function(req,res){
    let owners= await ownerModel.find();
    if(owners.length>0) return res.send(503,"you don't have permisiion to create a new owner");
    let {fullname,email,password}=req.body;
    let createdOwner=await ownerModel.create({
    fullname,
    email,
    password
    
        }    )

    res.status(201,createdOwner);

});
    
}


module.exports=router;