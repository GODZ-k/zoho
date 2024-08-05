import { model, Schema } from "mongoose";

const subscriptionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Price",
        required: true
    },
    interval: {
        type: String,
        required: true
    },
    planType: {
        type: String,
        enum: ['none','free_trial', 'basic', 'pro'],
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date
    },
    status: {
        type: String,
        enum: ['active', 'incomplete', 'incomplete_expired', 'trialing', 'expired', 'canceled', 'unpaid', 'paused'],
        default: 'unpaid'
    },
    invoice: {
        type: String,
    },
    hasTrial: {
        type: Boolean,
        default: false,
        required: true
    },
    
    amount: {
        type: Number,
        required: true
    },
    subscriptionId: {
        type: String,
        required: true
    },
    collectionMethod: {
        type: String,
    },
    priceId: {
        type: String
    },
    description:{
        type:String
    }

}, { timestamps: true })

const Subscription = model("Subscription", subscriptionSchema)


export default Subscription