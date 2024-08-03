import React from "react";
import { Card, Container } from "../../components";

function About_page() {
  return (
    <div className=" pt-16">
      <div className=" relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] ">
        <img
          className=" w-full h-full bg-black object-cover object-bottom sm:object-center"
          src="https://res.cloudinary.com/djibehlqi/image/upload/v1722667600/IMG_3268_twwrjc.jpg"
          alt=""
        />
        <div className=" absolute top-0 left-0 flex justify-center items-end bg-[#000000a8] h-full w-full text-white">
          <div className=" px-6 pb-[15%] md:pb-[10%] sm:px-8 md:px-10  w-full flex justify-center  ">
            <div className=" w-full md:w-[50rem] flex flex-col items-center gap-2">
              <div className="  text-3xl sm:text-5xl md:text-6xl font-semibold">
                Welcome to <span className=" text-[#ffe988]">QRDine-in</span>
              </div>
              <div className=" text-gray-300 text-sm sm:text-base text-center">
                The vision at QRDine-In is to provide the best software
                solutions for restaurants in India. We offer best-in-class POS
                solutions, restaurant management software, restaurant billing,
                and inventory management solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  px-6 sm:px-8 md:px-10 lg:px-20">
        <div className=" flex justify-evenly my-20 sm:flex-row flex-col items-center ">
          <div className=" w-fit md:w-[40rem] flex flex-col gap-3">
            <div className=" text-4xl sm:text-5xl font-semibold">
              Our Mission
            </div>
            <div className=" text-base sm:text-lg">
              We are a dedicated team of technology with great affection and
              combining that to help restaurants transform. Our vision is to
              improve the restaurant management processes with the help of the
              best tools and technologies.
            </div>
          </div>
          <div className=" w-full sm:w-[30rem]">
            <img src="10.png" className=" w-full h-full object-center" alt="" />
          </div>
        </div>

        <div className=" flex justify-center w-full">
          <div className="text-4xl sm:text-5xl font-semibold">Our Services</div>
        </div>
        {/* <div className=" my-20 flex justify-evenly gap-5 flex-wrap">
        <Card
        title={"Restaurant POS Software"}
        image={"10.png"}
        content={"Streamline your operations with our user-friendly POS system, designed to handle everything from order taking to payment processing effortlessly."}
        />
         <Card
        title={"Restaurant Management Software"}
        image={"10.png"}
        content={"Manage your entire restaurant business with ease. Our software offers powerful tools for inventory management, staff scheduling, and performance tracking."}
        />
         <Card
        title={"Restaurant Billing Software"}
        image={"10.png"}
        content={"Ensure accurate and efficient billing with our advanced software. Reduce errors and speed up transactions while providing a seamless experience for your customers."}
        />
      </div> */}
        <div className=" w-full flex justify-center items-center">
          <div className=" flex justify-center flex-wrap gap-4 my-20 w-[80rem] mx-auto ">
            <div className=" w-full sm:w-[20rem] border rounded-2xl px-4 py-6 border-black flex flex-col gap-2">
              <div className=" font-semibold text-xl">
                Restaurant POS Software
              </div>
              <div>
                Streamline your operations with our user-friendly POS system,
                designed to handle everything from order taking to payment
                processing effortlessly.
              </div>
            </div>
            <div className=" w-full  sm:w-[20rem] border rounded-2xl p-4 border-black flex justify-center items-center">
              <img
                className=" w-full h-full items-center"
                src="10.png"
                alt=""
              />
            </div>
            <div className="  w-full  sm:w-[20rem] border rounded-2xl px-4 py-6 border-black flex flex-col gap-2">
              <div className=" font-semibold text-xl">
                Restaurant POS Software
              </div>
              <div>
                Streamline your operations with our user-friendly POS system,
                designed to handle everything from order taking to payment
                processing effortlessly.
              </div>
            </div>
            <div className=" w-full  sm:w-[20rem] border rounded-2xl p-4 border-black flex justify-center items-center">
              <img
                className=" w-full h-full items-center"
                src="10.png"
                alt=""
              />
            </div>
            <div className="  w-full  sm:w-[20rem] border rounded-2xl px-4 py-6 border-black flex flex-col gap-2">
              <div className=" font-semibold text-xl">
                Restaurant POS Software
              </div>
              <div>
                Streamline your operations with our user-friendly POS system,
                designed to handle everything from order taking to payment
                processing effortlessly.
              </div>
            </div>
            <div className="  w-full  sm:w-[20rem] border rounded-2xl p-4 border-black flex justify-center items-center">
              <img
                className=" w-full h-full items-center"
                src="10.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className=" text-center font-semibold text-4xl lg:text-5xl my-20">Why QRDine-In</div>

        <div className=" my-20 border-b-gray-300 border-b">
          <div className="  flex justify-evenly items-center sm:flex-row flex-col">
            <div className=" w-fit sm:w-[40rem] flex flex-col gap-3">
                <div className=" text-4xl sm:text-5xl font-semibold">
                Tailored Solutions
                </div>
                <div className=" md:text-lg  text-base">
                We design software specifically for the restaurant industry, providing tools that meet your unique needs and enhance your operations.
                </div>
            </div>
            <div className=" w-full sm:w-[30rem]">
              <img src="10.png" className=" h-full w-full object-center" alt="" />
            </div>
          </div>
        </div>
        <div className=" my-20 border-b-gray-300 border-b">
          <div className=" flex justify-evenly items-center sm:flex-row-reverse flex-col">
            <div className=" w-fit sm:w-[40rem] flex flex-col gap-3">
                <div className=" text-4xl sm:text-5xl font-semibold">
                User-Friendly Interfaces
                </div>
                <div className=" md:text-lg  text-base">
                Our intuitive software simplifies tasks for your staff, minimizing training time and boosting overall efficiency.
                </div>
            </div>
            <div className=" w-full sm:w-[30rem]">
              <img src="10.png" className=" h-full w-full object-center" alt="" />
            </div>
          </div>
        </div>
        <div className=" my-20 border-b-gray-300 border-b">
          <div className=" flex justify-evenly items-center sm:flex-row flex-col">
            <div className=" w-fit sm:w-[40rem] flex flex-col gap-3">
                <div className=" text-4xl sm:text-5xl font-semibold">
                Innovative Technology
                </div>
                <div className=" md:text-lg  text-base">
                Benefit from our state-of-the-art technology that adapts to industry changes, keeping you ahead of the competition.
                                </div>
            </div>
            <div className=" w-full sm:w-[30rem]">
              <img src="10.png" className=" h-full w-full object-center" alt="" />
            </div>
          </div>
        </div>
        <div className=" my-20 border-b-gray-300 border-b">
          <div className=" flex justify-evenly items-center sm:flex-row-reverse flex-col">
            <div className=" w-fit sm:w-[40rem] flex flex-col gap-3">
                <div className=" text-4xl sm:text-5xl font-semibold">
                Exceptional Support
                </div>
                <div className=" md:text-lg  text-base">
                Our dedicated support team is available to assist you at every stage, ensuring you fully leverage our software’s capabilities.
                </div>
            </div>
            <div className=" w-full sm:w-[30rem]">
              <img src="10.png" className=" h-full w-full object-center" alt="" />
            </div>
          </div>
        </div>


      <div className=" flex flex-col items-center justify-center gap-6 my-20">
        <div className=" text-4xl text-center font-semibold sm:text-5xl">
        Join Us on Our Journey
        </div>
        <div className=" w-fit md:max-w-[50rem] text-center text-gray-600">
        We are committed to transforming the restaurant experience through technology. Explore our solutions today and see how QRDine-In can make a difference in your restaurant’s success.
        </div>
        <button className=" rounded-md w-fit p-3 font-semibold bg-black text-white">
            Join now
        </button>
      </div>
      </div>
    </div>
  );
}

export default About_page;
