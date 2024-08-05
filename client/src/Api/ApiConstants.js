import { backendApiUrl } from "../../config";

export const ApiURL = {
    registerUser: `${backendApiUrl}/user/register`,
    login:`${backendApiUrl}/user/login`,
    profile:`${backendApiUrl}/user/profile`,
    logout:`${backendApiUrl}/user/logout`,
    forgotPassword:`${backendApiUrl}/user/forgot-password`,
    changePassword:`${backendApiUrl}/user/reset-password`,
    updateProfileImage:`${backendApiUrl}/user/update/avatar`,
    updateProfile:`${backendApiUrl}/user/update/profile`,
    generateOtp:`${backendApiUrl}/user/update/phone`,
    verifyPhone:`${backendApiUrl}/user/update/phone/verify`,
    updatePassword:`${backendApiUrl}/user/update/password`,
    deleteUserAccount:`${backendApiUrl}/user/delete/account`,
    deleteProfileImage:`${backendApiUrl}/user/delete/profile-image`
}

