import React from "react";
import { Link } from "react-router-dom";

function HomeCard({ icon, content, name, to }) {
  return (
    <Link to={to} className=" items-center justify-start my-8 flex gap-5 w-full">
    <div>
    <div className=" w-16 h-16 pt-1 text-2xl flex justify-center items-center  text-blue-400">
        <img loading='lazy' className=" w-full h-full" src={icon}alt="" />
      </div>
    </div>
      <div>
        <div className=" flex justify-center items-center w-fit font-semibold text-xl">{name}</div>
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
