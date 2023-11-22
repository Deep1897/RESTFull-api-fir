const express=require("express");
const mongoose=require("mongoose");

const schemadata= new mongoose.Schema({


    name:{
        type:String,
        required:true,

    },
    age:{
        type:Number,
        required:true,
    },
    email:{
         type:String,
         required:true,
         unique:true
    },
    address:{
        village:{
            type:String

        },
        district:{
            type:String
        },
        pincode:{
             type:Number
        }

    }




})


const Models=new mongoose.model("Restdata",schemadata);
module.exports=Models;