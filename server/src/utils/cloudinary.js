import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View Credentials' below to copy your API secret
});

async function uploadOnCloudinary(filePath) {
    try {
        // Upload an image
        const uploadResult = await cloudinary.uploader.upload(filePath, {
            resource_type: "auto"
        })

        if(!uploadResult){
            console.log("error file uploadation on cloudinary")
        }

        fs.unlinkSync(filePath)

        return uploadResult

    } catch (error) {
        console.log(error)
        fs.unlinkSync(filePath)
    }
}


export default uploadOnCloudinary