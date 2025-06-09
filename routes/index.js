const express = require('express');
const router = express.Router();
const { registerUser,loginUser } = require('../controllers/authContoller.js');
const isLoggedin = require('../middlewares/isLoggedin.js');
router.get('/', function (req, res) {
    let error=req.flash("error");
    res.render("index", { error: "" });
});
router.get("/shop",isLoggedin,function(req,res){
    res.render("shop");
})
router.post('/register', registerUser)
router.post("/login",loginUser);
module.exports = router;
