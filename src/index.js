// require('dotenv').config({path:'./env'})

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


    connectDB()

/*
import { Express } from "express";

const app = express();

(async()=>{
    try{
      await  mongoose.connect(`${process.env.MONGOOSE_URI}/${DB_NAME}`)

      app.on("error",(error)=>{
        console.log("ERR:",error);
        throw error
      })

      app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
      })
      

    }catch(error)
    {
        console.log("Error",error)
        throw err
    }

})()
*/