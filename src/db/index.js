import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";
import { app } from "../app.js";

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

        app.on("error", (err)=>{
            console.log(`ERRR: `, err)
        })

        console.log(`\n MongoDB is connected!! DB host: ${connectionInstance.connection.host}`);
    }
    catch( err){
        console.error("mongoDB connection error ", err);
        process.exit(1);
    }
}


export default connectDB;