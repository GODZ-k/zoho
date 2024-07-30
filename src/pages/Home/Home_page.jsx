import React from "react";
import { All_in_one_res_card, HomeCard, Nav_Cards } from "../../components";

function Home_page() {
  const featuredApps = [
    {
      name: "Paperless Billing",
      to: "/",
      content: "",
      icon: "Billing4.png",
    },
    {
      name: "QR based Ordering",
      to: "/",
      content: "",
      icon: "Billing3.png",
    },
    {
      name: "Detailing Reports",
      to: "/",
      content: "",
      icon: "POS2.png",
    },
    {
      name: "CRM Automation",
      to: "/",
      content: "",
      icon: "CRM2.png",
    },
    {
      name: "Digital Menu",
      to: "/",
      content: "",
      icon: "digitalMenu.png",
    },
    {
      name: "Inventory Tracking & Waste Control",
      to: "/",
      content: "",
      icon: "Inventory1.png",
    },
    {
      name: "Staff, Kitchen and Admin Applications",
      to: "/",
      content: "",
      icon: "skaapp.png",
    },
  ];

  const allInOneItems =[
    {
      icon:"FineDine.jpg"
    },
    {
      icon:"CasualDining.jpg"
    },
    {
      icon:"Bar&Brewery.jpg"
    },
    {
      icon:"Cafe.jpg"
    },
    {
      icon:"Pizzeria.jpg"
    },
    {
      icon:"FastCasual.jpg"
    },
    {
      icon:"CloudKitchens.jpg"
    },
    {
      icon:"FoodTruck.jpg"
    },
    {
      icon:"FastFood.jpg"
    },
    {
      icon:"Bistros.jpg"
    },
    {
      icon:"Brasseries.jpg"
    },
    {
      icon:"LargeFoodChains.jpg"
    },
    {
      icon:"Ice-Creams&Desserts.jpg"
    },
    {
      icon:"QSR.jpg"
    },
    {
      icon:"Buffet.jpg"
    },
    {
      icon:"FoodCourt.jpg"
    },
    {
      icon:"PopUpRestaurants.jpg"
    },
    {
      icon:"Bakery.jpg"
    },
  ]

  return (
    <div>
      {/* home banner */}
      <div className=" px-6 sm:px-8 relative z-[-1] flex lg:flex-row gap-12 lg:gap-0 flex-col items-center lg:items-start justify-evenly flex-wrap pt-[30%] sm:pt-40 pb-20 bg-[#f8f9fb]">
        <div className=" w-full lg:text-start  lg:w-[35%] px-0 sm:px-2 xl:px-14">
          <div className="">
            <div className=" text-4xl text-black mb-8">
              The All Solution with achieving success of restaurants
            </div>
            <div className=" text-lg md:text-xl  my-8 font-light">
              Done by us streamlines restaurant operations, offering contactless
              dining solutions for efficient management and enhanced customer
              experience.
            </div>
            <div className=" font-semibold  mt-5 mb-8 text-lg md:text-xl">
              Let the flavour meets innovation with Paperless soultion!
            </div>
            <div className=" flex lg:justify-start">
              <button className=" relative  flex justify-between gap-10 bg-[#ffde48] rounded-sm text-black font-semibold px-6 py-4">
                <div className=" text-[18px]">Book A Free Demo</div>
                {/* <i className=" absolute right-0 -bottom-5 text-4xl text-black fa-solid fa-arrow-pointer"></i> */}
                <div className=" absolute -right-2 -bottom-2 w-8 h-8">
                  <img className=" w-full h-full " src="icon.png" alt="" />
                </div>
              </button>
            </div>
            <div className=" lg:pb-10 w-full lg:w-[70%] -bottom-0 left-24 lg:absolute z-[-1]">
              <img
                src="fontImage.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" w-full relative sm:w-[30rem] lg:w-96 bg-white rounded-md border px-8 py-5 border-gray-200">
          <div className="">
            <div className=" absolute uppercase -top-6 text-white bg-red-500 px-5 py-3 rounded-3xl font-semibold">
              Why QRDine-IN?
            </div>
            <div>
              <div>
                {featuredApps.map((item) => (
                  <HomeCard
                    icon={item.icon}
                    content={item.content}
                    name={item.name}
                    to={item.to}
                  />
                ))}
              </div>
            </div>
            {/* <div className=" flex justify-between text-blue-400  pt-6">
              <button className=" uppercase font-semibold text-blue-500">
                {" "}
                Exploree all products
              </button>
              <div>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* company showcase */}
      <div className=" lg:mb-0 py-16 lg:py-32 flex px-6 sm:px-8 justify-evenly lg:flex-row flex-col items-center lg:items-start  w-full bg-yellow-400">
        <div className=" flex gap-6 flex-col sm:flex-row w-full  lg:w-[40rem] border-b lg:border-r border-b-[#d0b31c] lg:border-b-0 pb-20 lg:pb-0 lg:border-r-[#d0b31c] border-dashed">
          <div className=" w-40 sm:w-96">
            <img src="https://qrdine.in/assets/img/logo.png" alt="" />
          </div>
          <div>
            <div className="">
              <div>All-in-one suite</div>
              <div className=" text-4xl">QRDine-In</div>
              <div>The operating system for business</div>
            </div>
            <div className=" w-full pb-9 py-6">
              Run your entire business on Zoho with our unified cloud software,
              designed to help you break down silos between departments and
              increase organizational efficiency.
            </div>
            <div className=" bg-red-800 p-3 rounded-sm w-fit text-white">
              <button className=" flex justify-between gap-6 uppercase">
                <div>TRY QRDINE</div>
                <div>
                  {" "}
                  <i className=" text-sm fa-solid fa-chevron-right"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className=" pt-16 lg:pt-0 w-full sm:w-80">
          <div className=" bg-black w-fit text-white py-3 px-4 rounded-full">
            <i class="fa-solid fa-quote-left"></i>
          </div>
          <div className=" py-5 text-2xl font-thin">
            "You can be a startup, mid-sized company, or an enterprise—Zoho One
            is a boon for all."
          </div>
          <div className=" flex items-center gap-3">
            <div className=" w-16 text-white flex justify-center items-center bg-black h-16 rounded-full">
              {/* <img src="" alt="" /> */}
              img
            </div>
            <div>
              <div>Kajal Shrivastawa</div>
              <div className=" text-gray-800 font-light">
                CEO , kandatechnology.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* restaurant showcase banner */}
      <div className=" bg-[#f8f9fb] text-center">
        <div className=" py-16 sm:py-28 mx-6 sm:mx-24 md:mx-44 flex gap-4 flex-col items-center">
          <div className=" uppercase font-light text-gray-800 text-sm inline-block">
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
      <div className=" px-6 sm:px-8 md:px-10 flex flex-col items-center justify-center my-8 sm:my-0 h-60  ">
        <div className=" pb-7 text-3xl md:text-4xl font-semibold text-start sm:text-center">
          Improve efficiency and delight customers with our user-friendly
          interface.
        </div>
        <div className=" bg-[#ffe988] text-start text-gray-800 py-1 px-2 md:px-20 rounded-md text-base lg:text-lg sm:text-center">
        The All Restaurant Business Management Solution,
        We provide a complete
          solution for managing restaurants effectively.
        </div>
      </div>

      {/* e billing  */}
      <div className=" px-6 sm:px-8 md:px-10 flex gap-8 flex-col-reverse items-center md:items-start md:flex-row justify-center w-full">
        <div className=" w-full md:w-[25rem] lg:w-[35rem] flex ">
          <img
            src="e-billing.png"
            className=" w-full h-full object-center object-cover"
            alt=""
          />
        </div>
        <div className=" w-full md:w-[40%] pt-5 md:pt-12 lg:pt-40 flex flex-col gap-5">
          <div className=" text-start sm:text-center md:text-start text-3xl font-semibold lg:leading-10">
            Well organized Your Restaurant Business: Billing Software Made Easy
          </div>
          <div className=" text-start sm:text-center md:text-start text-gray-700 text-base lg:text-lg lg:leading-8">
            Easily manage orders, bills, and payments with us. Effortlessly
            split bills, merge tables, and apply discounts for
            cost-effectiveness and customer experience.
          </div>
        </div>
      </div>

      {/* inventory */}
      <div className=" px-6 sm:px-8 md:px-10 flex gap-8 flex-col-reverse items-center md:items-start md:flex-row justify-center w-full">
        <div className=" w-full md:w-[25rem] lg:w-[35rem] flex ">
          <img
            src="inventory_management.png"
            className=" w-full h-full object-center object-cover"
            alt=""
          />
        </div>
        <div className=" w-full md:w-[40%] pt-5 md:pt-12 lg:pt-40 flex flex-col gap-5">
          <div className=" text-start sm:text-center md:text-start text-3xl font-semibold lg:leading-10">
          Track Inventory and Reduce Wastage
          </div>
          <div className=" text-start sm:text-center md:text-start text-gray-700 text-base lg:text-lg lg:leading-8">
          Maximize your business potential with our smart inventory
            management. Features like auto-deduction, low-stock alerts, and
            daily reports help reduce waste and improve profits.
          </div>
        </div>
      </div>

      {/* Qr based ordering  */}

      <div className=" px-6 sm:px-8 md:px-10 flex gap-8 flex-col-reverse items-center md:items-start md:flex-row justify-center w-full">
        <div className=" w-full md:w-[25rem] lg:w-[35rem] flex ">
          <img
            src="Qrdine_Qr.png"
            className=" w-full h-full object-center object-cover"
            alt=""
          />
        </div>
        <div className=" w-full md:w-[40%] pt-5 md:pt-12 lg:pt-40 flex flex-col gap-5">
          <div className=" text-start sm:text-center md:text-start text-3xl font-semibold lg:leading-10">
          Transforming Restaurants with QR-Based Ordering Systems
          </div>
          <div className=" text-start sm:text-center md:text-start text-gray-700 text-base lg:text-lg lg:leading-8">
          Experience effortless management of orders, menus, and payments with
            our QR-based system. One screen streamlines operations, delights
            customers, and boosts your productivity.
          </div>
        </div>
      </div>

      {/* Sales report  */}


      <div className=" px-6 sm:px-8 md:px-10 flex gap-8 flex-col-reverse items-center md:items-start md:flex-row justify-center w-full">
        <div className=" w-full md:w-[25rem] lg:w-[35rem] flex ">
          <img
            src="sales_report.png"
            className=" w-full h-full object-center object-cover"
            alt=""
          />
        </div>
        <div className=" w-full md:w-[40%] pt-5 md:pt-12 lg:pt-40 flex flex-col gap-5">
          <div className=" text-start sm:text-center md:text-start text-3xl font-semibold lg:leading-10">
          Enhancing Business Performance with Real-time Insights and Detailed
          Reports          </div>
          <div className=" text-start sm:text-center md:text-start text-gray-700 text-base lg:text-lg lg:leading-8">
          Upgrade to real-time insights and detailed reports with our POS
            system. Trusted by clients for years, it gives your restaurant the
            edge in performance.
          </div>
        </div>
      </div>
      

      {/* crm qrdine  */}
      <div className=" bg-[#ffe988] flex justify-between  flex-col lg:flex-row px-6 sm:px-8 lg:px-10 xl:px-40 py-20 w-full">
        <div className=" w-full text-start lg:w-[40%]">
          <div className=" uppercase text-3xl mb-8 px-4 py-2 rounded-full bg-black text-white inline-block">
            CRM 
          </div>
          <div className=" text-3xl lg:text-4xl pb-10 font-semibold !leading-snug">
            A rating shows{" "}
            <span className=" bg-[#ffd7277a] px-2">Satisfaction,</span> but
            loyalty defines your brand. Honesty is crucial for creating strong
            relationships and impactful CRM.
          </div>
          <div className=" text-base lg:text-lg">
            Boost your restaurant's performance with Our advance billing
            software. Experience real-time insights and detailed reports that
            drive smart decisions. Our POS system has delighted clients for
            years, fostering long-term Customer Relationships Management and
            business growth.
          </div>
        </div>
        <div className=" w-full sm:w-[30rem] lg:w-[50%]">
          <img src="crm.png" className=" h-full w-full" alt="" />
        </div>
      </div>

      {/* integration */}

      <div className=" px-6 sm:px-8 lg:px-10 xl:px-40 flex md:flex-row flex-col gap-5 pt-20 md:pt-10 justify-between">
        <div className=" md:mt-28 w-full md:w-[40rem]">
          <div className=" text-4xl xl:text-5xl text-[#ffd000] font-semibold mb-3">One Dashboard,</div>
          <div className=" text-2xl xl:text-3xl font-semibold mb-3">multiple integrations made easy.</div>
          <div className=" text-gray-900 text-lg leading-6">
            Manage all restaurant services from a single screen, anyway you
            choose—mobile phone, tablet, laptop, or desktop.
          </div>
        </div>
        <div className=" w-full md:w-[40rem]">
          <img src="oneScreenIntr.png" className=" h-full w-full object-cover object-center" alt="" />
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

      {/* All in one resturants */}
      <div className=" h-full py-20 flex flex-col items-center justify-center px-5 sm:px-10 md:px-20 lg:px-40 w-full bg-[#fff0ad]">
        <div className=" mb-2 uppercase text-center font-semibold">
          Outlet type
        </div>
        <div className=" mb-2 text-lg text-center font-semibold">
          Built for all type of food business
        </div>
        <div className=" mb-14 text-base text-center">
          The all-in-one Restaurant Management System for all types of restaurant formats and food outlets
        </div>
        <div className=" flex items-center justify-center flex-wrap">
          {allInOneItems.map((item,index)=>(
            <All_in_one_res_card key={index} icon={item.icon}/>
          ))}
        </div>
      </div>
      {/* free demo form */}
      <div className=" flex justify-center w-full bg-white py-14 px-6 ">
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
          <div className=" w-full sm:w-[90%]">
            <img
              src="./demoCall.jpg"
              className=" w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_page;
