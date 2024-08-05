import { Router } from "express";
import { updatePassword, updateProfile } from "../controller/staff.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
const router = Router()


router.route('/password').post(verifyJWT,updatePassword)


router.route('/profile').post(verifyJWT,updateProfile)

export default router