const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const User=mongoose.model("User")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const {JWT_SECRET}=require('../keys')
const requireLogin=require('../middleware/requiredLogin')

router.get('/',(req,res)=>{
    res.send("heeloo")
})

router.get('/protected',requireLogin,(req,res)=>{
    res.send("hello user")
})

router.post('/signup',(req,res)=>{
const{name,email,password}=req.body
if(!email|| !password|| !name){
       return res.status(422).json({error:"please add all fields"})

    }
    User.findOne({email:email})
    .then((SavedUser)=>{
        if(SavedUser){
            return res.status(422).json({error:"user already exists with that email"})
 
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user=new User({
                email,
                password:hashedpassword,
                name
            })
            user.save()
            .then(user=>{
                res.json({message:"saved succesfully"})
    
            })
            .catch(err=>{
                console.log(err)
            })

        })

    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/signin',(req,res)=>{
    const{email,password}=req.body
    if(!email||!password){
        return res.status(422).json({error:"please add email or password "})
    }
    User.findOne({email:email})
    .then(SavedUser=>{
        if(!SavedUser){
             return res.status(422).json({error:"invalid email or password"})
        }
        bcrypt.compare(password,SavedUser.password)
        .then(doMatch=>{
            if(doMatch){
                // res.json({message:"succesfully signed in"})
                 const token=jwt.sign({_id:SavedUser._id},JWT_SECRET)
                 const {_id,name,email}=SavedUser
                 res.json({token,user:{_id,name,email}})
            
            }
            else{
                return res.status(422).json({error:"invalid email or password"})

            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})



module.exports=router