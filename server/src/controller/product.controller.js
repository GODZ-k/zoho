import Price from "../model/product.model.js"
import Staff from "../model/staff.model.js"
import { createPriceType, updatePriceType } from "../utils/Types.js"




const createPrice = async (req, res) => {
    try {
        const { _id } = req.user
        const { planType, amount, currency, interval } = req.body
        
        const inputData = {
            planType,
            amount: Number(amount),
            currency,
            interval
        }
        
        const payload = createPriceType.safeParse(inputData)
        
        if (!payload.success) {
            return res.status(406).json({
                msg: "Please enter valid input"
            })
        }
        
        
        const payloadData = payload.data
        
        const user = await Staff.findById(_id)

        
        if ( !user  || user.role !== 'admin') {
            return res.status(422).json({
                msg: "You are not authorized"
            })
        }

        const createdPrice = await Price.create({
            planType: payloadData.planType,
            amount: payloadData.amount,
            currency: payloadData.currency,
            interval: payloadData.interval,
        })

        if (!createdPrice) {
            return res.status(500).json({
                msg: "Failed to create plan"
            })
        }

        return res.status(200).json({
            createdPrice,
            msg: "Price craeted successfully"
        })

    } catch (error) {
        // console.log(error)
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}


const updatePrice = async (req, res) => {
    try {
        const { _id } = req.user
        const { id } = req.params

        const { amount, currency } = req.body

        const inputData = {
            amount: Number(amount),
            currency,
        }

        const payload = updatePriceType.safeParse(inputData)


        if (!payload.success) {
            return res.status(406).json({
                msg: "Please enter valid input"
            })
        }

        const payloadData = payload.data

        const user = await Staff.findById(_id)

        if (user.role !== 'admin') {
            return res.status(422).json({
                msg: "You are not authorized"
            })
        }

        const price = await Price.findById(id)

        if (!price) {
            return res.status(404).json({
                msg: "price not found"
            })
        }

        let updatableData = {}

        if (payloadData.amount) {
            updatableData.amount = payloadData.amount
        }
   

        
        if (payloadData.currency) {
            updatableData.currency = payloadData.currency
        }


        await price.updateOne(updatableData)

        const plan =  await Price.findById(id)

        return res.status(200).json({
            plan,
            msg: "Price updated successfully"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}


const archiveProduct = async (req, res) => {
    try {
        const { _id } = req.user
        const { id } = req.params

        const user = await Staff.findById(_id)

        if (user.role !== 'admin') {
            return res.status(422).json({
                msg: "You are not authorized"
            })
        }

        const product = await Price.findById(id)

        if (!product) {
            return res.status(404).json({
                msg: "Product not found"
            })
        }

        await product.updateOne({
            isActive: false
        })

        return res.status(200).json({
            msg: "Product archived successfully "
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}


const getAllProducts = async (req, res) => {
    try {
        const products = await Price.find({
            isActive: true
        })

        if (!products.length) {
            return res.status(404).json({
                products,
                msg: "Products not found"
            })
        }

        return res.status(200).json({
            products,
            msg: "Product found successfully"
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}


const getMonthlyProduct = async (req, res) => {
    try {
        const monthlyProduct = await Price.find({
            interval: 'month',
            isActive:true
        })

        if (!monthlyProduct.length) {
            return res.status(404).json({
                monthlyProduct,
                msg: "No product found"
            })
        }

        return res.status(200).json({
            monthlyProduct,
            msg: "monthly product found successfully"
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}


const getYearlyProduct = async (req, res) => {
    try {
        const yearlyProduct = await Price.find({
            interval: "year",
            isActive:true
        })


        if (!yearlyProduct.length) {
            return res.status(404).json({
                yearlyProduct,
                msg: "No product found"
            })
        }

        return res.status(200).json({
            yearlyProduct,
            msg: "Product found successfully"
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}


export {
    createPrice,
    updatePrice,
    archiveProduct,
    getAllProducts,
    getMonthlyProduct,
    getYearlyProduct
}