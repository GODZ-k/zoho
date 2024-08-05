import { Router } from "express";
import { getAllStaffs, getAllStaffUsers, getAllUsers, login, logout, register } from "../controller/staff.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import updateStaffRoute from './update.staff.route.js'
const router =  Router()


router.route('/register').post(register)

router.route('/login').post(login)

router.route('/logout').get(verifyJWT,logout)

// bypass staff update route
router.use('/update',updateStaffRoute)

router.route('/staff-users').get(verifyJWT,getAllStaffUsers)

router.route('/users').get(verifyJWT,getAllUsers)

router.route('/all').get(verifyJWT,getAllStaffs)

export default router