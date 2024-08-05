import { model, Schema } from "mongoose";


const priceSchema =  new Schema({
    planType:{
        type:String,
        enum:['free','basic','pro'],
        required:true,
    },
    amount:{
        type:Number,
        required:true
    },
    currency:{
        type:String,
        required:true,
        default:'inr'
    },
    interval:{
        type:String,
        enum:['month','year'],
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    }

},{timestamps:true})


const Price = model('Price', priceSchema)


export default Price