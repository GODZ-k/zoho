import {Router} from 'express'
import { archiveProduct, createPrice, updatePrice } from '../controller/product.controller.js'
import {verifyJWT} from "../middleware/auth.middleware.js"

const router = Router()


router.route('/create').post(verifyJWT,createPrice)

router.route('/update/:id').post(verifyJWT,updatePrice)

router.route('/archive-product/:id').get(verifyJWT,archiveProduct)


// check other get product routes in main route ------




export default router