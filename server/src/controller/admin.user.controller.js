import Staff from "../model/staff.model.js"
import User from "../model/user.model.js"
import uploadOnCloudinary from "../utils/cloudinary.js"
import { userCreateMail } from "../utils/mails.js"
import { registerUserType, updatePasswordUserType, updateUserProfileType } from "../utils/Types.js"




const createUser = async(req,res)=>{
    try {

        const {_id} = req.user
        const inputData = req.body

        if (!inputData.firstName || !inputData.email || !inputData.restaurantName || !inputData.restaurantAddress || !inputData.password) {
            return res.status(400).json({
                msg: "All field must be required"
            })
        }

        const payload = registerUserType.safeParse(inputData)

        if (!payload.success) {
            return res.status(400).json({
                msg: "Please enter valid input"
            })
        }

        const admin = await Staff.findById(_id) 

        if(!admin && admin.role !== 'staff' && admin.role !== 'admin'){
            return res.status(422).json({
                msg:"You're not auhorized to complete this task"
            })
        }

        const { email, firstName, lastName, restaurantName, restaurantAddress, gst, password } = payload.data
    
        const staff = await Staff.findOne({ email })

        const exitedUser = await User.findOne({ email })


        if (exitedUser || staff) {
            return res.status(400).json({
                msg: "User already exists",
            });
        }

        const user = await User.create({
            firstName,
            lastName: lastName ? lastName : null,
            email,
            restaurantName,
            restaurantAddress,
            password,
            isEmailVerified:true,
            isPhoneVerified:true,
            createdBy:_id,
            gst:gst ? gst : null
        });

        const response = await userCreateMail(firstName, email , password , process.env.FRONTEND_LOGIN_URL)
        
        if (!response) {
            return res.status(500).json({
                msg: "Failed to send verification email",
            });
        }

        return res.status(200).json({
            msg: "user created successfully"
        })
         
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}

const deleteUser = async(req,res)=>{
    try {
        const {_id} = req.user
        const {id} = req.params

        const admin = await Staff.findById(_id) 

        if(!admin && admin.role !== 'staff' && admin.role !== 'admin'){
            return res.status(422).json({
                msg:"You're not auhorized to complete this task"
            })
        }

        const user = await User.findById(id)

        if(!user){
            return res.status(404).json({
                msg:"User not found"
            })
        }

        await user.deleteOne()

        return res.status(200).json({
            msg:"User deleted successfully"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}


const updateUserPassword = async(req,res) =>{

    try {
        const {_id} = req.user
        const inputData = req.body
        const {id} = req.params

        if(!inputData.newPassword || !inputData.confirmPassword){
            return res.status(400).json({
                msg:"All fields must be required"
            })
        }

        const payload = updatePasswordUserType.safeParse(inputData)

        if(!payload.success){
            return res.status(400).json({
                msg:"please enter valid input"
            })
        }

        const admin = await Staff.findById(_id) 

        if(!admin && admin.role !== 'staff' && admin.role !== 'admin'){
            return res.status(422).json({
                msg:"You're not auhorized to complete this task"
            })
        }

        const { newPassword, confirmPassword } = payload.data;

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                msg: "User not found",
            });
        }

        if (newPassword !== confirmPassword) {
            return res.status(406).json({
                msg: "Confirm password does not match",
            });
        }

        user.password = newPassword;
        user.refreshToken = null;
        await user.save({ validateBeforeSave: false });

        return res.status(200).json({
            msg:"User password updated successfully"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}


const updateUserProfile = async(req,res)=>{
    try {
        const {_id} = req.user
        const inputData = req.body
        const {id} = req.params
        const filePath = req.file ? req.file.path : null

        if(!inputData){
            return res.status(400).json({
                msg:"All fields must be required"
            })
        }

        const payload = updateUserProfileType.safeParse(inputData)

        if (!payload.success) {
            return res.status(400).json({
                msg: "Please enter valid input"
            })
        }

        const staff = await Staff.findById(_id)

        if(!staff || staff.role === 'user'){
            return res.status(422).json({
                msg:"You are not authorized , only staff and admin can do this task."
            })
        }

        const user = await User.findById(id)

        if (!user) {
            return res.status(404).json({
                msg: "user not found"
            })
        }

        const {restaurantName, firstName, lastName, restaurantAddress, gst } = payload.data

        let updatableData = {}

        if (firstName) {
            updatableData.firstName = firstName

        }
        if (lastName) {
            updatableData.lastName = lastName

        }
        if(restaurantName){
            updatableData.restaurantName = restaurantName

        }
        if (restaurantAddress) {
            updatableData.restaurantAddress = restaurantAddress
            
        }
        if (gst) {
            updatableData.GST = gst.toUpperCase()

        }if(filePath){
            const image = await uploadOnCloudinary(filePath)
            if(!image){
                return res.status(500).json({
                    msg:"Image uploadation failed"
                })
            }
            
            updatableData.avatar = image.url
        }

        await user.updateOne(updatableData)

        return res.status(200).json({
            msg: "Profile updated successfully"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}



export {
    createUser,
    deleteUser,
    updateUserPassword,
    updateUserProfile
}