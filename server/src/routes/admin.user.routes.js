import { Router } from "express";
import { createUser, deleteUser, updateUserPassword, updateUserProfile } from "../controller/admin.user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.middlware.js";
const router = Router()

router.route('/register').post(verifyJWT,createUser)


router.route('/delete/:id').get(verifyJWT,deleteUser)


router.route('/update/password/:id').post(verifyJWT,updateUserPassword)

router.route('/update/profile/:id').post(verifyJWT,upload.single('avatar'), updateUserProfile)


export default router