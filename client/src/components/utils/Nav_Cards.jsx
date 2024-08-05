import React from "react";
import { Link } from "react-router-dom";

function Nav_Cards({ icon, to, name, content , className }) {
  return (
    <div className={`${className} hover:bg-[#f8f9fb] rounded-md w-80 mr-[2%] mb-3 py-5 px-5`}>
      <Link to={to} className=" flex gap-3">
        <div className=" pt-1 text-blue-400 text-3xl">{icon}</div>
        <div className="">
          <label className=" uppercase text-2xl font-light block">{name}</label>
          <div className=" w-[80%] text-sm text-gray-500">{content}</div>
        </div>
      </Link>
    </div>
  );
}

export default Nav_Cards;
