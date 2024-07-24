const bcrypt = require('bcrypt');
const {UserModel} = require('../model/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.createNewUser = async function (body) {
    const {password,email}=body;
    
    console.log("inside createNewUser service");
    console.log("password",password,"email",email);
   
    try{
        
        const user= await UserModel.findOne({email});
        if(user){
            console.log("inside if");
   
            return {
                message: 'failed',
                error: false,
                errorMessage: "User already exist please login",
                statusCode: 400,
                data: {}
            };
        }else{

            const hashedPassword = await bcrypt.hash(password, 10);
            let newUser = new UserModel({ ...body, password: hashedPassword });
            newUser = await newUser.save();

            console.log("User created successfully:", newUser);

            return {
                message: 'Success',
                error: false,
                errorMessage: "User created successfully",
                statusCode: 201,
                data: newUser
            };
        }
    }catch(err){
        return {
            message: 'Failed',
            error: true,
            errorMessage: err.message,
            statusCode: 400,
            data: {}
        };
    }
}

exports.loginUser = async function (body) {
    const {password,email}=body;
    
    console.log("inside createNewUser service");
    // console.log("password",password,"email",email);
   
    try{
        
        const user= await UserModel.findOne({email});
        if(user){
            let checkPassword = await bcrypt.compare(password,user.password);
            console.log("checkPassword",checkPassword);
            if(checkPassword){
                const token= jwt.sign({userId:user["_id"],username:user.firstname+" "+user.lastname,role: user.role},process.env.secretKey,{ expiresIn: '10M' });
                return {
                    message: 'Success',
                    error: false,
                    errorMessage: '',
                    statusCode: 200,
                    data: {
                        msg :'login successful',
                        token
                    }
                };
            }else{
                return {
                    message: 'Success',
                    error: false,
                    errorMessage: 'wrong Password',
                    statusCode: 200,
                    data: {}
                };
            }
        }else{
            return {
                message: 'Failed',
                error: false,
                errorMessage: 'User not found please register first',
                statusCode: 400,
                data: {}
            };
        }
    }catch(err){
        return {
            message: 'Failed',
            error: true,
            errorMessage: err.message,
            statusCode: 400,
            data: {}
        };
    }
}