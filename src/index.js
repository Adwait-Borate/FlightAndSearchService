const express=require("express");
require('dotenv').config()

const PORT=require('./config/serverConfig');
const setupAndStartServer=async()=>{
    //create the express object
    const app=express();
    const PORT=3000;

    app.listen(3000,()=>{
        console.log(`Server started at ${PORT}`);
       // console.log(process.env) // remove this after you've confirmed it is working
    });
}

setupAndStartServer();