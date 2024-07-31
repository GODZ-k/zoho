import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AppsComp from "./AppsComp";
import SuitesComp from "./SuitesComp";

function Navbar() {
  const [product, setProduct] = useState(false);
  const [company, setCompany] = useState(false);
  const [socialstep, setSocialStep] = useState(false);
  const [AppComp, setAppComp] = useState(true);
  //   const [SuitesCompData, setSuitesComp] = useState(false);
  //   const [activeSubNav, setActiveSubNav] = useState("Apps");
  const [navbar, setNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdown, setDropdown] = useState("");
  const mobilenavbarRef = useRef(null);
  const ref = useRef(null);

  const subNavData = [
    {
      name: "Outlet type",
      subItem: [
        {
          name: "Fine Dine",
          slug: "fine-dine",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417843/Fine_Dine_w3bip3.png",
        },
        {
          name: "Casual Dining",
          slug: "casual-dining",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417837/Casual_Dining_wvv6n1.png",
        },
        {
          name: "Bar & Brewery",
          slug: "bar&brewery",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417827/Bar_Brewery_ffs3tz.png",
        },
        {
          name: "Cafe",
          slug: "cafe",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417833/Cafe_oriv1y.png",
        },
        {
          name: "Pizzeria",
          slug: "pizzeria",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417852/Pizzeria_lwkhas.png",
        },
        {
          name: "Fast Casual",
          slug: "fast-casual",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417839/Fast_Casual_wdftal.png",
        },
        {
          name: "Cloud Kitchens",
          slug: "cloud-kitchens",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417838/Cloud_Kitchens_p4cpv8.png",
        },
        {
          name: "Food Truck",
          slug: "food-truck",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417847/Food_Truck_ixaq2m.png",
        },
        {
          name: "Fast Food",
          slug: "fast-food",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417842/Fast_Food_chjlqe.png",
        },
        {
          name: "Bistros",
          slug: "bistros",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417828/Bistros_ojonk4.png",
        },
        {
          name: "Brasseries",
          slug: "brasseries",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417830/Brasseries_errjav.png",
        },
        {
          name: "Large Food Chains",
          slug: "food-chain",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417849/Large_Food_Chains_bleubd.png",
        },
        {
          name: "Ice-Creams & Desserts",
          slug: "icecream&dessert",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417848/Ice-Creams_Desserts_gdiycw.png",
        },
        {
          name: "QSR",
          slug: "qsr",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417860/QSR_c7kopi.png",
        },
        {
          name: "Buffet",
          slug: "buffet",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417832/Buffet_zehy9a.png",
        },
        {
          name: "Food Court",
          slug: "food-court",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417823/16_i10mup.png",
        },
        {
          name: "Pop Up Restaurant",
          slug: "popup-restaurant",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417853/Pop_Up_Restaurants_zauu2o.png",
        },
        {
          name: "Bakery",
          slug: "bakery",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417824/Bakery_n4jvim.png",
        },
      ],
    },
    {
      name: "Pricing",
    },
    {
      name: "Features",
      subItem: [
        {
          name: "Paperless Billing",
          slug: "",
          icon:"https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417339/Billling_3_1_kdg5rj.png"
        },
        {
          name: "QR Based Ordering ",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417348/QR_Odering_1_1_lgwroo.png",
        },
        {
          name: "Detailing Reports",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417346/POS_2_1_w7irvb.png",
        },
        {
          name: "CRM Automation",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417341/CRM_2_1_m6z06k.png",
        },
        {
          name: "Digital Menu",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417349/QR_Odering_qfjtak.png",
        },
        {
          name: "Inventory Tracking and Waste Control",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417343/Inventory_1_1_tjmu4r.png",
        },
        {
          name: "Staff Kitchen and Admin Application",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417338/22_pxslxr.png",
        },
      ],
    },
    {
      name: "Social Steps",
      subItem: [
        {
          name: "Instagram",
        },
        {
          name: "Facebook",
        },
        {
          name: "Career",
        },
        {
          name: "X",
        },
      ],
    },
  ];

 
  function handlecompanyDropdown() {
    setCompany(!company);
    setProduct(false);
    setSocialStep(false);
  }

  function handleSocialStepDropdown() {
    setCompany(false);
    setProduct(false);
    setSocialStep(!socialstep);
  }

  function handleProductDropdown() {
    setProduct(!product);
    setCompany(false);
    setSocialStep(false);
  }

  function handleNavbar() {
    setNavbar(!navbar);
  }

  function handleSubNavbar(name) {
    setDropdown(dropdown === name ? "" : name);
  }

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // close navar when click anywhere on the screen -----

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setCompany(false);
        setProduct(false);
        setSocialStep(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  // for mobile devices ----
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobilenavbarRef.current &&
        !mobilenavbarRef.current.contains(event.target)
      ) {
        setNavbar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobilenavbarRef]);

  return (
    <div>
      {/* large screen view  */}

      <nav className="fixed z-10 bg-white w-full">
        <div className="border-b border-b-[#e7ebf0] p-4 flex justify-between items-center">
          <div className=" pl-0 sm:pl-10 gap-4 flex items-center">
            <div className="px-4 inline-block w-28">
              <img
                className="w-full h-full"
                src="https://qrdine.in/assets/img/logo.png"
                alt="Logo"
              />
            </div>
            <div className="hidden lg:inline-block">
              <ul className="font-light gap-8 flex">
                <li
                  onClick={handleProductDropdown}
                  className="cursor-pointer flex gap-2 items-center"
                >
                  <div>Outlet type</div>
                  <i
                    className={`text-sm fa-solid ${
                      product ? "fa-chevron-up" : "fa-chevron-down"
                    }`}
                  ></i>
                </li>
                <li
                  onClick={handlecompanyDropdown}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <div>Features</div>
                  <i
                    className={`text-sm fa-solid ${
                      company ? "fa-chevron-up" : "fa-chevron-down"
                    }`}
                  ></i>
                </li>
                <li className="cursor-pointer">Pricing</li>
              </ul>
            </div>
          </div>
          <div className="hidden lg:flex gap-4">
            <div className=" pl-0 pr-3 sm:pl-10 gap-4 flex items-center">
              <ul className="font-light gap-8 flex">
                <li
                  onClick={handleSocialStepDropdown}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <div>Social Steps</div>
                  <i
                    className={`text-sm fa-solid ${
                      socialstep ? "fa-chevron-up" : "fa-chevron-down"
                    }`}
                  ></i>
                </li>
              </ul>
            </div>
            <button className="text-gray-700 ">Sign in</button>
            <button
              className={`${
                isScrolled
                  ? "bg-[#f60014] text-white"
                  : "bg-transparent text-[#f60014]"
              } hover:text-white hover:bg-[#f60014] transition-all ease-in-out duration-300 px-4 py-1.5 rounded-sm border border-[#f60014] `}
            >
              Sign up
            </button>
          </div>
        </div>
        <div
          ref={ref}
          className={`transition-all duration-150 ${
            product
              ? " translate-y-0 visible"
              : "opacity-0 invisible translate-y-3"
          } absolute left-[8rem] top-[4.6rem] max-w-[80%] overflow-y-scroll max-h-[70vh] rounded-xl px-6 py-2 bg-[#fffefa] border border-x-gray-300 border-r-gray-300 border-l-gray-300`}
        >
          <div className=" p-5">
            <ul className=" flex flex-wrap gap-6  bg-[#fffefa] ">
              {subNavData[0].subItem.map((item) => (
                <NavLink to={item.slug}>
                <li  key={item.name}
                    className=" w-64 p-2  hover:bg-gray-100 rounded-xl"
                  >
                    <div className=" flex gap-3  font-semibold items-center ">
                      <div>
                        <div className=" w-16 h-16 text-white flex justify-center items-center">
                          <img
                          src={item.icon}
                          className=" h-full w-full object-center object-cover flex justify-center items-center"
                          alt=""
                        />
                        </div>
                      </div>
                      <div>{item.name}</div>
                    </div>
                  </li>
                    </NavLink>
              ))}
            </ul>
          </div>
        </div>
        <div
          ref={ref}
          className={`transition-all duration-150 ${
            company
              ? "translate-y-0 visible"
              : "opacity-0 h-0 invisible translate-y-4"
          } absolute left-[19rem] top-[4.6rem] w-2/5  rounded-xl px-6 py-2 bg-[#fffefa] border border-x-gray-300 border-r-gray-300 border-l-gray-300`}
        >
          <div>
            <ul className=" flex gap-8 flex-wrap py-3 bg-[#fffefa]">
              {subNavData[2].subItem.map((item) => (
                <NavLink to={item.slug}>
                  <li
                    key={item.name}
                    className="p-2 w-64  hover:bg-gray-100 rounded-xl"
                  >
                    <div className=" flex gap-5 items-center">
                      <div>
                        <div className=" h-16 w-16 flex justify-center items-center">
                          <img src={item.icon} className=" h-full w-full  object-center" alt="" />
                        </div>
                      </div>
                      <div className=" font-semibold w-fit">{item.name}</div>
                    </div>
                  </li>
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
        <div
          ref={ref}
          className={`transition-all duration-150 ${
            socialstep ? "translate-y-0" : "opacity-0 translate-y-4"
          } absolute right-[8rem] top-[4.5rem] w-48  rounded-md px-6 py-2 bg-white`}
        >
          <div>
            <ul className="">
              {subNavData[3].subItem.map((item) => (
                <li key={item.name} className="pb-3">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* mobile and tablet view */}
      <nav className=" z-10 fixed lg:hidden bottom-0 left-0 w-full">
        <div className=" flex">
          <button
            onClick={handleNavbar}
            className=" py-4 px-5 text-xl bg-black text-white"
          >
            {/* {navbar ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )} */}
            <i className="fa-solid fa-bars"></i>
          </button>
          <button
            className={`${
              isScrolled ? "bg-[#f60014] text-white" : "bg-white text-[#f60014]"
            } hover:text-white hover:bg-[#f60014]  transition-all duration-500 flex justify-center items-center font-semibold w-full`}
          >
            <div className=" uppercase">Sign up for free</div>
          </button>
        </div>
        <div
          className={`${
            navbar
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 h-0 translate-y-4 invisible"
          }  duration-300 border border-gray-200 absolute bottom-16 rounded-md bg-white w-80 max-h-[70vh] overflow-y-scroll px-5 py-4 left-1`}
        >
          <ul
            ref={mobilenavbarRef}
            className=" border-b border-b-gray-300 border-dashed pb-5"
          >
            {subNavData.map((item) => (
              <li
                className=" py-2 font-light text-gray-900"
                onClick={() => handleSubNavbar(item.name)}
              >
                <div className="flex justify-between items-center cursor-pointer">
                  <div>{item.name}</div>
                  {item.subItem && (
                    <div>
                      <i
                        className={`${
                          dropdown === item.name ? "rotate-180" : "rotate-0"
                        } transition-all duration-700  fa-solid fa-caret-down`}
                      ></i>
                    </div>
                  )}
                </div>
                {item.subItem && (
                  <div
                    className={`transition-all duration-700 overflow-hidden ${
                      dropdown === item.name
                        ? "max-h-screen visible"
                        : "max-h-0 invisible"
                    }`}
                  >
                    <ul className=" py-2 pl-2">
                      {item.subItem.map((subItem) => (
                        <Link to={subItem?.slug}>
                          <li className=" rounded-md hover:bg-[#e7e7e76e] p-2 cursor-pointer">
                            {subItem.name}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="flex py-1 flex-col justify-start items-start">
            <button className=" py-2 text-red-500 font-semibold">
              Sign In
            </button>
            <button className="font-light text-gray-700">
              All QRDine-In Products
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
