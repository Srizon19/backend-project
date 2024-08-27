import dotenv from "dotenv";

import mongoose from "mongoose";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()


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