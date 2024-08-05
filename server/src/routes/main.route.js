import { Router } from "express";
import userRoute from './user.route.js'
import staffRoute from './staff.route.js'
import priceRoute from "./product.route.js"
import { getAllProducts, getMonthlyProduct, getYearlyProduct } from "../controller/product.controller.js";
import adminUserRoute from "./admin.user.routes.js"
import superAdminRoute from './superadmin.route.js'
import { checkout } from "../controller/main.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router()


// bypass user routes 
router.use('/user' , userRoute)

// bypass staff routes
router.use('/staff', staffRoute)

// bypass price routes
router.use('/price',priceRoute)


// bypass superadmin routes
router.use('/admin', superAdminRoute)

// bypass user routes for staff and admin - ( create , update , delelete user by staff/admin)
router.use('/admin/user',adminUserRoute)


// main routes ----------------------------

// checkout routes ( stripe ) - - - - - - - - - 

router.route('/checkout').get(verifyJWT,checkout)



// priduct routes - - - - - - - - - - 

router.route('/products').get(getAllProducts)
router.route('/monthly-products').get(getMonthlyProduct)
router.route('/yearly-products').get(getYearlyProduct)




// stripe ------------------

// router.route("/invoice/:id").get(verifyJWT,getInvoiceDetail)

export default router