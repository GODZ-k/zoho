import { client, Transporter } from "../app.js";
import User from "../model/user.model.js"
import { loginUsertype, registerUserType, updateUserPasswordType, updateUserPhoneType, updateUserProfileType, userForgotPasswordType, userResetPasswordType, verifyUserPhoneType } from "../utils/Types.js"
import { generateAccessAndRefreshToken, generatedOtp, generateVerificationToken } from "../utils/utils.js";
import Staff from "../model/staff.model.js";
import Subscription from "../model/subscription.model.js";
import cron from 'node-cron'
import { userForgotPasswordMail, verifyUserMail } from "../utils/mails.js";
import Payment from "../model/payment.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";






const registerUser = async (req, res) => {
    try {

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

        const { email, firstName, lastName, restaurantName, restaurantAddress, gst, password } = payload.data

        const staff = await Staff.findOne({ email })


        const exitedUser = await User.findOne({ email })

        if (exitedUser || staff) {
            return res.status(400).json({
                msg: "User already exists",
            });
        }

        const verificationToken = generateVerificationToken(40);

        const verificationLink = `${process.env.DOMAIN}/user/verify?token=${verificationToken}`;

        const response = await verifyUserMail(email, verificationLink)

        if (!response) {
            return res.status(500).json({
                msg: "Failed to send verification email",
            });
        }

        await User.create({
            firstName,
            lastName: lastName ? lastName : null,
            email,
            restaurantName,
            restaurantAddress,
            password,
            GST: gst ? gst : null,
            verificationToken,
        });

        return res.status(200).json({
            msg: "user created successfully"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}



// delete unverified user - after 24h -------------------------------------
cron.schedule('0 0 * * *', async () => {
    try {
        const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
        await User.deleteMany({ isEmailVerified: false, createdAt: { $lte: twentyFourHoursAgo } });
        console.log('Unverified users deleted');
    } catch (error) {
        console.error('Error deleting unverified users:', error);
    }
});



const verifyUser = async (req, res) => {
    try {
        const token = req.query.token;

        if (!token) {
            return res.status(400).json({
                msg: "Invalid request",
            });
        }

        // find user who have same token
        const user = await User.findOne({ verificationToken: token });

        if (!user) {
            return res.status(422).json({
                msg: "Invalid token or token expired",
            });
        }

        await user.updateOne({
            isEmailVerified: true,
            $unset: {
                verificationToken: 1,
            },
        });

        return res.status(200).json({
            msg: "User Email verified successfully or customer created successfully ",
        });



    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Internal server error"
        })
    }

};



const loginUser = async (req, res) => {
    try {

        const inputData = req.body

        if (!inputData.email || !inputData.password) {
            return res.status(400).json({
                msg: "All fields must be required"
            })
        }

        const payload = loginUsertype.safeParse(inputData)

        if (!payload.success) {
            return res.status(406).json({
                msg: "Please enter valid input"
            })
        }

        const { email, password } = payload.data

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({
                msg: "User not exists"
            })
        }

        if (user.isEmailVerified !== true) {
            return res.status(400).json({
                msg: "Please verify your account"
            })
        }

        const checkPassword = await user.isPasswordCorrect(password)

        if (!checkPassword) {
            return res.status(422).json({
                msg: "Invalid password"
            })
        }

        const subscription = await Subscription.findOne({ userId: user })

        if (subscription) {
            const isTrialExpired = subscription.endDate > new Date().getTime()

            if (isTrialExpired) {
                subscription.hasTrial = false
                subscription.status = 'expired'
                subscription.planType = 'none'
                await subscription.save()

            }
        }

        const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id, User)

        const options = {
            httpOnly: true,
            path: "/"
        }

        return res
            .cookie('accessToken', accessToken, options)
            .cookie('refreshToken', refreshToken, options)
            .status(200).json({
                msg: "user loggedin successfully",
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    avatar: user.avatar,
                    restaurantName: user.restaurantName,
                    restaurantAddress: user.restaurantAddress,
                    isEmailVerified: user.isEmailVerified,
                    isPhoneVerified: user.isPhoneVerified,
                    GST: user.GST,
                    paymentHistory: user.paymentHistory,
                    phone: user.phone,
                    subscription:user.subscription

                }
            })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}


const logoutUser = async (req, res) => {
    try {

        const { _id } = req.user

        const user = await User.findById(_id)

        if (!user) {
            return res.status(422).json({
                msg: "Unauthorized access"
            })
        }

        await user.updateOne({
            $unset: {
                refreshToken: 1
            }
        })

        const options = {
            httpOnly: true,
            secure: true
        }

        return res.status(200)
            .clearCookie('accessToken', options)
            .clearCookie('refreshToken', options)
            .status(200).json({
                msg: "user logged out successfully"
            })
    } catch (error) {
        return res.status(500).json({
            msg: "internal server error"
        })
    }
}


const getprofile = async (req, res) => {
    try {
        const { _id } = req.user

        const user = await User.findById(_id).select('-password -refreshToken')

        if (!user) {
            return res.status(422).json({
                msg: "Unauthorized access"
            })
        }

        return res.status(200).json({
            user,
            msg: "User profile fetched successfully"
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}


const updatePassword = async (req, res) => {
    try {
        const { _id } = req.user;
        const inputData = req.body;

        if (!inputData.oldPassword || !inputData.newPassword || !inputData.confirmPassword) {
            return res.status(400).json({
                msg: "All fields are required",
            });
        }

        const parsePayLoad = updateUserPasswordType.safeParse(inputData);

        if (!parsePayLoad.success) {
            return res.status(406).json({
                msg: "Please enter valid input",
            });
        }

        const { oldPassword, newPassword, confirmPassword } = parsePayLoad.data;

        const user = await User.findById(_id);

        if (!user) {
            return res.status(404).json({
                msg: "User not found",
            });
        }

        const currentPassword = await user.isPasswordCorrect(oldPassword);

        if (!currentPassword) {
            return res.status(422).json({
                msg: "Old password does not match",
            });
        }

        if (oldPassword === newPassword) {
            return res.status(406).json({
                msg: "You can not use old password as new password",
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

        const Options = {
            httpOnly: true,
            secure: true,
        };

        return res
            .status(200)
            .clearCookie("accessToken", Options)
            .clearCookie("refreshToken", Options)
            .json({
                msg: 'Password updated successfully'
            });

    } catch (error) {
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}


// refresh access token

const refreshAccessToken = async(req,res)=>{
    try {
        let token;
        if (req.cookies) {
            token = req.cookies.refreshToken
        } else {
            token = req.headers.authorization.split(" ")[1];
        }

        if(!token){
           return res.status(422).json({
            msg:"Unauthorized access"
           })
        }

        const decodedToken = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET_KEY)

        const user = await User.findById(decodedToken?._id)

        if(!user){
            return res.status(422).json({
                msg:"Invalid refresh token"
            })
        }

        if(token !== user?.refreshToken){
            return res.status(400).json({
                msg:"Refresh token expired or used"
            })
        }

        const {accessToken , refreshToken} =  await generateAccessAndRefreshToken(user._id)

        const options = {
            httpOnly: true,
            path: "/"
        }

        return res.status(200).cookie('accessToken' , accessToken , options)
        .cookie('refreshToken',refreshToken, options)
        .json({
            msg:"Access token refreshed successfully"
        })

        
    } catch (error) {
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}

// delete user ----

const deleteUser = async(req,res)=>{
    try {
        const {_id} =  req.user

        const user =  await User.findByIdAndDelete(_id)

        if(!user){
            return res.status(422).json({
                msg:"Unauthorized access"
            })
        }

        return res.status(200).json({
            msg:"Account deleted successfully"
        })

    } catch (error) {
        return res.status(500).json({
            msg:"Inernal server error"
        })
    }
}


// update profile -----

const updateProfile = async (req, res) => {
    try {
        const { _id } = req.user
        const inputData = req.body

        const payload = updateUserProfileType.safeParse(inputData)

        if (!payload.success) {
            return res.status(400).json({
                msg: "Please enter valid input"
            })
        }

        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).json({
                msg: "user not found"
            })
        }

        const { restaurantName, firstName, lastName, restaurantAddress, gst, phone } = payload.data

        let updatableData = {}

        if (firstName) {
            updatableData.firstName = firstName
        }
        if (lastName) {
            updatableData.lastName = lastName
        }
        if (phone) {
            updatableData.phone = phone
            if(user.phone !== phone){
                updatableData.isPhoneVerified =  false
            }
        }
        if (restaurantName) {
            updatableData.restaurantName = restaurantName
        }
        if (restaurantAddress) {
            updatableData.restaurantAddress = restaurantAddress

        }
        if (gst) {
            updatableData.GST = gst.toUpperCase()

        }

        await user.updateOne(updatableData)

        const userData = await User.findById(_id)

        return res.status(200).json({
            msg: "Profile updated successfully",
            userData
        })

    } catch (error) {

        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}

// update avatar image -----

const updateAvatar = async (req, res) => {
    try {
        const { _id } = req.user
        const filePath = req.file ? req.file.path : null

        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).json({
                msg: "user not found"
            })
        }
        const image = await uploadOnCloudinary(filePath)

        if (!image) {
            return res.status(500).json({
                msg: "Image uploadation failed"
            })
        }

        await user.updateOne({
            avatar: image.url
        })

        return res.status(200).json({
            avatar: image.url,
            msg: "Profile updated successfully"
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}


// delete profile image 
const deleteProfileImage  = async(req,res)=>{
    try {
        const {_id} = req.user

        const user =  await User.findByIdAndUpdate(_id ,{
            $unset:{
                avatar:1
            }
        })

        if(!user){
            return res.status(422).json({
                msg:"Unauthorized access"
            })
        }

        return res.status(200).json({
            msg:"Profile image deleted successfully"
        })

    } catch (error) {
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}


// update phone --
const updatePhone = async (req, res) => {
    try {
        const { _id } = req.user
        const inputData = req.body

        if (!inputData.phone) {
            return res.status(400).json({
                msg: "Phone no is required"
            })
        }

        const payload = updateUserPhoneType.safeParse(inputData)

        if (!payload.success) {
            return res.status(406).json({
                msg: "Please enter valid input"
            })
        }

        const user = await User.findById(_id)

        if (!user) {
            return res.status(422).json({
                msg: "Unauthorized access"
            })
        }

        const { phone } = payload.data
        const otp = generatedOtp(6)

        const message = await client.messages.create({
            body: `your otp verification for user ${user.firstName} is ${otp}`,
            from: "+13312598748", // Your Twilio phone number
            to: `+91${Number(phone)}`, // Recipient's phone number
        });

        if (!message) {
            return res.status(500).json({
                msg: "Otp sending failed , please try again later"
            })
        }

        user.verificationToken = otp
        await user.save({ validateBeforeSave: false })

        return res.status(200).json({
            message,
            otp,
            msg: "Opt send successfully"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}

// verify phone --

const verifyPhone = async (req, res) => {
    try {
        const { _id } = req.user
        const inputData = req.body

        if (!inputData.otp) {
            return res.status(400).json({
                msg: "Please enter valid otp"
            })
        }

        const payload = verifyUserPhoneType.safeParse(inputData)

        if (!payload.success) {
            return res.status(406).json({
                msg: "Please enter valid input"
            })
        }

        const user = await User.findById(_id)

        if (!user) {
            return res.status(422).json({
                msg: "Unauthorized access"
            })
        }

        const { otp } = payload.data

        if (otp !== user.verificationToken) {
            return res.status(400).json({
                msg: "Please enter valid otp"
            })
        }

        await user.updateOne({
            isPhoneVerified: true,
            $unset: {
                verificationToken: 1
            }
        })

        return res.status(200).json({
            msg: "Phone no verified successfully"
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}

// user plan ---

const getUserCurrentPlan = async (req, res) => {
    try {
        const { _id } = req.user

        const plan = await Subscription.find({ userId: _id })

        if (!plan) {
            return res.status(404).json({
                msg: "subscription not found"
            })
        }

        return res.status(200).json({
            plan,
            msg: "plan found successfully"
        })


    } catch (error) {
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}

// user payment history

const getUserPaymentHistory = async (req, res) => {
    try {
        const { _id } = req.user

        const history = await Payment.find({ userId: _id })

        if (!history) {
            return res.status(404).json({
                msg: "No history found"
            })
        }

        return res.status(200).json({
            history,
            msg: "Payment history find successfully"
        })
    } catch (error) {
        return res.status(500).json({
            msg: "internal servre error"
        })
    }
}

const forgotPassword = async (req, res) => {
    try {
        const inputData = req.body

        if (!inputData.email) {
            return res.status(400).json({
                msg: "email must be required"
            })
        }

        const payload = userForgotPasswordType.safeParse(inputData)

        if (!payload.success) {
            return res.status(406).json({
                msg: "please enter valid input"
            })
        }

        const { email } = payload.data

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({
                msg: "Invalid email"
            })
        }

        const accessToken = user.generateAccessToken()

        if (!accessToken) {
            return res.status(500).json({
                msg: "Internal server error"
            })
        }

        user.verificationToken = accessToken
        await user.save()

        const response = await userForgotPasswordMail(accessToken, user._id, email)

        if (!response) {
            return res.status(500).json({
                msg: "Failed to send email"
            })
        }

        return res.status(200).json({
            msg: "Email sent successfully"
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}


const resetPassword = async (req, res) => {
    try {
        const inputData = req.body
        const { _id } = req.user

        console.log(inputData)

        if (!inputData.newPassword || !inputData.confirmPassword) {
            return res.status(400).json({
                msg: "All fields must be required"
            })
        }

        const payload = userResetPasswordType.safeParse(inputData)

        if (!payload.success) {
            return res.status(406).json({
                msg: "Please enter valid input"
            })
        }

        const { newPassword, confirmPassword } = payload.data

        if (newPassword !== confirmPassword) {
            return res.status(400).json({
                msg: "Confirm password does not match"
            })
        }

        const user = await User.findById(_id)

        if (!user) {
            return res.status(422).json({
                msg: "Unauthorized request"
            })
        }

        if (!user.isEmailVerified) {
            return res.status(400).json({
                msg: "Please verify your email first"
            })
        }

        user.password = newPassword
        user.verificationToken = null
        await user.save({ validateBeforeSave: false })

        return res.status(200).json({
            msg: "password updated successfully"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}


// user subscription management ---- user.subscription.js
export {
    registerUser,
    verifyUser,
    loginUser,
    logoutUser,
    getprofile,
    updatePassword,
    updateProfile,
    getUserCurrentPlan,
    getUserPaymentHistory,
    updatePhone,
    verifyPhone,
    forgotPassword,
    resetPassword,
    updateAvatar,
    deleteUser,
    deleteProfileImage,
    refreshAccessToken
}