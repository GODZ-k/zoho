import { Transporter } from "../app.js";



// send mail when admin creates user 
const userCreateMail = async (firstName, email, password, frontendLoginUrl) => {
    try {
        const mailOptions = {
            from: "tdm.katts1@gmail.com",
            to: email,
            subject: `Welcome to K and A Technology pvt Ltd`,
            text: `
            Dear ${firstName},

            Welcome to K and A !
        
            We are pleased to inform you that your user account has been successfully created by our staff. Below are your account details:
        
            - User ID: ${email}
            - Password: ${password}
        
            You can now log in to your account using the credentials provided above. We recommend that you change your password after your first login to ensure your account's security.
        
            To log in, please visit: ${frontendLoginUrl}
        
            If you have any questions or need further assistance, feel free to contact our support team at support@kanda.com or +1212121212.
        
            Thank you for joining us, and we look forward to serving you!
        
            Best regards,
        
            [Your Name]
            [Your Position]
            [Your Company]
            [Company Website]
            [Company Contact Information]
            `,
        };

        const response = await Transporter.sendMail(mailOptions);

        return response

    } catch (error) {
        console.log(error)
    }
}


// send user verification mail --------
const verifyUserMail = async (email, verificationLink) => {
    try {
        const mailOptions = {
            from: "tdm.katts1@gmail.com",
            to: email,
            subject: "Please verify your email",
            text: `To verify your email, click the link ${verificationLink}`,
        };

        const response = await Transporter.sendMail(mailOptions);

        return response
    } catch (error) {
        console.log(error)
    }
}


// send user forget password mail ------
const userForgotPasswordMail = async (token, user , email) =>{
    try {
        const mailOptions = {
            from: "tdm.katts1@gmail.com",
            to: email,
            subject: "password reset",
            text: `To reset your password , click on this link http://localhost:5173/user/reset-password/${user}/${token}`,
        };

        const response = await Transporter.sendMail(mailOptions);

        return response
        
    } catch (error) {
        console.log(error)
    }
}

// send mail when trial ends ----
const sendTrialWillEndEmail = async (email, session, { trialEnd, subscriptionDetails }) => {
    try {
        const mailOptions = {
            from: "tdm.katts1@gmail.com",
            to: email,
            subject: "Your trial period is ending soon!",
            text: `
            Hello,
    
            We wanted to remind you that your trial period for our service will end on ${trialEnd.toDateString()}.
            
            Your current plan: ${subscriptionDetails.planType}
            Upcoming charge: ${subscriptionDetails.amount / 100} ${session.currency}
    
            If you have any questions or need to make changes to your subscription, please contact our support team.
    
            Thank you for using our service!
    
            Best regards,
            Your Company
        `
        }

        const response = await Transporter.sendMail(mailOptions);

        if (!response) {
            console.log("failed to send email")
        }

        console.log("Mail sended successfully")
    } catch (error) {
        console.log(error)
    }

}



// mail send before the expiration of subscription -----
const sendTrialExpirationMail = async (email) => {
    try {
        const mailOptions = {
            from: 'tdm.katts1@gmail.com',
            to: email,
            subject: 'Your Free Trial is Ending Soon',
            text: 'Please continue your plan. Visit our website to choose a plan.'
        };

        const response = await Transporter.sendMail(mailOptions)
            .then((res) => {
                console.log("mail sended successfully", res)
            })
            .catch((err) => {
                console.log("error send mail to the user", err)
            })
        return response

    } catch (error) {
        console.log(error)
    }
}

const sendExpirationMail = async (email) => {
    try {
        const mailOptions = {
            from: 'tdm.katts1@gmail.com',
            to: email,
            subject: 'Your plan is Ending Soon',
            text: 'Please continue your plan. Visit our website to choose a plan or renew the plan .'
        };

        const response = await Transporter.sendMail(mailOptions)
            .then((res) => {
                console.log("mail sended successfully", res)
            })
            .catch((err) => {
                console.log("error send mail to the user", err)
            })
        return response

    } catch (error) {
        console.log(error)
    }
}


export {
    sendTrialExpirationMail,
    sendExpirationMail,
    sendTrialWillEndEmail,
    userCreateMail,
    verifyUserMail,
    userForgotPasswordMail
}