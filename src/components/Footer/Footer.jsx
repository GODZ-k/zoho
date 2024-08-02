import React, { useState } from "react";
import { Link } from "react-router-dom";
function Footer() {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div class="flex flex-col md:px-10 sm:px-8 px-6 lg:px-20 xl:px-40 gap-10 items-center justify-center py-14 w-full mb-[2rem] lg:mb-0">
      <div class="w-full">
        <div className=" flex gap-10 sm:gap-20 md:gap-28 flex-wrap lg:flex-nowrap  lg:justify-between  w-full">
          <div class="flex flex-col items-start gap-2">
            <h1 class="font-semibold text-lg">POS</h1>
            <ul class="flex justify-center text-gray-700 flex-col gap-4">
              <li className=" pt-3">
                <Link>Billing</Link>
              </li>
              <li>
                <Link>Inventory</Link>
              </li>
              <li>
                <Link>Reporting</Link>
              </li>
              <li>
                <Link>Online Ordering</Link>
              </li>
              <li>
                <Link>CRM</Link>
              </li>
              <li>
                <Link>Menu</Link>
              </li>
            </ul>
            <button class="bg-black py-2 px-4 mt-2 text-white border rounded-md text-sm">
              Take a Free demo
            </button>
          </div>
          <div class="flex flex-col items-start gap-2">
            <h1 class="font-semibold text-lg">Features</h1>
            <ul class="flex justify-center text-gray-700 flex-col gap-4">
              <li className=" pt-3">
                <Link>Paperless Billing</Link>
              </li>
              <li>
                <Link>QR based Ordering</Link>
              </li>
              <li>
                <Link>Detailing Reports</Link>
              </li>
              <li>
                <Link>CRM Automation</Link>
              </li>
              <li>
                <Link>Digital Menu</Link>
              </li>
              <li>
                <Link>Inventory Tracking & Waste Control</Link>
              </li>
              <li>
                <Link>Staff, Kitchen and Admin Applications</Link>
              </li>
            </ul>
          </div>
          <div class="flex flex-col items-start gap-2">
            <h1 class="font-semibold text-lg">Outlet types</h1>
            <ul
              class={`${
                isExpand ? "h-fit" : " h-[19rem] overflow-hidden"
              } transform transition-all delay-1000 flex justify-center text-gray-700 flex-col gap-4`}
            >
              <li className="pt-3">
                <Link to="/fine-dine">Fine Dine</Link>
              </li>
              <li>
                <Link to="/casual-dining">Casual Dining</Link>
              </li>
              <li>
                <Link to="/bar&brewery">Bar & Brewery</Link>
              </li>
              <li>
                <Link to="/cafe">Cafe</Link>
              </li>
              <li>
                <Link to="/pizzeria">Pizzeria</Link>
              </li>
              <li>
                <Link to="/fast-casual">Fast Casual</Link>
              </li>
              <li>
                <Link to="/cloud-kitchen">Cloud Kitchens</Link>
              </li>
              <li>
                <Link to="/food-truck">Food Truck</Link>
              </li>
              <li>
                <Link to="/fast-food">Fast Food</Link>
              </li>
              <li>
                <Link to="/bistros">Bistros</Link>
              </li>
              <li>
                <Link to="/brasseries">Brasseries</Link>
              </li>
              <li>
                <Link to="/food-chain">Large Food Chains</Link>
              </li>
              <li>
                <Link to="/icecream&dessert">Ice-Creams & Desserts</Link>
              </li>
              <li>
                <Link to="/qsr">QSR</Link>
              </li>
              <li>
                <Link to="/buffet">Buffet</Link>
              </li>
              <li>
                <Link to="/food-court">Food Court</Link>
              </li>
              <li>
                <Link to="/popup-restaurant">Pop Up Restaurants</Link>
              </li>
              <li>
                <Link to="/bakery">Bakery</Link>
              </li>
            </ul>
            <button
              className=" mt-2 rounded-md"
              onClick={() => {
                setIsExpand(!isExpand);
              }}
            >
              {isExpand ? (
                <div className=" flex gap-2 items-center">
                  Show less<i class="fa-solid fa-caret-up"></i>
                </div>
              ) : (
                <div className=" flex gap-2 items-center">
                  Show more<i class="fa-solid fa-caret-down"></i>
                </div>
              )}
            </button>
          </div>
          <div class="flex flex-col items-start gap-3">
            <h1 class="font-semibold text-lg">Social Steps</h1>
            <ul class="flex justify-center text-gray-700 flex-col gap-4">
              <li className=" pt-3">
                <Link>Pricing</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
              <li>
                <Link>Support</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Reseller</Link>
              </li>
              <li>
                <Link>Magazine</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-full justify-end sm:justify-between flex-wrap gap-10 flex items-start flex-col-reverse md:flex-row my-10">
        <div className=" inline-block">
          <div className=" flex flex-col items-start gap-4 w-60">
            <div class="w-44 flex justify-center items-center">
              <img src="logo.png" alt="" />
            </div>
            <div className="">
              <p className=" text-gray-600 text-sm">
                Manage your restaurant with - instant access, automated
                processes and a commitment to sustainability.
              </p>
              <p className=" text-gray-600 text-sm"> Let the flavour
              meets innovation with the Paperless solutions!</p>
            </div>
            <div class="flex gap-5 text-2xl">
              <a href="https://www.instagram.com/qrdine.in/">
                {" "}
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/qrdine-in/">
                {" "}
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/qrdinein">
                {" "}
                <i class="fa-brands fa-facebook"></i>
              </a>{" "}
              <a href="https://www.youtube.com/@QRDine-In">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
       <div className=" inline-block">
       <div className=" flex flex-col gap-5">
          <div className=" text-2xl font-semibold">Get in touch</div>
          <div className=" w-80">
            <div className=" flex gap-2 items-center pb-1">
              <i class="fa-solid fa-location-dot"></i>Noida location
            </div>
            <div className=" text-gray-600">
              E-23, First Floor, E Block, Sector 63, Noida, Uttar Pradesh 201301
            </div>
          </div>
          <div class="flex gap-3 text-gray-700 items-center">
            <i class="fa-solid fa-phone"></i>
            <p>+9000000000</p>
          </div>
          <div class="flex gap-3 text-gray-700 items-center">
            <i class="fa-regular fa-envelope"></i>
            <p>inquiry@qrdine.com</p>
          </div>
        </div>
       </div>
        <div className=" inline-block w-96">
          <div className=" font-semibold text-2xl">Newsletter</div>
          <div className=" text-base py-2 text-gray-700">
            Sign up to get more every update
          </div>
          <div className=" my-3">
            <input
              className=" p-3 rounded-md bg-white w-full border border-gray-300 placeholder:text-base placeholder:text-gray-500 "
              type="text"
              placeholder="Enter email"
            />
          </div>
          <button className=" text-white rounded-xl bg-black py-3  px-6 font-semibold my-2">
            Subscribe{" "}
          </button>
        </div>
      </div>
      <div className=" text-gray-500 text-sm mt-6">
        <span className=" uppercase">COPYRIGHT</span> © 2024 - K & A Technology
        Pvt. Ltd., India • <Link to="">Privacy</Link> • <Link to="">Terms</Link>{" "}
        • <Link to="">Cancellation & Refund</Link> •
        <Link to="">Corporate Information</Link>
      </div>
    </div>
  );
}

export default Footer;
