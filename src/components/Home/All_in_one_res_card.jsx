import React from 'react'

function All_in_one_res_card({icon}) {
  return (
    <div className=" w-28 h-28 sm:w-48 sm:h-48">
        <img className=" w-full h-full object-cover object-center" src={`./allinonerestaurant/${icon}`} alt="" />
    </div>
  )
}

export default All_in_one_res_card