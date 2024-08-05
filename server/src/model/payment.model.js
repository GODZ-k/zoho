import { model, Schema } from "mongoose";


const paymentSchema = new Schema({
    userId: { 
        type:Schema.Types.ObjectId,
        ref:"User",
        required: true 
    },
    subscriptionId: { 
        type:String, 
        required: true 
    },
    stripePaymentId: { 
        type: String, 
        required: true 
    },
    amount: { 
        type: Number, 
        required: true 
    },
    status: { 
        type: String, 
        // enum: ['succeeded', 'pending', 'failed'], 
        required: true 
    },
    invoice:{
        type:String,
    },
    paymentMethod:{
        type:String
    }
},{timestamps:true});



const Payment = model('Payment', paymentSchema)


export default Payment