import React, { useState } from "react";
import {Button , Input , Loading} from "../../index";
import { useNavigate, useParams } from "react-router-dom";
import { changePassword } from "../../../Api/ApiData";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  const { id, token } = useParams();

  const data = {
    newPassword,
    confirmPassword,
  };

  const resetPassword = async () => {
   await changePassword(setLoading , data , setNewPassword , setConfirmPassword , navigate , id , token)
  };


  return (
    <div className="flex px-3 sm:p-4 md:px-0 md:pt-[6%] justify-between w-full flex-col-reverse lg:flex-row">
      <div className="flex py-3 md:py-0 justify-center lg:justify-end">
        <div className="flex md:items-center lg:items-start lg:pt-[25%] lg:pl-[5%] flex-col md:w-[66%]">
          <h1 className="text-3xl pt-[3%] font-bold">
            <span className=" text-blue-500">Reset</span> password 👋{" "}
          </h1>
          <p className=" pt-[3%] pb-[3%] md:text-center lg:text-start lg:pt-[6%] lg:pb-[11%] leading-5 w-full text-sm">
            Don't let a forgotten password lock you out.{" "}
            <span className=" text-blue-500">Reset</span> and step back in.
          </p>
          <div className="">
            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                <Input
                  onChange={(e) => setNewPassword(e.target.value)}
                  type="password"
                  value={newPassword}
                  placeholder="New Password"
                  label="New password"
                  className=" w-full md:w-auto"
                />
              </div>
              <div>
                <Input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  label="Confirm Password"
                  className=" w-full md:w-auto"
                />
              </div>
              <div>
                <Button
                  onClick={resetPassword}
                  className=" text-white bg-blue-500"
                >
                  {loading ? <Loading/> : "Change Password"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className=" rounded-2xl h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[96vh] flex items-center justify-center lg:max-w-[50%]">
        <img
          className=" w-full h-full overflow-hidden object-cover object-center rounded-2xl"
          src="https://pixlr.com/images/index/ai-image-generator-two.webp"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
}

export default ResetPassword;
