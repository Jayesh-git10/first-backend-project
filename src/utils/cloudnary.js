import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
import { loadEnvFile } from "process";

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRETE 
});

const uploadOnCloud = async (localFilePath)=>{
    try {
        if(!localFilePath) return null;
        const response=await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        //if file has been uploaded 
        console.log("File has been uploaded successfully on cloud",response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null;
    }
}

export {uploadOnCloud}