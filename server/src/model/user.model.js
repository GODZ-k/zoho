import { model, Schema } from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const HASH_ROUND = 10

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        trim: true,
        // sparse: true, // Make the index sparse
        // unique: true,
    },
    restaurantName: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    restaurantAddress: {
        type: String,
        required: true
    },
    verificationToken: {
        type: String,
    },
    otp: {
        type: String
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    isPhoneVerified: {
        type: Boolean,
        default: false
    },
    refreshToken: {
        type: String
    },
    GST: {
        type: String,
        uppercase: true
    },
    customerId: {
        type: String,
        index: true
    },
    subscription: {
        type: Schema.Types.ObjectId,
        ref: "Subscription"
    },
    staffCount: {
        type: String,
    },
    paymentHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Payment"
        }
    ],
    role: {
        type: String,
        default: "User"
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'Staff'
    }

}, { timestamps: true })



userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password, HASH_ROUND)

    next()
})


userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}



userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        { _id: this._id },
        process.env.ACCESS_TOKEN_SECRET_KEY,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id
    }, process.env.REFRESH_TOKEN_SECRET_KEY,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}



const User = model('User', userSchema)




export default User