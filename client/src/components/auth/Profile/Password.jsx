import React, { useState, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

import {Loading , ProfileNav , Input , Container} from "../../index";
import { updatePassword } from "../../../Api/ApiData";

function Password() {
  const user = useSelector((state) => state.auth.userProfile);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [loading , setLoading ]= useState(false)
  const [oldPassword , setOldPassword] = useState('')
  const [newPassword , setNewPassword] =  useState('')
  const [confirmPassword , setConfirmPassword] =  useState('')


  const handleNavbar = () => {
    setIsOpen(!isOpen);
  };


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

;

const passwordData = {
    oldPassword,
    newPassword,
    confirmPassword
}

  const handleSubmit = async (event) => {
   await updatePassword(setLoading,event , passwordData , setConfirmPassword , setOldPassword , setNewPassword ,dispatch ,navigate)
  };

  return (
    <div className="bg-gray-200 ">
      <Container className="px-6 sm:px-8 md:px-10 flex justify-center gap-2">
      <ProfileNav/>
      <div className=" rounded-xl bg-white m-3 shadow-sm border-gray-400 w-full md:w-[70%]  lg:w-[40%] py-3 px-4">
        <div className=" relative">
          <div
            ref={ref}
            className={` md:hidden flex justify-center items-center z-10 bg-white h-full w-full absolute transition-all duration-300 ${
              isOpen ? "left-0" : "left-[-125%]"
            }`}
          >
            <div className=" px-4 py-3 flex justify-start flex-col">
              {ProfileNavItems.map((item) => (
                 <NavLink className={({isActive})=> `${isActive ? 'text-[#1e90ff]' : 'text-black'} py-2 flex`} to={item.slug}>
                 <div className=" pr-2">{item.avatar}</div>
                 {item.label}
               </NavLink>
              ))}
              <button onClick={handleNavbar} className="top-0 text-xl  right-0 sm:right-1 lg:hidden absolute">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <h2 className="font-semibold flex justify-between text-lg pb-4 font-sans text-black">
            <span className="">Edit Password  &nbsp; <i class="fa-solid fa-lock"></i>  </span>
            <button onClick={handleNavbar} className=" visible md:hidden">
              <i class="fa-solid fa-pen-to-square"></i>
              
            </button>
            {loading && (
              <Loading className=" border-b-transparent border-[#000]" />
            )}
          </h2>
          <div className="flex gap-4 justify-center pb-4 items-center">
            <div className="cursor-pointer relative rounded-full flex justify-center items-center w-16 h-16">
              <img
                src={user?.avatar}
                alt="avatar"
                className="h-full w-full rounded-full"
              />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            name="oldPassword"
            type="password"
            onChange={(e)=> setOldPassword(e.target.value)}
            placeholder="Password"
            labelClassName="mb-3 text-sm pl-1"
            label="Old password"
            className="bg-white rounded-xl w-full"
          />
          <Input
            name="newPassword"
            type="password"
            onChange={(e)=> setNewPassword(e.target.value)}
            placeholder="New password"
            labelClassName="mb-3 text-sm pl-1"
            label="New password"
            className="bg-white rounded-xl w-full"
          />
           <Input
            name="confirmPassword"
            onChange={(e)=> setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm password"
            labelClassName="mb-3 text-sm pl-1"
            label="Confirm password"
            className="bg-white rounded-xl w-full"
          />
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="border min-w-[20%] py-2 px-3 flex justify-center items-center rounded-lg bg-[#1e90ff] text-white"
            >
               {loading ? <Loading/> : "Update password"}
            </button>
          </div>
        </form>
      </div>
      </Container>
    </div>
  );
}

export default Password;
