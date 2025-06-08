const express =require('express')
const {registerUser,loginUser }=require("../controllers/authContoller.js")
const router=express.Router();
router.get("/",function(req,res){
    res.send("hey");
});
router.post("/register",registerUser)
router.post("/login",loginUser);
module.exports=router;