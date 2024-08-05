import Staff from "../model/staff.model.js"
import User from "../model/user.model.js"
import { loginSatff, updateStaffPassword, updateStaffProfile } from "../utils/Types.js"
import { generateAccessAndRefreshToken } from "../utils/utils.js"



// only for admin creation --------

const register = async (req, res) => {

    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({
            msg: "Please enter valid input"
        })
    }

    const admin = await Staff.findOne({ email })

    if (admin) {
        return res.status(404).json({
            msg: "admin already exists"
        })
    }

    await Staff.create({
        email,
        password,
        role: 'admin'
    })

    return res.status(200).json({
        msg: "super admin created successfully",
    })
}


// only staff creation for admin ( protected from staff , only admin can access this route if admin already exists ) --------------

// check  ---- superadmin.controller.js

const login = async (req, res) => {

    try {
        const inputData = req.body

        if (!inputData.email || !inputData.password) {
            return res.status(400).json({
                msg: "All field must be required"
            })
        }

        const payload = loginSatff.safeParse(inputData)

        if (!payload.success) {
            return res.status(400).json({
                msg: "Please enter valid input"
            })
        }

        const { email, password } = payload.data
        const staff = await Staff.findOne({ email })

        if (!staff) {
            return res.status(400).json({
                msg: 'staff not exists'
            })
        }

        const checkPassword = await staff.isPasswordCorrect(password)

        if (!checkPassword) {
            return res.status(400).json({
                msg: "Invalid password"
            })
        }

        const { accessToken, refreshToken } = await generateAccessAndRefreshToken(staff._id, Staff)


        const options = {
            httpOnly: true,
            secure: true
        }

        return res
            .cookie('accessToken', accessToken, options)
            .cookie('refreshToken', refreshToken, options)
            .status(200).json({
                data: {
                    email: staff.email
                },
                msg: "staff loggedin successfully"
            })
    } catch (error) {
        return res.status(500).json({
            msg: "Internal server error",
            error: error.msg
        })
    }
}


const logout = async (req, res) => {
    try {
        const { _id } = req.user

        const staff = await Staff.findById(_id)

        if (!staff) {
            return res.status(422).json({
                msg: "Unauthorized Access"
            })
        }

        await staff.updateOne({
            $unset: {
                refreshToken: 1
            }
        }, { new: true })

        const options = {
            httpOnly: true,
            secure: true
        }

        return res
            .clearCookie('accessToken', options)
            .clearCookie('refreshToken', options)
            .status(200).json({
                msg: "Staff logged out successfully"
            })

    } catch (error) {
        return res.status(200).json({
            msg: "Internal server error"
        })
    }

}


const updatePassword = async (req, res) => {
    try {
        const inputData = req.body
        const { _id } = req.user


        if (!inputData.oldPassword || !inputData.newPassword || !inputData.confirmPassword) {
            return res.status(404).json({
                msg: "All fields are required",
            });
        }

        const parsePayLoad = updateStaffPassword.safeParse(inputData);

        if (!parsePayLoad.success) {
            return res.status(406).json({
                msg: "Please enter valid input",
            });
        }

        const { oldPassword, newPassword, confirmPassword } = parsePayLoad.data;

        const user = await Staff.findById(_id);

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

        const options = {
            httpOnly: true,
            secure: true
        }


        return res
            .clearCookie('accessToken', options)
            .clearCookie('refreshToken', options)
            .status(200).json({
                msg: "password updated successfully"
            })

    } catch (error) {
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}


const updateProfile = async (req, res) => {
    try {
        const inputData = req.body
        const { _id } = req.user

        if (!inputData.email) {
            return res.status(400).json({
                msg: "All field must be required"
            })
        }

        const payload = updateStaffProfile.safeParse(inputData)

        if (!payload.success) {
            return res.status(406).json({
                msg: "Please enter valid input",
            });
        }

        const { email } = payload.data

        const user = await Staff.findById(_id)

        if (!user) {
            return res.status(422).json({
                msg: "Unauthorized access"
            })
        }

        await user.updateOne({
            $set: {
                email
            }
        }, { new: true })

        return res.status(200).json({
            msg: "Profile updated successfully"
        })


    } catch (error) {
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}


const getAllStaffs = async (req, res) => {
    try {
        const { _id } = req.user

        const staff = await Staff.findById(_id)

        if (!staff && staff.role !== 'admin') {
            return res.status(404).json({
                msg: " Yor are not authorized"
            })
        }

        const staffs = await Staff.find({ role: 'staff' }).select('-password -refreshToken')

        if (!staffs.length) {
            return res.status(404).json({
                msg: "Staff not found"
            })
        }

        return res.status(200).json({
            staffs,
            msg: "Staff found successfully"
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}


// get all user - have a saff id

const getAllStaffUsers = async (req, res) => {
    try {
        const { _id } = req.user

        const staff = await Staff.findById(_id)

        if (!staff) {
            return res.status(422).json({
                msg: "You are not authorized to see the users"
            })
        }

        if (staff.role === 'staff') {
            const users = await User.find({ createdBy: staff._id }).select('-password -refreshToken')

            if (!users.length) {
                return res.status(404).json({
                    users,
                    msg: "Users not found"
                })
            }
            return res.status(200).json({
                users,
                msg: "Users found successfully"
            })
        } else {
            const users = await User.find({ }).select('-password -refreshToken')

            if (!users.length) {
                return res.status(404).json({
                    users,
                    msg: "Users not found"
                })
            }
            return res.status(200).json({
                users,
                msg: "Users found successfully"
            })
    
        }


    } catch (error) {
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}



const getAllUsers = async (req, res) => {
    try {
        const { _id } = req.user

        const admin = await Staff.findById(_id)

        if (!admin) {
            return res.status(422).json({
                msg: "You are not authorized"
            })
        }

        const users = await User.find({}).select('-password -refreshToken -verificationToken')

        if (!users.length) {
            return res.status(404).json({
                msg: "User not found"
            })
        }

        return res.status(200).json({
            users,
            msg: "Users found successfully"
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}

export {
    register,
    login,
    logout,
    updatePassword,
    updateProfile,
    getAllStaffUsers,
    getAllUsers,
    getAllStaffs
}