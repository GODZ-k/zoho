import React from 'react'
import {Input, Button} from '../../index'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="flex justify-between w-full flex-col-reverse lg:flex-row ">
      <div className="flex py-3 md:py-0 justify-center lg:justify-end">
      <div className="flex md:items-center lg:items-start lg:pt-[5%] lg:pl-[5%] flex-col md:w-[66%]">
          <h1 className="text-3xl pt-[3%] font-bold"><span className=" text-blue-500">Welcome</span> 👋 </h1>
          <p className=" pt-[3%] pb-[3%] md:text-center lg:text-start lg:pt-[6%] lg:pb-[11%] leading-5 w-full text-sm">
            Today is a new day, it's your day. You shape it . Sign up to start
            managing your <span className=" text-blue-500">project</span>
          </p>
        <div className="">
          <form action="">
            <div>
              <Input type="email" placeholder="Example@gmail.com" label="Email" className=" w-full md:w-auto"/>
            </div>
            <div>
              <Input type="password" placeholder="At least 8 characters" label="Password" className=" w-full md:w-auto"/>
            </div>
           
            <div>
              <Button type="submit" className=" text-white bg-blue-500 mt-2">Sign up</Button>
            </div>
          </form>
        </div>
        <div className=" relative border-b-2 w-full md:w-1/2 lg:w-full p-4 text-center">
            <p className=" bg-white top-1/2 left-[40%] md:left-[43%] my-2.5 px-2 absolute">or <span className=" md:hidden text-sm font-semibold">Sign up with</span></p>
        </div>
        <div className=" w-full md:w-[21rem] flex md:flex-col gap-3 lg:w-full mt-10">
            <Button className=" bg-gray-200 text-black flex justify-center items-center "><div className=" w-9">  <img className="inline-block pr-3" src="Google.png" alt="" /></div><span className="hidden md:block pr-1">Sign up with </span> Google</Button>
        {/* </div>
        <div className=" w-1/2 lg:w-full mt-3"> */}
            <Button className=" bg-gray-200 text-black flex justify-center items-center "><div className=" w-9"><img className=" inline-block pr-3 w-full h-full" src="facebook.png" alt="" /></div><span className=" hidden md:block pr-1">Sign up with </span>Facebook</Button>
        </div>
        <div className=" w-full mt-5 flex justify-center gap-1 text-md">
            Already have an account? <Link className=" text-blue-500" to="/login"> Sign in</Link>
        </div>
      </div>
      </div>
      <div className=" rounded-2xl h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[96vh] flex items-center justify-center lg:max-w-[50%]">
        <img
          className=" w-full h-full overflow-hidden object-cover object-top md:object-center rounded-2xl"
          src="https://pixlr.com/images/index/ai-image-generator-two.webp"
          alt=""
          srcset=""
        />
      </div>
    </div>
  )
}

export default Signup