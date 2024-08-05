import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function ProfileNav() {


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

  return (
    <div className="bg-white h-fit shadow-sm rounded-xl border-gray-400 hidden md:block md:w-[13rem]">
    <div className=" px-4 py-3 flex flex-col">
      {ProfileNavItems.map((item ) => (
        <NavLink key={item.slug} className={({isActive})=> `${isActive ? 'text-[#1e90ff]' : 'text-black'} py-2 flex`} to={item.slug}>
          <div className=" pr-2">{item.avatar}</div>
          {item.label}
        </NavLink>
      ))}
    </div>
  </div>
  )
}

export default ProfileNav