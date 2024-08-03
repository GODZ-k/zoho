import React from "react";
import { Link } from "react-router-dom";

function Card({ slug="", image, title, content , readMore }) {
  return (
    <Link to={slug}>
      <div className=" p-6 w-full sm:w-[25rem] border border-black flex flex-col gap-4 rounded-3xl overflow-hidden">
        <div className=" rounded-3xl overflow-hidden flex justify-center items-center">
          <img src={image} alt="" className=" w-full h-full object-center" />
        </div>
        <div className=" flex flex-col gap-3">
          {title && (
            <div className=" text-xl font-semibold">{title}</div>
          )}
          {
            content && (
                <div className=" text-gray-700">{content}</div>
            )
          }
         {
            readMore && (
                <div className=" bg-black text-white w-fit p-3 rounded-md">
                Read more
              </div>
            )
         }
        </div>
      </div>
    </Link>
  );
}

export default Card;
