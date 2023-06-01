const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/usermodel");

const userRouter = express.Router();

userRouter.post("/register",async(req,res)=>{
    const {name,email,password,address} = req.body;
  
    try {
        bcrypt.hash(password,8,function(err,hash){
         const   hashedPassword = hash
         const user = new UserModel({name,email,hashedPassword,address});
     
        })
        await user.save(); 
        res.send("Registered Successfully");
    
       
    } catch (error) {
        console.log(error)
        res.send("Something went wrong")
    }
    
})

userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body;

    try {
        const user = await UserModel.find({email});
        console.log(user)
        if(user.length>0){
            const hash = user.password
            bcrypt.compare(password,hash,function(err,result){
                if(result){
                    res.send("logged in successfully")
                }else{
                    console.log(err)
                    res.send("Wrong Password")
                }

            })
        }else{
            res.send("Please login first")
        }
    } catch (error) {
        console.log(error);
        res.send("Something went wrong")
    }
})

module.exports={userRouter}