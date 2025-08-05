import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async() =>{
    try {
        const connnectionInstance = await mongoose.connect(`${process.env.MONGDB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB HOST ${connnectionInstance.connection.host}`)
        //console.log(connnectionInstance)
    } catch (error) {
        console.log("ERROR : mongodb connection failed ",error);
        process.exit(1);
    }
}

export default connectDB; 