import User from "../model/user.model.js"
import { checkoutType } from "../utils/Types.js"
// import { handleSession } from "../utils/webhook/handleSession.js"
import axios from "axios"
import crypto from 'crypto'


const checkout = async (req, res) => {
    try {
        const { _id } = req.user
        const inputData = req.body

        const payloadData = checkoutType.safeParse(inputData)

        if (!payloadData.success) {
            return res.status(400).json({
                msg: "Please enter valid input"
            })
        }


        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).json({
                msg: "unsuthorized access"
            })
        }

        if (!user.isPhoneVerified) {
            return res.status(422).json({
                msg: "Please verify your mobile no first"
            })
        }

        if (!user.GST) {
            return res.status(404).json({
                msg: "We must have gst to verify the business."
            })
        }


        const { amount, plan, interval } = payloadData.data

        const merchantTransactionId = 'MT' + Date.now();

        const data = {
            merchantId: 'PGTESTPAYUAT77',
            merchantSubscriptionId: merchantTransactionId,
            merchantUserId: 'MUID' + "123",
            authWorkflowType: "PENNY_DROP",		  //PENNY_DROP or TRANSACTION
            amountType: "FIXED",		          //FIXED or VARIABLE
            name: user.firstName,
            frequency: "MONTHLY",
            amount: amount,
            recurringCount: interval,
            // redirectUrl: `http://localhost:3001/api/v1/status/${merchantTransactionId}`,
            redirectMode: 'POST',
            mobileNumber: user.phone,
            planId: plan,
        };


        const payload = JSON.stringify(data);
        const payloadMain = Buffer.from(payload).toString('base64');
        const keyIndex = 1;
        const string = payloadMain + '/v3/recurring/subscription/create' + '14fa5465-f8a7-443f-8477-f986b8fcfde9';
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + '###' + keyIndex;
        const prod_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/v3/recurring/subscription/create"
        const options = {
            method: 'POST',
            url: prod_URL,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum
            },
            data: {
                request: payloadMain
            }
        };

        // check the status of user subscription created or not ---
        axios.request(options)
            .then(async function (response) {
                const keyIndex = 1
                const string = `/v3/recurring/subscription/status/${data.merchantId}/${data.merchantSubscriptionId}` + '14fa5465-f8a7-443f-8477-f986b8fcfde9';
                const sha256 = crypto.createHash('sha256').update(string).digest('hex');
                const checksum = sha256 + '###' + keyIndex;
                const prod_URL = `https://api-preprod.phonepe.com/apis/pg-sandbox/v3/recurring/subscription/status/${data.merchantId}/${data.merchantSubscriptionId}`
                const options = {
                    method: 'get',
                    url: prod_URL,
                    headers: {
                        accept: 'application/json',
                        'Content-Type': 'application/json',
                        'X-VERIFY': checksum
                    },
                    data: {
                        request: payloadMain
                    }
                };

                // submit auth request to the phone pe server ----
                await axios.request(options)
                    .then(async (response) => {
                        const keyIndex = 1
                            const data = {
                                merchantId: "PGTESTPAYUAT77",
                                merchantUserId: 'MUID' + "123",
                                subscriptionId: response.data.data.subscriptionId,
                                authRequestId: merchantTransactionId,
                                amount: 100,
                                paymentInstrument: {
                                    type: "UPI_QR",
                                    // vpa: "test-vpa@ybl"
                                },
                            }
                            const payload = JSON.stringify(data);
                            const payloadMain = Buffer.from(payload).toString('base64');
                        const string = payloadMain + `/v3/recurring/auth/init` + '14fa5465-f8a7-443f-8477-f986b8fcfde9';
                        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
                        const checksum = sha256 + '###' + keyIndex;
                        const prod_URL = 'https://api-preprod.phonepe.com/apis/pg-sandbox/v3/recurring/auth/init'
                        const options = {
                            method: 'post',
                            url: prod_URL,
                            headers: {
                                accept: 'application/json',
                                'Content-Type': 'application/json',
                                'X-VERIFY': checksum,
                                'X-CALLBACK-URL': 'http://localhost:3000'
                            },
                            data: {
                                request: payloadMain
                            }
                        };

                        await axios.request(options)
                            .then((response) => {
                                const redirectUrl = response.data
                                return res.status(200).json({
                                    redirectUrl
                                })
                            })

                    })
            })
            .catch(function (error) {
                console.error('Request failed with status code:', error.response ? error.response.status : 'N/A');
                console.error('Response data:', error.response ? error.response.data : 'No response data');
                console.error('Request data:', options.data);
                console.error('Headers:', options.headers);
            });




    } catch (error) {
        // console.log(error)
        return res.status(500).json({
            error,
            msg: "Internal server error"
        })
    }
}


// webhook conf ------------------------------------------

// const webhook = async (req, res) => {
//     try {

//         const event = createWebhook(req.body, req.header('Stripe-Signature'))

//         const session = event.data.object
//         console.log(event.type , session)

//         switch (event.type) {

//             // payment intent and checkout --------------

//             case 'checkout.session.completed':
//                 await handleSession(session, 'checkout');
//                 break;

//             // case 'payment_intent.succeeded':   // pending
//             //     await handleSession(session, 'payment_intent_succeeded')
//             //     break;

//             case 'payment_intent.payment_failed': // pending
//                 await handleSession(session, 'payment_intent_failed')
//                 break;


//             // invoice ---------------------------------

//             case 'invoice.payment_succeeded':   
//                 await handleSession(session, 'invoice');
//                 break;

//             case 'invoice.payment_failed':   
//                 await handleSession(session , 'invoice_payment_failed')
//                 break;


//             // case 'invoice.upcoming': // pending
//             //     await handleSession(session , 'invoice_upcoming')
//             //     break;

//             // charges ----------------------------------

//             // case 'charge.succeeded':    // pending
//             //     await handleSession(session, 'charge_succeeded')
//             //     break;

//             // case 'charge.failed':    // pending 
//             //     await handleSession(session,'charge_failed')
//             //     break;

//             // case 'charge.refunded':    // pending 
//             //     await handleSession(session, 'charge_refunded')
//             //     break;


//             // subscription ------------------------------

//             case 'customer.subscription.created':
//                 await handleSession(session, 'subscribe')
//                 break;

//             case 'customer.subscription.updated':
//                 await handleSession(session, 'updateSubscription')
//                 break;

//             case 'customer.subscription.deleted':
//                 await handleSession(session, 'deleteSubscription')
//                 break;

//             case 'customer.subscription.trial_will_end':    
//                 await handleSession(session,'trial_end')
//                 break;

//             default:
//                 console.log(`Unhandled event type ${event.type}`);
//         }
//         res.status(200).send('Received');
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({
//             msg: "Internal server error"
//         })
//     }
// }

/*
const retrieveCustomerAndUser = async (customerId) => {
    try {
        const customer = await Stripe.customers.retrieve(customerId);
        const user = await User.findOne({ customerId: customer.id });
        if (!user) {
            console.log("user not found");
            return null;
        }
        return { customer, user };
    } catch (error) {
        console.log(error);
        return null;
    }
};
*/

/*
const handleSession = async (session, type) => {
    const data = await retrieveCustomerAndUser(session.customer);
    if (!data) return;

    const { user } = data;

    const subscription = await Subscription.findById(user.subscription._id)

    if(!subscription) return

    const product = await Price.findOne({ stripeProductId: session.plan.product })

    if(!product) return

    const payment = await Payment.findOne({userId:user._id})

    if(!payment) return 

    try {
        if (type === 'checkout') {
            const history = await Payment.create({
                userId: user._id,
                subscriptionId: session.subscription,
                stripePaymentId: session.payment_intent || 'Free Trial',
                status: session.payment_status,
                amount: session.amount_total,
                paymentMethod: session.payment_method_types[0]
            });

            user.paymentHistory.push(history._id);
            await user.save({ validateBeforeSave: false });

            console.log('history', history);

            if (!history) {
                console.error('Failed to create payment history');
                return;
            }

            console.log('Payment history updated successfully:', history);
        } else if (type === 'invoice') {
            // const payment = await Payment.findOne({userId:user._id})

            const history = await payment.updateOne(
                {
                    invoice:session.hosted_invoice_url,
                    status:session.status
                },
                {
                    new:true
                }
            );

            console.log('history', history);

            if (!history) {
                console.error('Failed to update payment history');
                return;
            }

            console.log('Payment history updated successfully:', history);

        }else if(type === 'invoice_payment_failed'){
            // const payment = await Payment.findOne({userId:user._id})

            const history = await payment.updateOne(
                { invoice: session.hosted_invoice_url,
                  status:session.status
                }, { new: true }
            );

            console.log('history', history);

            if (!history) {
                console.error('Failed to update payment history');
                return;
            }

            console.log('Payment history updated successfully:', history);

        } else if (type === 'subscribe') {
            // const product = await Price.findOne({ stripeProductId: session.plan.product })

            if (!product) return

            if (!user.subscription) {

                const subscription = await Subscription.create({
                    userId: user._id,
                    planType: product.planType,
                    interval: session.plan.interval,
                    productId: product._id,
                    invoice: session.latest_invoice,
                    priceId: product.stripePriceId,
                    status: session.status,
                    startDate: new Date(session.current_period_start * 1000),
                    amount: session.plan.amount / 100,
                    subscriptionId: session.id,
                    endDate: new Date(session.current_period_end * 1000),
                    hasTrial: session.status === 'trialing' ? true : false,
                    collectionMethod: session.collection_method === 'charge_automatically' ? 'Autopay' : 'Manual'
                });

                // if (!subscription) return

                user.subscription = subscription._id
                await user.save({ validateBeforeSave: false })

            } else {
                // const subscription = await Subscription.findById(user.subscription._id)

                console.log(subscription)

                // if (!subscription) return
                // const product = await Price.findOne({ stripeProductId: session.plan.product })


                subscription.planType = product.planType
                subscription.interval = session.plan.interval,
                subscription.productId = product._id,
                subscription.invoice = session.latest_invoice,
                subscription.priceId = product.stripePriceId,
                subscription.status = session.status,
                subscription.startDate = new Date(session.current_period_start * 1000),
                subscription.amount = session.plan.amount,
                subscription.subscriptionId = session.id,
                subscription.endDate = new Date(session.current_period_end * 1000),
                subscription.hasTrial = session.status === 'trialing' ? true : false,
                subscription.collectionMethod = session.collection_method === 'charge_automatically' ? 'Autopay' : 'Manual'

                await subscription.save({ validateBeforeSave: false })


            }


        } else if (type === 'updateSubscription') {

            // const subscription = await Subscription.findById(user.subscription._id)

            // if (!subscription) return

            // const product = await Price.findOne({ stripeProductId: session.plan.product })

            // if (!product) return

            let updatedSubscription;

            if (session.canceled_at) {
                updatedSubscription = await subscription.updateOne({
                    planType: 'none',
                    productId: null,
                    priceId: null,
                    status: 'canceled',
                    subscriptionId: null,
                    hasTrial: false,
                    collectionMethod: null
                });
            } else {
                updatedSubscription = await subscription.updateOne({
                    userId: user._id,
                    planType: product.planType,
                    interval: session.plan.interval,
                    productId: product._id,
                    invoice: session.latest_invoice,
                    priceId: product.stripePriceId,
                    status: session.status,
                    startDate: new Date(session.current_period_start * 1000),
                    amount: session.plan.amount / 100,
                    subscriptionId: session.id,
                    endDate: new Date(session.current_period_end * 1000),
                    hasTrial: session.status === 'trialing' ? true : false,
                    collectionMethod: session.collection_method === 'charge_automatically' ? 'Autopay' : 'Manual'
                });
            }

            if (!updatedSubscription) return

            console.log("subscription updated successfully")
        } else if (type === 'deleteSubscription') {
            // const subscription = await Subscription.findById(user.subscription._id)

            // if (!subscription) return

            // const product = await Price.findOne({ stripeProductId: session.plan.product })

            // if (!product) return

            let updatedSubscription = await subscription.updateOne({
                planType: product.planType,
                interval: session.plan.interval,
                productId: product._id,
                invoice: session.latest_invoice,
                priceId: product.stripePriceId,
                status: 'expired',
                startDate: new Date(session.current_period_start * 1000),
                amount: session.plan.amount / 100,
                subscriptionId: session.id,
                endDate: new Date(session.current_period_end * 1000),
                hasTrial: false,
                collectionMethod: session.collection_method === 'charge_automatically' ? 'Autopay' : 'Manual'
            });


            if (!updatedSubscription) return

            console.log("subscription updated successfully")
        } else if (type === 'trial_end'){

            // const subscription = await Subscription.findById(user.subscription._id)

             // Notify the customer
             await sendTrialWillEndEmail(user.email,session, {
                trialEnd: new Date(session.trialEnd * 1000),
                subscriptionDetails: subscription,
            });

            await subscription.updateOne({
                description:"Your plan is now going to end"
            })
        }

    } catch (error) {
        console.log(error);
    }
};
*/



// get invoice ---------------------------------------------

// const getInvoiceDetail = async (req, res) => {
//     try {

//         const { id } = req.params
//         const invoice = await getInvoice(id)
//         return res.status(200).redirect(invoice.hosted_invoice_url)

//         // return res.status(200).json({
//         //     invoice:invoice.hosted_invoice_url
//         // })

//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({
//             msg: "Internal server error"
//         })
//     }
// }


export {
    checkout,
    // webhook,
    // getInvoiceDetail,
}
