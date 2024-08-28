import dotenv from "dotenv";

import mongoose from "mongoose";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})


connectDB()
.then(()=>{
    
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`server is running at port: ${process.env.PORT}`)
    })
})
.catch((err)=> {
    console.log("mongo DB connection fails")
})


//  import express from "express";
// const app = express();


//ifie to connect DB

// (async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//         app.on("error", (err)=>{
//             console.log(`ERRR: `, err)
//         })

//         app.listen(process.env.port, () => {
//             console.log(`app listening on the port ${process.env.PORT}`)
//         })
//     }
//     catch (error){
//         console.error("ERROR: ", error)
//     }
// })()