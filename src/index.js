const express=require("express");
const bodyParser=require("body-parser");
//const {router}=require('./routes');
const {PORT}=require('./config/serverConfig');
const setupAndStartServer=async()=>{

    //create the express object
    const app=express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({"extended":true}));
   // app.use('/', router);
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
       // console.log(process.env) // remove this after you've confirmed it is working
    });
}

setupAndStartServer();