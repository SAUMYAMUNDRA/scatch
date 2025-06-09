const express =require('express')
const {registerUser,loginUser,logout }=require("../controllers/authContoller.js")
const router=express.Router();

router.get("/",function(req,res){
    res.send("hey");
});
router.post("/register",registerUser)
router.post("/login",loginUser);
router.get("/logout",logout);
module.exports=router;