import { Router } from "express";
import { registerStaff } from "../controller/superadmin.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
const router =  Router()

router.route('/staff/create').post(verifyJWT,registerStaff)

export default router