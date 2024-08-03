import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [product, setProduct] = useState(false);
  const [company, setCompany] = useState(false);
  const [socialstep, setSocialStep] = useState(false);
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
          icon: "Fine Dine.png",
        },
        {
          name: "Casual Dining",
          slug: "casual-dining",
          icon: "Casual Dining.png",
        },
        {
          name: "Bar & Brewery",
          slug: "bar&brewery",
          icon: "Bar & Brewery.png",
        },
        {
          name: "Cafe",
          slug: "cafe",
          icon: "Cafe.png",
        },
        {
          name: "Pizzeria",
          slug: "pizzeria",
          icon: "Pizzeria.png",
        },
        {
          name: "Fast Casual",
          slug: "fast-casual",
          icon: "Fast Casual.png",
        },
        {
          name: "Cloud Kitchens",
          slug: "cloud-kitchens",
          icon: "Cloud Kitchens.png",
        },
        {
          name: "Food Truck",
          slug: "food-truck",
          icon: "Food Truck.png",
        },
        {
          name: "Fast Food",
          slug: "fast-food",
          icon: "Fast Food.png",
        },
        {
          name: "Bistros",
          slug: "bistros",
          icon: "Bistros.png",
        },
        {
          name: "Brasseries",
          slug: "brasseries",
          icon: "Brasseries.png",
        },
        {
          name: "Large Food Chains",
          slug: "food-chain",
          icon: "Large Food Chains.png",
        },
        {
          name: "Ice-Creams & Desserts",
          slug: "icecream&dessert",
          icon: "Ice-Creams & Desserts.png",
        },
        {
          name: "QSR",
          slug: "qsr",
          icon: "QSR.png",
        },
        {
          name: "Buffet",
          slug: "buffet",
          icon: "Buffet.png",
        },
        {
          name: "Food Court",
          slug: "food-court",
          icon: "food court.png",
        },
        {
          name: "Pop Up Restaurant",
          slug: "popup-restaurant",
          icon: "Pop Up Restaurants.png",
        },
        {
          name: "Bakery",
          slug: "bakery",
          icon: "Bakery.png",
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
          name: "E-Billing",
          slug: "e-billing",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417339/Billling_3_1_kdg5rj.png",
        },
        {
          name: "POS ",
          slug: "pos",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417348/QR_Odering_1_1_lgwroo.png",
        },
        {
          name: "Detailing Reports",
          slug: "detailing-report",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417346/POS_2_1_w7irvb.png",
        },
        {
          name: "CRM Automation",
          slug: "crm",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417341/CRM_2_1_m6z06k.png",
        },
        {
          name: "Inventory Tracking and Waste Control",
          slug: "track-inventory",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417343/Inventory_1_1_tjmu4r.png",
        },
        {
          name: "QR-Ordering",
          slug: "qr-ordering",
          icon: "https://res.cloudinary.com/dyslwsvb1/image/upload/v1722417338/22_pxslxr.png",
        },
      ],
    },
    {
      name: "Social Steps",
      subItem: [
        {
          name: "Instagram",
          slug: "https://www.instagram.com/qrdine.in/",
        },
        {
          name: "Facebook",
          slug: "https://www.facebook.com/qrdinein",
        },
        {
          name: "X",
          slug: "https://x.com/Qrdinein",
        },
        {
          name: "You Tube",
          slug: "https://www.youtube.com/@QRDine-In",
        },
        {
          name: "Linked-in",
          slug: "https://www.linkedin.com/company/qrdine-in/",
        },
        {
          name: "About Us",
          slug: "about-us",
        },
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  function handlecompanyDropdown() {
    setCompany(true);
    setProduct(false);
    setSocialStep(false);
  }

  function handleProductDropdown() {
    setProduct(!product);
    setCompany(false);
    setSocialStep(false);
  }

  function handleSocialStepDropdown() {
    setCompany(false);
    setProduct(false);
    setSocialStep(true);
  }

  function closeDropdowns() {
    setCompany(false);
    setProduct(false);
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
    <div onMouseLeave={closeDropdowns}>
      {/* large screen view  */}

      <nav className="fixed z-10 bg-white w-full">
        <div className="border-b border-b-[#e7ebf0] p-4 flex justify-between items-center">
          <div className=" pl-0 sm:pl-10 gap-4 flex items-center">
            <Link to="/">
              <div className="px-4 inline-block w-28">
                <img
                loading="lazy"
                  className="w-full h-full"
                  src="https://qrdine.in/assets/img/logo.png"
                  alt="Logo"
                />
              </div>
            </Link>
            <div className="hidden lg:inline-block">
              <ul className="font-light gap-8 flex">
                <li
                  onMouseEnter={handleProductDropdown}
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
                  onMouseEnter={handlecompanyDropdown}
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
                  onMouseOver={handleSocialStepDropdown}
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
          onMouseLeave={closeDropdowns}
          onClick={closeDropdowns}
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
                <NavLink
                  to={item.slug}
                  className={({ isActive }) =>
                    `${isActive ? "bg-gray-100" : "bg-transparent"} rounded-xl`
                  }
                >
                  <li
                    key={item.name}
                    className=" w-64 p-2  hover:bg-gray-100 rounded-xl"
                  >
                    <div className=" flex gap-3  font-semibold items-center ">
                      <div>
                        <div className=" w-16 h-16 text-white flex justify-center items-center">
                          <img
                          loading="lazy"
                            src={`Fine_Dine_2/${item.icon}`}
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
          onMouseLeave={closeDropdowns}
          onClick={closeDropdowns}
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
                <NavLink
                  to={item.slug}
                  className={({ isActive }) =>
                    `${isActive ? "bg-gray-100" : "bg-transparent"} rounded-xl`
                  }
                >
                  <li
                    key={item.name}
                    className="p-2 w-64  hover:bg-gray-100 rounded-xl"
                  >
                    <div className=" flex gap-5 items-center">
                      <div>
                        <div className=" h-16 w-16 flex justify-center items-center">
                          <img
                          loading="lazy"
                            src={item.icon}
                            className=" h-full w-full  object-center"
                            alt=""
                          />
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
          onMouseLeave={closeDropdowns}
          onClick={closeDropdowns}
          ref={ref}
          className={`transition-all duration-150 ${
            socialstep ? "translate-y-0 visible" : "opacity-0 invisible translate-y-4"
          } absolute right-[8rem] top-[4.5rem] w-48  rounded-xl px-4 py-2 bg-[#fffefa] border border-x-gray-300 border-r-gray-300 border-l-gray-300`}
        >
          <div>
            <ul className="">
              {subNavData[3].subItem.map((item) => (
                <NavLink to={item.slug} className={({ isActive }) => `${isActive ? "bg-gray-100" : "bg-transparent"} rounded-xl`}>
                <li key={item.name} className="pb-3 px-4 pt-2 hover:bg-gray-100 rounded-xl flex justify-start items-center">
                 <div>{item.name}</div>
                </li>
                </NavLink>
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
                        <Link onClick={()=> setNavbar(false)} to={subItem?.slug}>
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
