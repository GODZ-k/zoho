import { Router } from "express";
import { deleteProfileImage, deleteUser, forgotPassword, getprofile, getUserCurrentPlan, getUserPaymentHistory, loginUser, logoutUser, registerUser, resetPassword, verifyUser } from "../controller/user.controller.js";
import userSubscriptionRoute from "./user.subscription.routes.js"
import updateUser from "./update.user.route.js"
import { verifyResetPasswordToken, verifyJWT } from "../middleware/auth.middleware.js";
const router =  Router()


router.route('/register').post(registerUser)

router.route('/verify').get(verifyUser)

router.route('/login').post(loginUser)

router.route('/profile').get(verifyJWT, getprofile)

router.route('/logout').get(verifyJWT,logoutUser)

router.route('/forgot-password').post(forgotPassword)

router.route('/reset-password/:id/:token').post(verifyResetPasswordToken,resetPassword)

router.route('/delete/account').post(verifyJWT, deleteUser)

router.route('/delete/profile-image').get(verifyJWT, deleteProfileImage)

// user plan routes --

router.route('/current-plan').get(verifyJWT,getUserCurrentPlan)

router.route('/payment-history').get(verifyJWT,getUserPaymentHistory)

// bypass user subscription routes 

router.use('/subscription',userSubscriptionRoute)

// bypass update route ---
router.use('/update',updateUser)


export default router