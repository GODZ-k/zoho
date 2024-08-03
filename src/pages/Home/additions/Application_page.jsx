import React from "react";
import { Card, Container } from "../../../components";
import { Link } from "react-router-dom";

function Application_page() {
  const blogs = [
    {
      slug: "https://qrdine.in/blogs/ten-companies-that-succeeded-in-the-indian-food-franchise-market/",
      image: "https://qrdine.in/blogs/wp-content/uploads/2024/07/1-8-5.png",
      title: "5 Best Restaurants in Delhi That You Must Try in 2024",
      content:
        "5 Best Restaurants in Delhi That You Must Try in 2024. Delhi, a city rich in culture and culinary delights, offers a luxury of dining experiences that cater to every palate. Whether you’re a local or a tourist, here are the five best restaurants in Delhi that you must try in 2024.",
    },
    {
      slug: "https://qrdine.in/blogs/ten-companies-that-succeeded-in-the-indian-food-franchise-market/",
      image: "https://qrdine.in/blogs/wp-content/uploads/2024/07/1-8-5.png",
      title: "5 Best Restaurants in Delhi That You Must Try in 2024",
      content:
        "5 Best Restaurants in Delhi That You Must Try in 2024. Delhi, a city rich in culture and culinary delights, offers a luxury of dining experiences that cater to every palate. Whether you’re a local or a tourist, here are the five best restaurants in Delhi that you must try in 2024.",
    },
    {
      slug: "https://qrdine.in/blogs/ten-companies-that-succeeded-in-the-indian-food-franchise-market/",
      image: "https://qrdine.in/blogs/wp-content/uploads/2024/07/1-8-5.png",
      title: "5 Best Restaurants in Delhi That You Must Try in 2024",
      content:
        "5 Best Restaurants in Delhi That You Must Try in 2024. Delhi, a city rich in culture and culinary delights, offers a luxury of dining experiences that cater to every palate. Whether you’re a local or a tourist, here are the five best restaurants in Delhi that you must try in 2024.",
    },
  ];
  return (
    <Container className=" px-6 sm:px-8 md:px-10 lg:px-20 xl:px-28">
      <div className=" gap-10 flex justify-between md:flex-row flex-col">
        <div className=" mt-0 lg:mt-20 flex flex-col gap-5 w-full lg:w-[40rem]">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          Manage your restaurant 
          </div>
          <div className=" text-3xl lg:text-4xl font-semibold">
          Seemlessly from anywhere. Take orders, control inventory, and payments
          </div>

          <div className=" lg:text-lg text-base  text-gray-700 leading-7">
            
          Run your restaurant from any device. Take orders, reservations, and control inventory, and payments with an advanced restaurant system by QRDine-In. Add your menu and best dishes, discounts, and more without coding.
            </div>
        </div>
        <div className=" w-full h-full flex justify-center items-center md:w-[40rem] md:h-[40rem]">
          <img src="10.png" alt="" />
        </div>
      </div>
      <div className=" my-32 text-3xl md:text-4xl leading-tight font-semibold text-center">
      Plan, prepare, and provide! Our application helps to manage your kitchen, waiters, and tables. 
      </div>
      <div className=" border my-20 border-gray-500 px-5 sm:pb-0 pb-10 flex rounded-3xl overflow-hidden w-full flex-col md:flex-row-reverse items-center justify-evenly">
        <div className=" w-full sm:w-[30rem] md:w-[45rem] items-center justify-center">
          <img
            src="10.png"
            className=" h-full w-full object-center"
            alt=""
            srcset=""
          />
        </div>
        <div className=" w-fit text-black sm:p-10">
            <div className=" bg-black text-white p-3 w-fit rounded-md font-semibold mb-5">
                Admin
            </div>
          <div className=" py-3 text-3xl md:text-4xl !leading-snug font-semibold">
          Management your restaurant with advance <span className=" font-bold">Admin panel</span>
          </div>
          <div className=" leading-7 ">
          The admin panel features a live dashboard, organized order management, POS integration, digital menu updates, real-time table status, customer profiles, staff management, automated inventory, and promotions with WhatsApp integration. 
          </div>
        </div>
      </div>
      <div className=" border my-20 border-gray-500 px-5 sm:pb-0 pb-10 flex rounded-3xl overflow-hidden w-full flex-col md:flex-row items-center justify-evenly">
        <div className=" w-full sm:w-[30rem] md:w-[45rem] items-center justify-center">
          <img
            src="10.png"
            className=" h-full w-full object-center"
            alt=""
            srcset=""
          />
        </div>
        <div className=" w-fit text-black sm:p-10">
        <div className=" bg-black text-white p-3 w-fit rounded-md font-semibold mb-5">
                Kitchen
            </div>
          <div className=" py-3 text-3xl !leading-snug  md:text-4xl font-semibold">
          Control Your <span className=" font-bold"> kitchen activity</span> and reduce wastage! Chef is happy
          </div>
          <div className=" leading-7 ">
          Our kitchen application features easy management for chefs, one-tap order processing, and clear communication with detailed order info and in-app KDS, streamlining operations and enhancing kitchen efficiency
          </div>
        </div>
      </div>
      <div className=" border my-20 border-gray-500 px-5 sm:pb-0 pb-10 flex rounded-3xl overflow-hidden w-full flex-col md:flex-row-reverse items-center justify-evenly">
        <div className=" w-full sm:w-[30rem] md:w-[45rem] items-center justify-center">
          <img
            src="10.png"
            className=" h-full w-full object-center"
            alt=""
            srcset=""
          />
        </div>
        <div className=" w-fit text-black sm:p-10">
        <div className=" bg-black text-white p-3 w-fit rounded-md font-semibold mb-5">
                Waiter
            </div>
          <div className=" py-3 !leading-snug  text-3xl md:text-4xl font-semibold">
          Enhance <span className=" font-bold">Dining Experience</span>  with Waiter Applications Features 
            
          </div>
          <div className=" leading-7 ">
          Our waiter application simplifies order handling with one-tap processing, provides POS access, monitors live table status, manages multiple tables, offers a sales overview, and ensures smooth cash handling.
          </div>
        </div>
      </div>
      <div className=" border my-20 border-gray-500 px-5 sm:pb-0 pb-10 flex rounded-3xl overflow-hidden w-full flex-col md:flex-row items-center justify-evenly">
        <div className=" w-full sm:w-[30rem] md:w-[45rem] items-center justify-center">
          <img
            src="10.png"
            className=" h-full w-full object-center"
            alt=""
            srcset=""
          />
        </div>
        <div className=" w-fit text-black sm:p-10">
        <div className=" bg-black text-white p-3 w-fit rounded-md font-semibold mb-5">
                Digital Menu
            </div>
          <div className=" py-3 !leading-snug text-3xl md:text-4xl font-semibold">
          Boost your restaurant services with Our <span className=" font-bold">Digital Menu</span> 
          </div>
          <div className=" leading-7 ">
          Enhance your restaurant experience with our digital menu features. Delight customers with an attractive digital menu and streamline ordering by simply scanning a QR code. Enjoy smooth self-service operations and manage customer information for personalized service. Offer multiple payment options, track orders live, and provide e-bills for easy invoicing.
          </div>{" "}
        </div>
      </div>
      <div className=" my-20 flex justify-evenly gap-5 flex-wrap">
        
        {blogs &&
          blogs?.map((item) => (
            <Card
            title={item.title}
            slug={item.slug}
            content={item.content}
            image={item.image}
            readMore
            />
          ))}
      </div>
    </Container>
  );
}

export default Application_page;
