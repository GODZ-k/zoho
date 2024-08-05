import Payment from "../../model/payment.model.js";
import Price from "../../model/product.model.js";
import Subscription from "../../model/subscription.model.js";
import User from "../../model/user.model.js";
import cron from 'node-cron'
import { sendExpirationMail, sendTrialExpirationMail, sendTrialWillEndEmail } from "../mails.js";



// const handleSession = async (session, type) => {
//     const data = await retrieveCustomerAndUser(session.customer);
//     // console.log("user data" ,  data)
//     if (!data) return;

//     const { user } = data;

//     const subscription = user.subscription ? await Subscription.findById(user.subscription._id) : null;
//     const product = session.plan ? await Price.findOne({ stripeProductId: session.plan.product }) : null
//     const payment = user.paymentHistory ? await Payment.findOne({ userId: user._id }) : null

//     // if (!subscription || (session.plan && !product) || !payment) return;

//     try {
//         if (type === 'checkout') {
//             const history = await Payment.create({
//                 userId: user._id,
//                 subscriptionId: session.subscription,
//                 stripePaymentId: session.payment_intent || 'Free Trial',
//                 status: session.payment_status,
//                 amount: session.amount_total === 0 ? session.amount_total : session.amount_total / 100,
//                 paymentMethod: session.payment_method_types[0]
//             });

//             if (!history) {
//                 console.error('Failed to create payment history');
//                 return;
//             }

//             user.paymentHistory.push(history._id);
//             await user.save({ validateBeforeSave: false });

//             console.log('Payment history updated successfully:', history);

//         } else if (type === 'invoice' || type === 'invoice_payment_failed') {

//             const history = await payment.updateOne(
//                 {
//                     invoice: session.hosted_invoice_url,
//                     status: session.status
//                 },
//                 {
//                     new: true
//                 }
//             );

//             if (!history) {
//                 console.error('Failed to update payment history');
//                 return;
//             }

//             console.log('Payment history updated successfully:', history);

//         } else if(type === 'payment_intent_failed'){

//             const history = await payment.updateOne(
//                 {
//                     invoice: session.invoice,
//                     status: session.status
//                 },
//                 {
//                     new: true
//                 }
//             );

//             if (!history) {
//                 console.error('Failed to update payment history');
//                 return;
//             }

//             console.log('Payment history updated successfully:', history);
            
//         } else if (type === 'subscribe') {

//             if (!user.subscription) {
//                 const newSubscription = await Subscription.create({
//                     userId: user._id,
//                     planType: product.planType,
//                     interval: session.plan.interval,
//                     productId: product._id,
//                     invoice: session.latest_invoice,
//                     priceId: product.stripePriceId,
//                     status: session.status,
//                     startDate: new Date(session.current_period_start * 1000),
//                     amount: session.plan.amount / 100,
//                     subscriptionId: session.id,
//                     endDate: new Date(session.current_period_end * 1000),
//                     hasTrial: session.status === 'trialing' ? true : false,
//                     collectionMethod: session.collection_method === 'charge_automatically' ? 'Autopay' : 'Manual'
//                 });

//                 user.subscription = newSubscription._id
//                 await user.save({ validateBeforeSave: false })

//             } else {

//                 subscription.planType = product.planType
//                 subscription.interval = session.plan.interval,
//                     subscription.productId = product._id,
//                     subscription.invoice = session.latest_invoice,
//                     subscription.priceId = product.stripePriceId,
//                     subscription.status = session.status,
//                     subscription.startDate = new Date(session.current_period_start * 1000),
//                     subscription.amount = session.plan.amount / 100,
//                     subscription.subscriptionId = session.id,
//                     subscription.endDate = new Date(session.current_period_end * 1000),
//                     subscription.hasTrial = session.status === 'trialing' ? true : false,
//                     subscription.collectionMethod = session.collection_method === 'charge_automatically' ? 'Autopay' : 'Manual'

//                 // Object.assign(subscription,{
//                 // planType: product.planType,
//                 // interval: session.plan.interval,
//                 // productId: product._id,
//                 // invoice :session.latest_invoice,
//                 // priceId : product.stripePriceId,
//                 // status :session.status,
//                 // startDate : new Date(session.current_period_start * 1000),
//                 // amount : session.plan.amount,
//                 // subscriptionId : session.id,
//                 // endDate : new Date(session.current_period_end * 1000),
//                 // hasTrial : session.status === 'trialing' ? true : false,
//                 // collectionMethod : session.collection_method === 'charge_automatically' ? 'Autopay' : 'Manual'
//                 // })

//                 await subscription.save({ validateBeforeSave: false })

//             }


//         } else if (type === 'updateSubscription') {

//             const updateData = session.canceled_at ?
//                 {
//                     planType: 'none',
//                     productId: null,
//                     priceId: null,
//                     status: 'canceled',
//                     subscriptionId: null,
//                     hasTrial: false,
//                     collectionMethod: null,
//                     description:"Your subscription is canceled"
//                 } : {
//                     userId: user._id,
//                     planType: product.planType,
//                     interval: session.plan.interval,
//                     productId: product._id,
//                     invoice: session.latest_invoice,
//                     priceId: product.stripePriceId,
//                     status: session.status,
//                     startDate: new Date(session.current_period_start * 1000),
//                     amount: session.plan.amount / 100,
//                     subscriptionId: session.id,
//                     endDate: new Date(session.current_period_end * 1000),
//                     hasTrial: session.status === 'trialing' ? true : false,
//                     collectionMethod: session.collection_method === 'charge_automatically' ? 'Autopay' : 'Manual'
//                 }

//             const updatedSubscription = await subscription.updateOne(updateData)
//             if (!updatedSubscription) return
//             console.log("subscription updated successfully")

//         } else if (type === 'deleteSubscription') {

//             let updatedSubscription = await subscription.updateOne({
//                 planType: product.planType,
//                 interval: session.plan.interval,
//                 productId: product._id,
//                 invoice: session.latest_invoice,
//                 priceId: product.stripePriceId,
//                 status: 'expired',
//                 startDate: new Date(session.current_period_start * 1000),
//                 amount: session.plan.amount / 100,
//                 subscriptionId: session.id,
//                 endDate: new Date(session.current_period_end * 1000),
//                 hasTrial: false,
//                 collectionMethod: session.collection_method === 'charge_automatically' ? 'Autopay' : 'Manual'
//             });


//             if (!updatedSubscription) return

//             console.log("subscription updated successfully")

//         } else if (type === 'trial_end') {

//             // Notify the customer
//             await sendTrialWillEndEmail(user.email, session, {
//                 trialEnd: new Date(session.trialEnd * 1000),
//                 subscriptionDetails: subscription,
//             });

//             await subscription.updateOne({
//                 description: "Your plan is now going to end"
//             })
//         } 

//     } catch (error) {
//         console.log(error);
//     }
// };


// send mail to the user when their plan is going to expire before the 3rd day of the expiuration --------
// cron.schedule('0 0 * * *', async () => {  // Runs every day at midnight
//     const subscriptions = await Subscription.find({});
//     subscriptions.forEach(async (subscription) => {
//         const daysLeft = Math.floor((new Date(subscription.endDate) - new Date()) / (1000 * 60 * 60 * 24));

//         if (daysLeft === 0) {
//             const user = await User.findById(subscription.userId._id);
//             if(subscription.status === 'past_due'){
//                 const response  = await sendExpirationMail(user.email)
    
//                 if(!response){
//                     console.log("email send failed")
//                 }
//             }else{
//                 if(subscription.status === 'trialing'){
//                     const response  = await sendTrialExpirationMail(user.email)
        
//                     if(!response){
//                         console.log("email send failed")
//                     }
//                 }
//             }
           
//         }
//     });
// });


export {
    // handleSession
}