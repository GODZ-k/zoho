import { Router } from "express";
import { updateAvatar, updatePassword, updatePhone, updateProfile, verifyPhone } from "../controller/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.middlware.js";
const router =  Router()


router.route('/password').post(verifyJWT,updatePassword)

router.route('/phone').post(verifyJWT,updatePhone)

router.route('/phone/verify').post(verifyJWT,verifyPhone)


router.route('/profile').post(verifyJWT, updateProfile)

router.route('/avatar').post(verifyJWT,upload.single('avatar'), updateAvatar)



export default router