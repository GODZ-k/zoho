import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { userLogout } from "../../Api/ApiData";
import ThemeToggle from "../utils/ToggleTheme";

function Navbar() {
  const user = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userProfile);
  const [firstName, setFirstName] = useState(
    userData ? userData.firstName : ""
  );
  const [theme, setTheme] = useState("light");
  const [avatar, setAvatar] = useState(userData ? userData.avatar : "");
  const [product, setProduct] = useState(false);
  const [company, setCompany] = useState(false);
  const [socialstep, setSocialStep] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdown, setDropdown] = useState("");
  const mobilenavbarRef = useRef(null);
  const ref = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subNavData = [
    {
      name: "Outlet type",
      subItem: [
        {
          name: "Fine Dine",
          slug: "fine-dine",
          icon: "Fine_Dine.png",
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
    if (userData) {
      setFirstName(userData.firstName || "");
      setAvatar(userData.avatar || "");
    }
  }, [userData]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const logoutUser = async () => {
    await userLogout(dispatch, navigate);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handlecompanyDropdown() {
    setCompany(true);
    setProduct(false);
    setSocialStep(false);
  }



  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

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
          <div className=" flex flex-row lg:flex gap-4">
            <div className=" pl-0 pr-3 sm:pl-10 gap-4 flex items-center">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
            <div className=" hidden pl-0 pr-3  gap-4 lg:flex items-center">
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
            {user ? (
              <div onClick={closeDropdowns}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="large"
                      sx={{ ml: 2, padding: 0 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <Avatar
                        sx={{ width: 35, height: 35 }}
                        style={
                          avatar
                            ? { background: "none" }
                            : { backgroundColor: "#fffff" }
                        }
                      >
                        {(avatar && <img src={avatar} alt="avatar" />) ||
                          (firstName && firstName.charAt(0).toUpperCase())}
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.#0e7be5",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <Link to="/user/profile">
                    <MenuItem onClick={handleClose}>
                      {/* <Avatar
                        sx={{ width: 40, height: 40 }}
                        style={
                          avatar
                            ? { background: "none" }
                            : { backgroundColor: "#fffff" }
                        }
                      >
                        {(avatar && <img src={avatar} alt="avatar" />) ||
                          (firstName && firstName.charAt(0))}
                      </Avatar>{" "} */}
                      Profile
                    </MenuItem>
                  </Link>
                  <Link to="/user/dashboard">
                    <MenuItem onClick={handleClose}>
                      Dashboard
                    </MenuItem>
                  </Link>
                  <Divider />
                  <MenuItem onClick={logoutUser}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <div className=" lg:flex gap-3 hidden">
                <Link
                  className=" flex justify-center items-center"
                  to={"login"}
                >
                  <button className="text-gray-700 ">Sign in</button>
                </Link>
                <Link to={"signup"}>
                  <button
                    className={`${
                      isScrolled
                        ? "bg-[#f60014] text-white"
                        : "bg-transparent text-[#f60014]"
                    } hover:text-white hover:bg-[#f60014] transition-all ease-in-out duration-300 px-4 py-1.5 rounded-sm border border-[#f60014] `}
                  >
                    Sign up
                  </button>
                </Link>
              </div>
            )}
            {/* <Link className=" flex justify-center items-center" to={"login"}>
            <button className="text-gray-700 ">Sign in</button>
            </Link>
            <Link to={"signup"}>
            <button
              className={`${
                isScrolled
                  ? "bg-[#f60014] text-white"
                  : "bg-transparent text-[#f60014]"
              } hover:text-white hover:bg-[#f60014] transition-all ease-in-out duration-300 px-4 py-1.5 rounded-sm border border-[#f60014] `}
            >
              Sign up
            </button>
            </Link> */}
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
            socialstep
              ? "translate-y-0 visible"
              : "opacity-0 invisible translate-y-4"
          } absolute right-[6rem] top-[4.5rem] w-48  rounded-xl px-4 py-2 bg-[#fffefa] border border-x-gray-300 border-r-gray-300 border-l-gray-300`}
        >
          <div>
            <ul className="">
              {subNavData[3].subItem.map((item) => (
                <NavLink
                  to={item.slug}
                  className={({ isActive }) =>
                    `${isActive ? "bg-gray-100" : "bg-transparent"} rounded-xl`
                  }
                >
                  <li
                    key={item.name}
                    className="pb-3 px-4 pt-2 hover:bg-gray-100 rounded-xl flex justify-start items-center"
                  >
                    <div>{item.name}</div>
                  </li>
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* mobile and tablet view */}
      <nav
        ref={mobilenavbarRef}
        className=" z-10 fixed lg:hidden bottom-0 left-0 w-full"
      >
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
            <Link to={"signup"}>
              {" "}
              <div className=" uppercase">Sign up for free</div>
            </Link>
          </button>
        </div>
        <div
          className={`${
            navbar
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 h-0 translate-y-4 invisible"
          }  duration-300 border border-gray-200 absolute bottom-16 rounded-md bg-white w-80 max-h-[70vh] overflow-y-scroll px-5 py-4 left-1`}
        >
          <ul className=" border-b border-b-gray-300 border-dashed pb-5">
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
                        <Link
                          onClick={() => setNavbar(false)}
                          to={subItem?.slug}
                        >
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
          <div className="flex w-full py-1 flex-col justify-start items-start">
            <Link to={"login"} className=" w-full">
              <button className=" py-2  text-red-500 font-semibold">
                Sign In
              </button>
            </Link>
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
