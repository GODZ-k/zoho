import { generateRandomString } from 'random-string-generator-library'


// generte access and refresh token --------------------------

const generateAccessAndRefreshToken = async (userId,User) => {
    try {
        const user = await User.findById(userId)

        if (!user) {
            return res.status(400).json({
                msg: "user not found"
            })
        }

        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }

    } catch (error) {
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}



// generate OTP -------------------------------------

const generatedOtp = (n) => {
    const number = "1234567890";
    let otp = "";
    for (let i = 0; i < n; i++) {
      otp += number[Math.floor(Math.random() * number.length)];
    }
    return otp;
  };
  

// generate verification token -----------------------------

  const generateVerificationToken = (n) => {
    return generateRandomString(n);
};


export {
    generateAccessAndRefreshToken,
    generatedOtp,
    generateVerificationToken
}