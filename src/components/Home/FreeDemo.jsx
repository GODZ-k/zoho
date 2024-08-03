import React from 'react'

function FreeDemo() {
  return (
    <div className=" flex justify-center w-full bg-white py-14 px-6 sm:px-8 lg:px-10 ">
    <div className=" flex flex-col-reverse justify-center items-center md:flex-row gap-16 w-[80rem] ">
      <form className=" w-full">
        <div className=" mb-5">
          <h1 className="text-2xl mb-1 font-semibold sm:text-3xl md:text-4xl ">
            Schedule a free demo
          </h1>
          <p className=" text-[15px] sm:text-[17px] text-gray-700 ">
            Get in touch with our team to clarify your queries
          </p>
        </div>
        <div className="">
          <h4 className=" text-[15px] ml-1">Name</h4>
          <input
            type="text"
            className="rounded-xl border border-[#e3e3e3] p-1.5 w-full "
          />
        </div>

        <div className=" flex sm:flex-row flex-col justify-between items-center gap-3 mt-4">
          <div className="inline-block w-full sm:w-1/2">
            <h4 className=" text-[15px]  ml-1">Phone Number</h4>
            <input
              type="number"
              className=" rounded-xl border border-[#e3e3e3] p-1.5 w-full "
            />
          </div>

          <div className="inline-block w-full sm:w-1/2">
            <h4 className=" text-[15px]  ml-1">Email</h4>
            <input
              type="email"
              className=" rounded-xl border border-[#e3e3e3] p-1.5 w-full "
            />
          </div>
        </div>

        <div className="mt-4">
          <h4 className=" text-[15px]  ml-1">City</h4>
          <input
            type="text"
            className=" rounded-xl border border-[#e3e3e3] p-1.5 w-full "
          />
        </div>
        <div className="mt-4">
          <h4 className=" text-[15px]  ml-1">Restaurant Name</h4>
          <input
            type="text"
            className=" rounded-xl border border-[#e3e3e3] p-1.5 w-full "
          />
        </div>

        <div className=" flex justify-end items-center w-full mt-4">
          <button className="  border bg-black rounded-lg text-whitem px-4 py-3 font-semibold text-white">
            Submit
          </button>
        </div>
      </form>
      <div className=" w-full sm:w-[90%]">
        <img
        loading="lazy"
          src="./demoCall.jpg"
          className=" w-full h-full"
        />
      </div>
    </div>
  </div>
  )
}

export default FreeDemo