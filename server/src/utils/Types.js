import zod from 'zod'


// ----------------- user types ------------------------------

const registerUserType = zod.object({
    firstName:zod.string(),
    lastName:zod.string().optional(),
    password:zod.string().min(8),
    email:zod.string().email(),
    restaurantName:zod.string(),
    restaurantAddress:zod.string(),
    gst:zod.string().optional()

})


const loginUsertype =zod.object({
    email:zod.string().email(),
    password:zod.string()
})


const updateUserPasswordType = zod.object({
    oldPassword:zod.string(),
    newPassword:zod.string().min(8),
    confirmPassword:zod.string().min(8)
})


const updateUserProfileType =zod.object({
    firstName:zod.string().optional(),
    lastName:zod.string().optional(),
    restaurantName:zod.string().optional(),
    restaurantAddress:zod.string().optional(),
    gst:zod.string().length(15).optional(),
    phone:zod.string().length(10).optional()
})


const updateUserPhoneType = zod.object({
    phone:zod.string().length(10)
})

const verifyUserPhoneType = zod.object({
    otp:zod.string().length(6)
})


const userForgotPasswordType = zod.object({
    email:zod.string().email()
})

const userResetPasswordType = zod.object({
    newPassword:zod.string().min(8),
    confirmPassword:zod.string().min(8)
})
// ------------- user types for admin and staff ---------------

const updatePasswordUserType = zod.object({
    newPassword:zod.string().min(8),
    confirmPassword:zod.string().min(8)
})

// ----------------- staff/admin types ------------------------

const registerStaffType = zod.object({
    email:zod.string().email(),
    password:zod.string().min(10)
})

const loginSatff = zod.object({
    email: zod.string().email(),
    password: zod.string()
})

const updateStaffPassword = zod.object({
    oldPassword: zod.string(),
    newPassword: zod.string().min(8),
    confirmPassword: zod.string().min(8)
})

const updateStaffProfile = zod.object({
    email: zod.string().email()
})




// --------------- price types ----------------------------------


const createPriceType = zod.object({
    planType: zod.enum(['free', 'basic', 'pro']),
    amount: zod.number(),
    currency: zod.string().max(3),
    interval:zod.enum(['month','year']),

    
})


const updatePriceType = zod.object({
    currency:zod.string().max(3).optional(),
    amount:zod.number().optional(),

})


// ---------------------- stripe checkout ------------------

const checkoutType = zod.object({
    plan:zod.string(),
    amount:zod.string(),
    interval:zod.string()
})

export {
    updateUserPasswordType,
    updatePasswordUserType,
    updateUserProfileType,
    loginUsertype,
    registerUserType,
    registerStaffType,
    loginSatff,
    updateStaffPassword,
    updateStaffProfile,
    createPriceType,
    updatePriceType,
    checkoutType,
    updateUserPhoneType,
    verifyUserPhoneType,
    userForgotPasswordType,
    userResetPasswordType
}