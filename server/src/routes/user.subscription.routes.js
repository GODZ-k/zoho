import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
// import { manageBilling } from "../controller/user.subscription.js";
const router =  Router()



// router.route('/billing').get(verifyJWT,manageBilling)



export default router