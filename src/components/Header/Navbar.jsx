import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AppsComp from "./AppsComp";
import SuitesComp from "./SuitesComp";

function Navbar() {
  const [product, setProduct] = useState(false);
  const [company, setCompany] = useState(false);
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
      name: "Products",
      //   subItem: [
      //     {
      //       name: "Apps",
      //     },
      //     {
      //       name: "Suites",
      //     },
      //     {
      //       name: "Zoho One",
      //     },

      //     {
      //       name: "Marketplace",
      //     },
      //   ],
    },
    {
      name: "Customer",
    },
    {
      name: "Company",
      subItem: [
        {
          name: "About",
        },
        {
          name: "Our story",
        },
        {
          name: "Press",
        },
        {
          name: "Events",
        },
        {
          name: "Careers",
        },
      ],
    },
    {
      name: "More",
      subItem: [
        {
          name: "Blog",
        },
        {
          name: "Community",
        },
        {
          name: "Support",
        },
        {
          name: "Contact us",
        },
      ],
    },
  ];

//   function handleSubNavComponent(name) {
//     switch (name) {
//       case "Apps":
//         setAppComp(true);
//         setSuitesComp(false);
//         break;
//       case "Suites":
//         setSuitesComp(true);
//         setAppComp(false);
//         break;
//       default:
//         setAppComp(false);
//         setSuitesComp(false);
//         break;
//     }
//     setActiveSubNav(name);
//   }

  function handlecompanyDropdown() {
    setCompany(!company);
    setProduct(false);
  }

  function handleProductDropdown() {
    setProduct(!product)
    setCompany(false);
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

//   const displayComponent = [
//     {
//       name: AppComp,
//       component: <AppsComp setProduct={setProduct} product={product} />,
//     },
//     {
//       name: SuitesCompData,
//       component: <SuitesComp />,
//     },
//   ];

  // close navar when click anywhere on the screen -----
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setCompany(false);
        setProduct(false)
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
      if (mobilenavbarRef.current && !mobilenavbarRef.current.contains(event.target)) {
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

      <nav className="fixed bg-white w-full">
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
                      product ? "fa-chevron-down" : "fa-chevron-up"
                    }`}
                  ></i>
                </li>
                <li className="cursor-pointer">Customer</li>
                <li
                  onClick={handlecompanyDropdown}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <div>Company</div>
                  <i
                    className={`text-sm fa-solid ${
                      company ? "fa-chevron-down" : "fa-chevron-up"
                    }`}
                  ></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden lg:flex gap-4">
            <button className="text-gray-700 ">Sign in</button>
            <button className={`${isScrolled ? 'bg-[#f60014] text-white' : 'bg-transparent text-[#f60014]'} hover:text-white hover:bg-[#f60014] transition-all ease-in-out duration-300 px-4 py-1.5 rounded-sm border border-[#f60014] `}>
              Sign up
            </button>
          </div>
        </div>
        <div
          ref={ref}
          className={`w-full absolute transition-all duration-300 ${
            product ? " opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="w-full transition-all duration-300 max-h-[70vh] h-[70vh] bg-white">
            {AppComp && <AppsComp setProduct={setProduct} />}
            {/* 
             {SuitesCompData && <SuitesComp />} */}
            {/* {displayComponent.map((item) => (
              <div
                className={`${
                  item.name ? "opacity-100" : "opacity-0 pointer-events-none"
                }transition-opacity duration-500 ease-in-out transform`}
              >
                {item.name && item.component}
              </div>
            ))} */}
          </div>
        </div>
        <div
          ref={ref}
          className={`transition-all duration-150 ${
            company ? "translate-y-0" : "opacity-0 translate-y-4"
          } absolute left-[24rem] top-[4.5rem] w-60  rounded-md px-6 py-2 bg-white`}
        >
          <div>
            <ul>
              <li className="pb-3">About us</li>
              <li className="pb-3">Careers</li>
              <li className="pb-3">Press</li>
              <li className="pb-3">Blog</li>
            </ul>
          </div>
        </div>
      </nav>

      {/* mobile and tablet view */}
      <nav className=" fixed lg:hidden bottom-0 left-0 w-full">
        <div className=" flex">
          <button
            onClick={handleNavbar}
            className=" py-4 px-5 text-xl bg-black text-white"
          >
            {navbar ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
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
            navbar ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
                      dropdown === item.name ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    {item.subItem.map((subItem) => (
                      <ul className=" py-2 pl-3">
                        <li>{subItem.name}</li>
                      </ul>
                    ))}
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
