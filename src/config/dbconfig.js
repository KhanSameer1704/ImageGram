// server -> ODM Library -> query of database
// most famous ODM library is mongoose..

import mongoose from 'mongoose';
import { DB_URL } from "./serverconfig.js";

export default async function connectDB(){
    try {
        await mongoose.connect(DB_URL);
        console.log("connected succesfully");
        
    } catch (error) {
        console.log("something went wrong",error);
        
    }
}