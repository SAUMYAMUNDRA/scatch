const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    isadmin: Boolean,
    picture:String,
    gstin:Number,
})

module.exports=mongoose.model("owner",ownerSchema);


