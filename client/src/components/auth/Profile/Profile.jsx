import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { deleteAccount, otpGenerate, verifyPhone } from "../../../Api/ApiData";
import {Loader , Loading , Input , Button , ProfileNav , Container, ProfileCard} from "../../index"

function Profile() {
  const user = useSelector((state) => state.auth.userProfile);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const navigate =  useNavigate()

  const [isOpen, setIsOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [isLoading , setIsLoading] =  useState(false)
  const [otpGenearted, setOtpGenerated] = useState(false);
  const [otpComponent, setOtpComponent] = useState(false);

  const handleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // const [profileData, setProfileData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   restaurantName: "",
  //   restaurantAddress: "",
  //   gst: "",
  // });

  const ProfileNavItems = [
    {
      label: "Profile",
      slug: "/user/profile",
      avatar: <i className="fa-solid fa-user"></i>,
    },
    {
      label: "Edit profile",
      slug: "/user/edit-profile",
      avatar: <i className="fa-solid fa-pen-to-square"></i>,
    },
    {
      label: "Password",
      slug: "/user/update/password",
      avatar: <i className="fa-solid fa-lock"></i>,
    },
  ];

  // useEffect(() => {
  //   if (user) {
  //     setProfileData({
  //       firstName: user.firstName || "",
  //       lastName: user.lastName || "",
  //       email: user.email || "",
  //       phone: user.phone || "",
  //       restaurantName: user.restaurantName || "",
  //       restaurantAddress: user.restaurantAddress || "",
  //       gst: user.gst || "",
  //     });
  //   }
  // }, [user]);

  // verify user phone
  const verifyUserPhone = async () => {
    try {
      if (!otpGenearted) {
        await otpGenerate(user.phone, setOtpComponent, setOtpGenerated , setIsLoading);
      } else {
        await verifyPhone(otp, setOtpComponent, setOtpGenerated, dispatch , setIsLoading);
      }
    } catch (error) {
      console.log(error);
    }
  };


  // delete user account 
  const deleteUserAccount = async()=>{
    await deleteAccount(navigate , setIsLoading)
  }
  
  if (!user) {
    return <Loader />;
  }

  return (
    <div className="bg-gray-200 ">
      <Container className="px-6 pb-8 pt-24 sm:px-8 md:px-10 flex justify-center gap-2">
      <ProfileCard>
        <div className="relative">
          <div
            ref={ref}
            className={`md:hidden flex justify-center items-center z-10 bg-white h-full w-full absolute transition-all duration-300 ${
              isOpen ? "left-0" : "left-[-125%]"
            }`}
          >
            <div className="px-4 py-3 flex justify-start flex-col">
              {ProfileNavItems.map((item) => (
                <NavLink
                  key={item.slug}
                  className={({ isActive }) =>
                    `${isActive ? "text-[#1e90ff]" : "text-black"} py-2 flex`
                  }
                  to={item.slug}
                >
                  <div className="pr-2">{item.avatar}</div>
                  {item.label}
                </NavLink>
              ))}
              <button
                onClick={handleNavbar}
                className="top-0 text-xl right-0 sm:right-1 lg:hidden absolute"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <h2 className="font-semibold flex justify-between text-lg pb-4 font-sans text-black">
            <span>Profile detail</span>
            <button onClick={handleNavbar} className="visible md:hidden">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </h2>
          <div className="flex gap-4 flex-col pb-4 justify-center items-center">
            <div className="cursor-pointer relative rounded-full flex justify-center items-center w-20 h-20">
              <img
                src={user?.avatar}
                alt="avatar"
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-3xl">{capitalize(user.firstName || "")}</h1>
              <Link className="px-2" to="/user/edit-profile">
                <i className="fa-solid fa-pen-to-square"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="font-semibold border-b flex justify-between text-lg mb-4 pb-4 pt-3 font-sans text-black">
          <span>Personal information</span>
        </div>
        <div className="flex-col sm:flex-row pb-5 flex justify-between">
          <label className="pb-2 sm:pb-0">First name</label>
          <p className="text-sm">{user.firstName || ""}</p>
        </div>
        <div className="flex-col sm:flex-row pb-5 flex justify-between">
          <label className="pb-2 sm:pb-0">Last name</label>
          <p className="text-sm">{user.lastName ? user.lastName : "Null"}</p>
        </div>
        <div className="flex-col sm:flex-row pb-5 flex justify-between">
          <label className="pb-2 sm:pb-0">Email</label>
          <div
            title={
              user.isEmailVerified ? "Verified" : "Please verify your email"
            }
            className="flex"
          >
            <p className="text-sm">{user.email}</p>
            <span className="pl-2">
              {user.isEmailVerified ? (
                <i className="fa-solid fa-circle-check text-green-600"></i>
              ) : (
                <i className="fa-solid fa-circle-xmark text-red-600"></i>
              )}
            </span>
          </div>
        </div>
        <div className="flex-col sm:flex-row pb-3 flex justify-between">
          <label className="pb-2 sm:pb-0">Phone</label>
          <div className=" flex flex-col items-end gap-2">
            <div
              title={
                user.isPhoneVerified
                  ? "Verified"
                  : "Please verify your phone no"
              }
              className="flex"
            >
              <p className="text-sm">
                {user.phone ? `+91${user.phone}` : "Null"}
              </p>
              <span className="pl-2">
                {user.phone ? (
                  user.isPhoneVerified ? (
                    <i className="fa-solid fa-circle-check text-green-600"></i>
                  ) : (
                    <i className="fa-solid fa-circle-xmark text-red-600"></i>
                  )
                ) : (
                  ""
                )}
              </span>
            </div>
            <div className=" flex justify-between items-start gap-2">
              {otpComponent && (
                <Input
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-fit h-fit bg-white rounded-xl "
                  size="10"
                  placeholder="Enter OTP"
                />
              )}
              {(user.phone && !user.isPhoneVerified )&& (
                <Button
                  type="button"
                  onClick={verifyUserPhone}
                  className=" border-black border py-2 px-3 text-black "
                >
                  {isLoading ?  <Loading className=" border-[#000] border-b-transparent"/> : otpGenearted ? "Verify" : "Generate OTP"  }
                  
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="font-semibold border-b flex justify-between text-lg mb-4 pb-4 pt-3 font-sans text-black">
          <span>Business information</span>
        </div>
        <div className="flex-col sm:flex-row pb-5 flex justify-between">
          <label className="pb-2 sm:pb-0">Restaurant name</label>
          <p className="text-sm">{user.restaurantName}</p>
        </div>
        <div className="flex-col sm:flex-row pb-5 flex justify-between">
          <label className="pb-2 sm:pb-0">Restaurant address</label>
          <p className="text-sm">{user.restaurantAddress}</p>
        </div>
        <div className="flex-col sm:flex-row pb-5 flex justify-between">
          <label className="pb-2 sm:pb-0">GST</label>
          <p className="text-sm">{user.gst ? user.gst : "Null"}</p>
        </div>
        <div className=" flex justify-end">
        <button onClick={deleteUserAccount} className=" flex justify-center items-center bg-red-700 text-white border py-2 px-3 rounded-lg">{isLoading ? <Loading className=" border-b-transparent border-[#fff]" />: "Delete account"}</button>

        </div>
       
      </ProfileCard>
      </Container>
    </div>
  );
}

export default Profile;

const capitalize = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
