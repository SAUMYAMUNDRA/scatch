const userModel = require("../models/user.models");
 const bcrypt = require("bcrypt");
 const jwt = require("jsonwebtoken");
 const { generateToken} = require("../utils/generateToken");

module.exports.registerUser= async function (req, res) {
    try {
        let { email, fullname, password } = req.body;
        let user=await userModel.findOne({email:email})
        if(user) return res.status(401).send("user already have account with same email address plz login")
        
        // password hashing
        bcrypt.genSalt(10, function (err, salt) {
            if (err) return res.send(err.message); // respond on error

            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) return res.send(err.message);
                else{
                // move user creation inside this callback
                let user = await userModel.create({
                    email,
                    fullname,
                    password: hash
                });
                let token=generateToken(user)
                res.cookie("token",token);
                res.send("user created sucesfuly");
            }
        });
        });

    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server error");
    }
};
module.exports.loginUser=async function (req,res) {
        let{email,password}=req.body
        let user=await userModel.findOne({email:email})
        if(!user){
            return res.end("Email or pass incorrect");
        }
        bcrypt.compare(password,user.password,function(err,result){
            if(result){
                let token=generateToken(user)
                res.cookie("token",token)
                res.redirect("/shop");
            }
            else{
                res.send("email or pass incorrect")
            }
        })
    
}
module.exports.logout=function(req,res){
    res.cookie("token","");
    res.redirect("/");
}