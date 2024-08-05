

// for admin use only ( protected )

import Staff from "../model/staff.model.js"
import { registerStaffType } from "../utils/Types.js"

const registerStaff = async (req, res) => {
    try {
        
        const {_id} =  req.user
        const inputData =  req.body

        if(!inputData.email || !inputData.password){
            return res.status(400).json({
                msg:"All field must be required"
            })
        }

        const payload = registerStaffType.safeParse(inputData)

        if(!payload.success){
            return res.status(400).json({
                msg:"Please enter valid input"
            })
        }

        const admin  = await Staff.findById(_id)

        if(!admin){
            return res.status(404).json({
                msg:"Admin not found"
            })
        }

        if(admin.role !== 'admin'){
            return res.status(422).json({
                msg:"You are not authorized to complete this task , only admin have access to done this task"
            })
        }


        const {email , password} = payload.data

        const staff =  await Staff.findOne({
            email
        })


        if(staff){
            return res.status(400).json({
                msg:"Staff already exists"
            })
        }


        await Staff.create({
            email,
            password,
            role:'staff'
        })


        return res.status(200).json({
            msg:"Staff created successfully"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}


export {
    registerStaff
}