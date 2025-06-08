const express = require('express');
const userModels = require('../models/user.models.js');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const { generateToken }=require("../utils/generateToken.js");
const { registerUser,loginUser } = require('../controllers/authContoller.js');
router.get('/', function (req, res) {
    res.render("index", { error: "" });
});

router.post('/register', registerUser)
router.post("/login",loginUser);
module.exports = router;
