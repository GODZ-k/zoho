import jwt from 'jsonwebtoken'
import User from '../model/user.model.js';



const verifyJWT = async (req, res, next) => {
    try {
        let token;
        if (req.cookies) {
            token = req.cookies.accessToken;
        } else {
            token = req.headers.authorization.split(" ")[1];
        }

        /*
              let token;
     if (req.cookies && req.cookies.accessToken) {
         token = req.cookies.accessToken;
     } else if (req.headers.authorization) {
         const authHeader = req.headers.authorization;
         if (authHeader.startsWith("Bearer ")) {
             token = authHeader.split(" ")[1];
         }
     } 
        */

        if (!token) {
            return res.status(404).json({
                msg: "Unauthorized access"
            })
        }

        const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);

        if (!user) {
            return res.status(422).json({
                msg: "Unauthorized access",
            });
        }

        req.user = user

        next()

    } catch (error) {
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}

const verifyResetPasswordToken = async(req,res,next)=>{
    try {
        const { id, token } = req.params

        const user = await User.findById(id)

        if (!user.verificationToken || user.verificationToken !== token) {
            return res.status(422).json({
                msg: "Invalid token or token expired"
            })
        }

        if (!user) {
            return res.status(422).json({
                msg: "Unauthorized request"
            })
        }

        if (!user.isEmailVerified) {
            return res.status(400).json({
                msg: "Please verify your email first"
            })
        }

        req.user = user
        next()

    } catch (error) {
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}

export { verifyJWT , verifyResetPasswordToken}