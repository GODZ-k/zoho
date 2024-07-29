import React from "react";
import { Link } from "react-router-dom";

function HomeCard({ icon, content, name, to }) {
  return (
    <Link to={to} className=" items-center my-8 flex gap-5 w-full">
      <div className=" w-16 h-16 pt-1 text-2xl flex justify-center items-center  text-blue-400">
        <img className=" w-full h-full object-cover object-center" src={`/featured_section/${icon}`}alt="" />
      </div>
      <div>
        <div className=" font-semibold text-xl">{name}</div>
        {/* <div className=" text-gray-600 text-sm flex ">
          <div >{content}</div>
          <div>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div> */}
      </div>
    </Link>
  );
}

export default HomeCard;
