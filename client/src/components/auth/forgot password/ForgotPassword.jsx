import React, { useState } from 'react'
import { Input , Button , Loading} from '../../index'
import { passwordForgot } from '../../../Api/ApiData'

function ForgotPassword() {

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const forgotPassword = async()=>{
   await passwordForgot(setLoading,setEmail,email)
  }

  return (
    <div className="flex justify-between w-full flex-col-reverse lg:flex-row">
    <div className="flex py-3 md:py-0 justify-center lg:justify-end">
    <div className="flex md:items-center lg:items-start lg:pt-[25%] lg:pl-[5%] flex-col md:w-[66%]">
        <h1 className="text-3xl pt-[3%] font-bold"><span className=" text-blue-500">Forgot</span> password 👋 </h1>
        <p className=" pt-[3%] pb-[3%] md:text-center lg:text-start lg:pt-[6%] lg:pb-[11%] leading-5 w-full text-sm">
        Don't let a forgotten password lock you out. <span className=" text-blue-500">Reset</span> and step back in. 
        </p>
      <div className="">
        <form  onSubmit={e => e.preventDefault()}>
          <div>
            <Input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Example@gmail.com" label="Email" className=" w-full md:w-auto"/>
          </div>
          <div>
            <Button onClick={forgotPassword} className=" text-white bg-blue-500">{loading ? <Loading/> : "Submit"}</Button>
          </div>
        </form>
      </div>
    </div>
    </div>
    <div className=" rounded-2xl h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[96vh] flex items-center justify-center lg:max-w-[50%]">
      <img
        className=" w-full h-full overflow-hidden object-cover object-top rounded-2xl"
        src="https://pixlr.com/images/index/ai-image-generator-two.webp"
        alt=""
        srcset=""
      />
    </div>
  </div>
  )
}

export default ForgotPassword