import React from 'react'

function All_in_one_res_card({icon}) {
  return (
    <div className=" w-32 h-32 sm:w-52 sm:h-52">
        <img className=" w-full h-full object-cover object-center" src={`./allinonerestaurant/${icon}`} alt="" />
    </div>
  )
}

export default All_in_one_res_card