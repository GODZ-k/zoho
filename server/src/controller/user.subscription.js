import User from "../model/user.model.js"


// const manageBilling = async (req, res) => {
//     try {

//         const { _id } = req.user

//         const user = await User.findById(_id)

//         if (!user) {
//             return res.status(422).json({
//                 msg: "Unauthorized access"
//             })
//         }

//         if(!user.subscription){
//             return res.status(404).json({
//                 msg:"subscription not found"
//             })
//         }

//         const session = await createCustomerBillingPortal(user.customerId, 'http://localhost:3000')

//         if (!session) {
//             return res.status(500).json({
//                 msg: "Internal server error"
//             })
//         }

//         return res.status(200).json({
//             session,
//             msg: "Billing portal created successfully"
//         })

//     } catch (error) {
//         return res.status(500).json({
//             msg: "Internal server error"
//         })
//     }
// }



export{
    // manageBilling
}