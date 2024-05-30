// import mongoose from "mongoose"
// import { DB_NAME } from './constants'
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js";

// require("dotenv").config()

dotenv.config({ 
    path:'./.env' 
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at PORT:${process.env.PORT}`);
        
    })
})
.catch((error)=>{
        console.log("MongoDB conection failed !!!",error);     
})




// import express from "express";
// const app = express();
// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on('error', (err) => {
//             console.log('Error connecting to database: ', err);
//             throw err;
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`listeninng  on port ${process.env.PORT}`);
            
//         })
//     } catch (error) {
//         console.log("Error connecting to the database: ", error);
//         throw error;
//     }
// })()
