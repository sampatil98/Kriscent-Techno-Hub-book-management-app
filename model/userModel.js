const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    "firstname":{type:String,require:true},
    "lastname":{type:String,require:true},
    "email":{type:String,require:true},
    "password":{type:String,require:true},
    "phone":{type:Number,require:true},
    "role": {type:String,enum:['Admin','Author','Reader'],required:true}
});

const UserModel=mongoose.model("userData",userSchema);

module.exports={UserModel};