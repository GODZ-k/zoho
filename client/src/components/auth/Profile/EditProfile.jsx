import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  NavLink, useNavigate } from "react-router-dom";
import {Loader, Loading , Input , ProfileNav} from "../../index";
import {
  deleteProfileImage,
  updateProfile,
  updateProfileImage,
} from "../../../Api/ApiData";

function EditProfile() {
  const user = useSelector((state) => state.auth.userProfile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState(user ? user.firstName : "");
  const [lastName, setLastName] = useState(user ? user.lastName : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [phone, setPhone] = useState(user ? user.phone : "");
  const [restaurantName, setRestaurantName] = useState(user ? user.restaurantName : "");
  const [restaurantAddress, setRestaurantAddress] = useState(user ? user.restaurantAddress : "");
  const [selectedImage, setSelectedImage] = useState(null);
  const [gst, setGst] = useState(user ? user.GST : "");
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
  const handleNavbar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
      setRestaurantName(user.restaurantName || "");
      setRestaurantAddress(user.restaurantAddress || "");
      setGst(user.GST || "");
      
    }
  }, [user]);
  if (!user) {
    return <Loader />;
  }
  const profileData = {
    firstName,
    lastName,
    email,
    phone,
    restaurantName,
    restaurantAddress,
    gst,
  };
  // change profile image
  const changeAvatar = async (event) => {
    await updateProfileImage(event, setSelectedImage, dispatch, setIsLoading);
  };
  // update profile
  const handleSubmit = async (event) => {
    await updateProfile(event, setIsLoading, profileData, dispatch, navigate);
  };

  // delete profile image 
  const deleteUserProfileImage = async()=>{
    await deleteProfileImage(setIsLoading , dispatch)
  }
  
  
  return (
    <div className="bg-gray-200 flex justify-center px-2 sm:px-10 md:px-0 gap-2">
      <ProfileNav />
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
                <NavLink
                  key={item.slug}
                  className={({ isActive }) =>
                    `${isActive ? "text-[#1e90ff]" : "text-black"} py-2 flex`
                  }
                  to={item.slug}
                >
                  <div className=" pr-2">{item.avatar}</div>
                  {item.label}
                </NavLink>
              ))}
              <button
                onClick={handleNavbar}
                className="top-0 text-xl  right-0 sm:right-1 lg:hidden absolute"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <h2 className="font-semibold flex justify-between text-lg pb-4 font-sans text-black">
            <span className="">Edit profile  &nbsp; <i className="fa-solid fa-pen-to-square"></i></span>
            {/* {isLoading && (
              <Loader className=" border-b-transparent border-[#000]" />
            )} */}
            <button onClick={handleNavbar} className=" visible md:hidden">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
          </h2>
          <div className="flex gap-4 pb-4 items-center">
            <div className="cursor-pointer relative rounded-full flex justify-center items-center w-16 h-16">
              <img
                src={user?.avatar}
                alt="avatar"
                className="h-full  w-full cursor-pointer rounded-full"
              />
              <input
                type="file"
                accept="image/*"
                onChange={changeAvatar}
                className="absolute   inset-0 w-full h-full opacity-0 cursor-pointer"
                id="file-input"
              />
            </div>
            <button className="cursor-pointer border rounded-lg text-sm px-4 py-2 relative">
              <input
                type="file"
                accept="image/*"
                onChange={changeAvatar}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              Change image
            </button>
            <button onClick={deleteUserProfileImage} className="border rounded-lg text-sm px-5 py-2">
              Delete
            </button>
            {isLoading && (
              <Loading className=" border-b-transparent border-[#000]" />
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            name="firstName"
            type="text"
            placeholder="First name"
            labelClassName="mb-3 text-sm pl-1"
            label="First name"
            className="bg-white rounded-xl w-full"
          />
          <Input
            value={lastName}
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Last name"
            labelClassName="mb-3 text-sm pl-1"
            label="Last name"
            className="bg-white rounded-xl w-full"
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            disable
            type="text"
            placeholder="Email"
            labelClassName="mb-3 text-sm pl-1"
            label="Email"
            className="bg-white rounded-xl w-full"
          />
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            type="number"
            placeholder="Phone"
            labelClassName="mb-3 text-sm pl-1"
            label="Phone"
            className="bg-white rounded-xl w-full"
          />
          
          <div className="my-4">
            <h1 className="font-sans text-xl text-black font-semibold">
              Business Information
            </h1>
          </div>
          <Input
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            name="restaurantName"
            type="text"
            placeholder="Restaurant name"
            labelClassName="mb-3 text-sm pl-1"
            label="Restaurant name"
            className="bg-white rounded-xl w-full"
          />
          <Input
            value={restaurantAddress}
            onChange={(e) => setRestaurantAddress(e.target.value)}
            name="restaurantAddress"
            type="text"
            placeholder="Restaurant address"
            labelClassName="mb-3 text-sm pl-1"
            label="Restaurant address"
            className="bg-white rounded-xl w-full"
          />
          <Input
            value={gst}
            onChange={(e) => setGst(e.target.value)}
            name="gst"
            type="text"
            placeholder="GST"
            labelClassName="mb-3 text-sm pl-1"
            label="GST"
            className="bg-white rounded-xl w-full"
          />
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="border py-2 px-3 rounded-lg bg-[#1e90ff] text-white"
            >
              {isLoading ? <Loading /> : "Save changes"}
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
