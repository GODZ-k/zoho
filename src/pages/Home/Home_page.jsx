import React from "react";
import { HomeCard, Nav_Cards } from "../../components";

function Home_page() {
  const featuredApps = [
    {
      name: "Social",
      to: "/",
      content: "Comprehensive CRM platform for customer-facing teams.",
      icon: <i className="fas fa-users"></i>,
    },
    {
      name: "Social",
      to: "/",
      content: "Comprehensive CRM platform for customer-facing teams.",
      icon: <i className="fas fa-users"></i>,
    },
    {
      name: "Social",
      to: "/",
      content: "Comprehensive CRM platform for customer-facing teams.",
      icon: <i className="fas fa-users"></i>,
    },
    {
      name: "Social",
      to: "/",
      content: "Comprehensive CRM platform for customer-facing teams.",
      icon: <i className="fas fa-users"></i>,
    },
    {
      name: "Social",
      to: "/",
      content: "Comprehensive CRM platform for customer-facing teams.",
      icon: <i className="fas fa-users"></i>,
    },
  ];

  return (
    <div>
      <div className=" px-5 sm:px-0 relative z-[-1] flex lg:flex-row gap-12 lg:gap-0 flex-col items-center lg:items-start justify-evenly flex-wrap pt-[30%] sm:pt-40 pb-20 bg-[#f8f9fb]">
        <div className=" w-full text-center lg:text-start  lg:w-[35%] px-2 xl:px-14">
          <div>
            <div className=" text-5xl text-black pb-8">
              The all solution with achieving success of restaurants
            </div>
            <div className=" text-[22px] mt-5 mb-10 font-light">
              Done by us streamlines restaurant operations, offering contactless
              dining solutions for efficient management and enhanced customer
              experience.
            </div>
            <div className=" font-semibold  mt-5 mb-10 text-lg md:text-[18px]">
              Let the flavour meets innovation with Paperless soultion!
            </div>
            <div className=" flex justify-center lg:justify-start">
              <button className=" relative  flex justify-between gap-10 bg-[#ffde48] rounded-sm text-black font-semibold px-6 py-4">
                <div className=" text-[18px]">Book A Free Demo</div>
                {/* <i className=" absolute right-0 -bottom-5 text-4xl text-black fa-solid fa-arrow-pointer"></i> */}
                <div className=" absolute -right-2 -bottom-2 w-8 h-8">
                  <img className=" w-full h-full " src="icon.png" alt="" />
                </div>
              </button>
            </div>
            {/* <div className=" w-full lg:w-[70%] -bottom-0 left-24 lg:absolute z-[-1]">
              <img
                src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-homev2-banner-india-3.webp"
                alt=""
              />
            </div> */}
          </div>
        </div>
        <div className="">
          <img src="firstcreative.png" alt="" />
        </div>
      </div>

      {/* restaurant showcase banner */}
      <div className=" bg-[#f8f9fb] text-center">
        <div className=" py-16 sm:py-28 mx-4 sm:mx-24 md:mx-44 flex gap-4 flex-col items-center">
          <div className=" relative uppercase font-light text-gray-800 text-sm inline-block">
            Brand That trust us
            <div className=" border-b top-3 right-1/2 border-b-red-800 absolute"></div>
          </div>
          <div className=" w-full overflow-hidden flex justify-center items-center">
            <div className="scroll-content flex">
              <div className="w-32">
                <img
                  className="w-full"
                  src="https://i.postimg.cc/ht5tLP3q/amazon-png-logo-vector-6695.png"
                  alt=""
                />
              </div>
              <div className="w-32">
                <img
                  className="w-full"
                  src="https://i.postimg.cc/ht5tLP3q/amazon-png-logo-vector-6695.png"
                  alt=""
                />
              </div>
              <div className="w-32">
                <img
                  className="w-full"
                  src="https://i.postimg.cc/ht5tLP3q/amazon-png-logo-vector-6695.png"
                  alt=""
                />
              </div>
              <div className="w-32">
                <img
                  className="w-full"
                  src="https://i.postimg.cc/ht5tLP3q/amazon-png-logo-vector-6695.png"
                  alt=""
                />
              </div>
              <div className="w-32">
                <img
                  className="w-full"
                  src="https://i.postimg.cc/ht5tLP3q/amazon-png-logo-vector-6695.png"
                  alt=""
                />
              </div>
              <div className="w-32">
                <img
                  className="w-full"
                  src="https://i.postimg.cc/ht5tLP3q/amazon-png-logo-vector-6695.png"
                  alt=""
                />
              </div>
              <div className="w-32">
                <img
                  className="w-full"
                  src="https://i.postimg.cc/ht5tLP3q/amazon-png-logo-vector-6695.png"
                  alt=""
                />
              </div>
              <div className="w-32">
                <img
                  className="w-full"
                  src="https://i.postimg.cc/ht5tLP3q/amazon-png-logo-vector-6695.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" w-full flex justify-center">
            {/* <div className=" hover:scale-105 transition-all ease-in-out duration-100 cursor-pointer flex gap-2 items-center uppercase font-semibold text-blue-400">
              <p>Customer stories</p>
              <i class="fa-solid fa-angle-right"></i>
            </div> */}
          </div>
        </div>
      </div>

      {/* mehak  */}
      <div className=" px-7 flex flex-col items-center justify-center h-72  ">
        <div className=" pb-7 text-3xl font-semibold text-center">
          Improve efficiency and delight customers with our user-friendly
          interface.
        </div>
        <div className=" text-gray-500 text-base text-center">
          The All Restaurant Business Management Solution, We provide a complete
          solution for managing restaurants effectively.
        </div>
      </div>

      {/* e billing  */}
      <div className=" px-14 flex gap-8 items-center justify-center w-full">
        <div className=" w-[45%] flex ">
          <img
            src="e-billing.jpg"
            className=" w-full h-full object-center object-cover"
            alt=""
          />
        </div>
        <div className=" w-[40%] flex flex-col gap-5">
          <div className=" text-3xl font-semibold leading-10">
            Well organized Your Restaurant Business: Billing Software Made Easy
          </div>
          <div className=" text-gray-700 text-lg leading-8">
            Easily manage orders, bills, and payments with us. Effortlessly
            split bills, merge tables, and apply discounts for
            cost-effectiveness and customer experience.
          </div>
        </div>
      </div>

      {/* inventory */}
      <div className=" px-14 flex gap-8 items-center justify-center w-full">
        <div className=" w-[45%] flex ">
          <img
            src="6.png"
            className=" w-full h-full object-center object-cover"
            alt=""
          />
        </div>
        <div className=" w-[40%] flex flex-col gap-5">
          <div className=" text-3xl font-semibold leading-10">
          Track Inventory and Reduce Wastage
          </div>
          <div className=" text-gray-700 text-lg leading-8">
          Maximize your business potential with our smart inventory management. Features like auto-deduction, low-stock alerts, and daily reports help reduce waste and improve profits.
          </div>
        </div>
      </div>
      {/* Qr based ordering  */}
      <div className=" px-14 flex gap-8 items-center justify-center w-full">
        <div className=" w-[45%] flex ">
          <img
            src="7.png"
            className=" w-full h-full object-center object-cover"
            alt=""
          />
        </div>
        <div className=" w-[40%] flex flex-col gap-5">
          <div className=" text-3xl font-semibold leading-10">
          Transforming Restaurants with QR-Based Ordering Systems
          </div>
          <div className=" text-gray-700 text-lg leading-8">
          Experience effortless management of orders, menus, and payments with our QR-based system. One screen streamlines operations, delights customers, and boosts your productivity.


          </div>
        </div>
      </div>
      {/* Sales report  */}
      <div className=" px-14 flex gap-8 items-center justify-center w-full">
        <div className=" w-[45%] flex ">
          <img
            src="9.png"
            className=" w-full h-full object-center object-cover"
            alt=""
          />
        </div>
        <div className=" w-[40%] flex flex-col gap-5">
          <div className=" text-3xl font-semibold leading-10">
          Enhancing Business Performance with Real-time Insights and Detailed Reports

          </div>
          <div className=" text-gray-700 text-lg leading-8">
          Upgrade to real-time insights and detailed reports with our POS system. Trusted by clients for years, it gives your restaurant the edge in performance.
          </div>
        </div>
      </div>

      
      {/*  */}
      {/* pivacy and policy  */}
      <div class=" flex flex-col justify-center  items-center gap-4 sm:gap-5 bg-[#e9e9e999]rounded-md p-10 sm:p-20 md:p-32 w-full ">
        <i class="fa-solid fa-shield-halved  text-7xl "></i>
        <h1 class=" text-2xl font-semibold sm:text-3xl md:text-4xl text-center">
          Your privacy is our responsibility
        </h1>
        <p class=" text:md sm:text-lg md:text-xl w-full md:w-[45rem] text-center text-[#424242] ">
          We believe that trust is paramount in a relationship. We do not own or
          sell your data, and we most certainly do not bank on advertising-based
          business models. The only way we make money is from the software
          license fees you pay us.
        </p>

        <button className=" flex justify-center text-center border border-blue-700 rounded-sm text-blue-700 p-2 md:p-3">
          <i class="fa-brands fa-square-youtube text-red-700 pr-5 pt-1 "> </i>
          <div className=" text-sm md:text-lg">Watch Video</div>
        </button>
      </div>

      {/* free demo form */}
      <div className=" flex justify-center w-full bg-white py-14 px-6 ">
        <div className=" flex flex-col-reverse justify-center items-center md:flex-row gap-16 w-[60rem] ">
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
                className="bg-[#f5f8fa] rounded-xl border border-[#e3e3e3] p-1.5 w-full "
              />
            </div>

            <div className=" flex sm:flex-row flex-col justify-between items-center gap-3 mt-4">
              <div className="inline-block w-full sm:w-1/2">
                <h4 className=" text-[15px]  ml-1">Phone Number</h4>
                <input
                  type="number"
                  className="bg-[#f5f8fa] rounded-xl border border-[#e3e3e3] p-1.5 w-full "
                />
              </div>

              <div className="inline-block w-full sm:w-1/2">
                <h4 className=" text-[15px]  ml-1">Email</h4>
                <input
                  type="email"
                  className="bg-[#f5f8fa] rounded-xl border border-[#e3e3e3] p-1.5 w-full "
                />
              </div>
            </div>

            <div className="mt-4">
              <h4 className=" text-[15px]  ml-1">City</h4>
              <input
                type="text"
                className="bg-[#f5f8fa] rounded-xl border border-[#e3e3e3] p-1.5 w-full "
              />
            </div>
            <div className="mt-4">
              <h4 className=" text-[15px]  ml-1">Restaurant Name</h4>
              <input
                type="text"
                className="bg-[#f5f8fa] rounded-xl border border-[#e3e3e3] p-1.5 w-full "
              />
            </div>

            <div className=" flex justify-end items-center w-full mt-4">
              <button className="  border bg-red-700 rounded-lg text-whitem px-4 py-3 font-semibold text-white">
                Submit
              </button>
            </div>
          </form>
          <div className=" w-[75%] sm:w-2/4">
            <img
              src="https://d28ewddc5mocr5.cloudfront.net/images/scheduale-form_md.webp "
              className=" w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_page;
