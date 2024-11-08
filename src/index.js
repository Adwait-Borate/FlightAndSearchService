const express=require("express");
const bodyParser=require("body-parser");
const {PORT}=require('./config/serverConfig');
const ApiRoutes=require('./routes/index');
const setupAndStartServer=async()=>{
const db=require('./models/index');
    //create the express object
    const app=express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({"extended":true}));
    app.use('/api', ApiRoutes);                        // api/v1/city
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);

        // Synchronize the database as with we are associating tables with each other
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});
        }
       // console.log(process.env) // remove this after you've confirmed it is working
    });
}

setupAndStartServer();