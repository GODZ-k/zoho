import axios from "axios"
import { login, logout, updateAvatar, updateUserProfile, verifyOtp , deleteAvatar } from "../redux/features/AuthSlice"
import { toast } from "react-toastify";
import {  ApiURL } from "./ApiConstants";

// get user profile
const getProfile = async (dispatch) => {
  try {
    await axios.get(ApiURL.profile, {
      withCredentials: true,
    }).then((response) => {
      dispatch(login(response.data.user));
    })
  } catch (error) {
    console.error("Error fetching profile data", error);
  }
};
// user login
const userLogin = async (setError, setIsLoading, navigate, dispatch, data) => {
  setError(" ")
  setIsLoading(true)
  try {
    await axios.post(ApiURL.login, data, {
      withCredentials: true
    })
      .then((res) => {
        dispatch(login(res.data.user))
        setIsLoading(false)
        toast.success(res.data.msg)
        navigate('/user/dashboard')
      })

  } catch (error) {
    setIsLoading(false)
    toast.error(error.response.data.msg)
  }
}
// user signup
const userSignUp = async(setIsLoading,setError , data , navigate)=>{
  try {
  setError('')
  setIsLoading(true)
  await axios.post(ApiURL.registerUser , data)
   .then((res)=>{
    setIsLoading(false)
     toast.success(res.data.msg)
     navigate('/login')
   })
  } catch (error) {
    setIsLoading(false)
    setError(error.response.data.msg)
  }
}
// forgot password
const passwordForgot = async (setLoading, setEmail, email) => {
  try {
    setLoading(true)
    await axios.post(ApiURL.forgotPassword, {
      email
    }).then((res) => {
      setLoading(false)
      setEmail("")
      toast.success(res.data.msg)
    })

  } catch (error) {
    setLoading(false)
    setEmail("")
    toast.error(error.response.data.msg)
  }
}
// change password 
const changePassword = async(setLoading , data , setNewPassword , setConfirmPassword , navigate , id , token)=>{
  try {
    setLoading(true)
    await axios.post(
      `${ApiURL.changePassword}/${id}/${token}`,
      data
    )
    .then((res)=>{
      setNewPassword("")
      setConfirmPassword("")
      setLoading(false)
      toast.success(res.data.msg)
      navigate('/login')
    })
  } catch (error) {
    setLoading(false)
    setNewPassword("")
    setConfirmPassword("")
    toast.error(error.response.data.msg);
  }
}
// logout
const userLogout = async (dispatch, navigate) => {
  try {
    await axios
      .get(ApiURL.logout, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(logout());
        toast.success(res.data.msg);
        navigate("/login");
      });
  } catch (error) {
    console.log(error);
  }
}
// update profile image
const updateProfileImage = async (event, setSelectedImage, dispatch , setIsLoading) => {
  try {
    setIsLoading(true)
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      const formData = new FormData();
      formData.append("avatar", file);

      const response = await axios.post(
        ApiURL.updateProfileImage,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      setIsLoading(false)
      dispatch(updateAvatar(response.data.avatar));
      toast.success(response.data.msg);
    }

  } catch (error) {
    setIsLoading(false)
    toast.error(error.response.data.msg);
  }
}
// update user profile 
const updateProfile = async (event, setIsLoading, profileData, dispatch, navigate) => {
  event.preventDefault();
  setIsLoading(true);
  try {
    const response = await axios.post(ApiURL.updateProfile, profileData, {
      withCredentials: true,
    }
    );
    dispatch(updateUserProfile(response.data.userData));
    toast.success(response.data.msg);
    setIsLoading(false);
    navigate('/user/profile')
  } catch (error) {
    toast.error(error.response.data.msg);
    setIsLoading(false);
  }
}
// generate otp 
const otpGenerate = async (phone, setOtpComponent, setOtpGenerated , setIsLoading) => {
  try {
    setIsLoading(true)
    await axios.post(ApiURL.generateOtp, { phone }, { withCredentials:true})
      .then((res) => {
        setOtpComponent(true);
        setOtpGenerated(true);
        setIsLoading(false)
        toast.success(res.data.msg);
      });
  } catch (error) {
    setIsLoading(false)
    toast.error(error.response.data.msg);
  }
}
// verify phone 
const verifyPhone = async (otp, setOtpComponent, setOtpGenerated, dispatch , setIsLoading) => {
  try {
    setIsLoading(true)
    await axios.post(ApiURL.verifyPhone, { otp }, { withCredentials: true })
      .then((res) => {
        setOtpComponent(false);
        setOtpGenerated(false);
        setIsLoading(false)
        toast.success(res.data.msg);
        dispatch(verifyOtp());
      });
  } catch (error) {
    setIsLoading(false)
    toast.error(error.response.data.msg);

  }
}
// update password 
const updatePassword =  async(setLoading,event , passwordData , setConfirmPassword , setOldPassword , setNewPassword ,dispatch ,navigate)=>{
    setLoading(true)
    event.preventDefault();
    try {
      const response = await axios.post(
        ApiURL.updatePassword,
        passwordData,
        {
          withCredentials:true
        }
      );
      setLoading(false)
      toast.success(response.data.msg);
      setConfirmPassword('')
      setOldPassword('')
      setNewPassword('')
      dispatch(logout())
      navigate('/login')
    } catch (error) {
      setLoading(false)
      setConfirmPassword('')
      setOldPassword('')
      setNewPassword('')
      toast.error(error.response.data.msg);
    }
}
// delete user account 
const deleteAccount = async(navigate,setIsLoading)=>{
  try {
    setIsLoading(true)
    await axios.post(ApiURL.deleteUserAccount,{},{withCredentials:true})
    .then((res)=>{
      toast.success(res.data.msg)
      setIsLoading(false)
      navigate("/login")
    })
  } catch (error) {
    setIsLoading(false)
    toast.error(error.response.data.msg)
  }
}
// delete profile image
const deleteProfileImage = async(setIsLoading,dispatch)=>{
  try {
    setIsLoading(true)
    await axios.get(ApiURL.deleteProfileImage,{withCredentials:true})
  .then((res)=>{
    setIsLoading(false)
    dispatch(deleteAvatar())
    toast.success(res.data.msg)
  })
  } catch (error) {
    setIsLoading(false)
    toast.error(error.response.data.msg)
  }
}


export {
  getProfile,
  userLogin,
  passwordForgot,
  userLogout,
  updateProfileImage,
  updateProfile,
  otpGenerate,
  verifyPhone,
  changePassword,
  updatePassword,
  deleteAccount,
  deleteProfileImage,
  userSignUp
}