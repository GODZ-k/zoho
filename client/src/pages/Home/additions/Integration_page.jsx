import React from "react";
import { Card, Container } from "../../../components";
import { Link } from "react-router-dom";

function Integration_page() {
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
            One Dashboard
          </div>
          <div className=" text-3xl lg:text-4xl font-semibold">
            For Managing Multiple Restaurant Integrations
          </div>

          <div className=" lg:text-lg text-base  text-gray-700 leading-7">
            Manage multiple restaurants easily with one dashboard. Keep track of
            all your restaurants in one place, making it simple to handle
            orders, inventory, and staff. This single dashboard helps you stay
            organized and save time. Improve your restaurant operations by
            managing everything from one central location.
          </div>
        </div>
        <div className=" w-full h-full flex justify-center items-center md:w-[40rem] md:h-[40rem]">
          <img src="10.png" alt="" />
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
          <div className=" py-3 text-3xl md:text-4xl !leading-snug font-semibold">
            Quick and <span className=" font-bold">Simple Payments</span>{" "}
            Process with Multiple UPI Options
          </div>
          <div className=" leading-7 ">
            Enjoy quick and simple payments with multiple UPI options. Make
            transactions fast and easy for your customers by offering a variety
            of UPI choices. This setup helps you process payments smoothly and
            efficiently, ensuring a hassle-free experience. Simplify payments
            process and keep your customers happy with convenient UPI options.
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
          <div className=" py-3 text-3xl !leading-snug  md:text-4xl font-semibold">
            Best <span className=" font-bold">CRM Tools</span> to Manage Your
            Customer Data
          </div>
          <div className=" leading-7 ">
            Become a successful member of the best CRM tools to manage your
            customer data easily. Keep track of customer information,
            interactions, and preferences all in one place. These software help
            you stay organized and provide better service. Improve your business
            by understanding your customers better with simple and effective CRM
            tools.
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
          <div className=" py-3 !leading-snug  text-3xl md:text-4xl font-semibold">
            Access <span className=" font-bold">real-time updates</span> and
            data & analytics
          </div>
          <div className=" leading-7 ">
            Get real-time updates and access to data and reports analysis
            easily. Stay informed with the latest information as it comes in.
            Use QRDine-In advance restaurant software to analyze and understand
            your data, helping you make quick decisions. With up-to-date data
            and clear analytics, you can track performance and spot trends
            easily.{" "}
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
          <div className=" py-3 !leading-snug text-3xl md:text-4xl font-semibold">
            Advance <span className=" font-bold">Integrations</span> to
            Streamline Multiple Accounting for Large Chains
          </div>
          <div className=" leading-7 ">
            Use advanced integrations to simplify accounting for large chains.
            These software help manage multiple accounting tasks efficiently
            from one place. Keep all your financial data organized and
            accessible with ease. Streamline your accounting processes to save
            time and reduce errors. With these integrations, handling complex
            financial tasks becomes easier and more efficient, making it simpler
            to manage accounting across multiple locations.
          </div>{" "}
        </div>
      </div>
      <div className=" w-full flex justify-evenly flex-col gap-6 md:gap-2 md:flex-row my-20 md:my-32 items-center">
        <div>
          <div className=" font-semibold pb-3 text-3xl">
            Become our Successful integration partner
          </div>
          <div className="  text-base lg:text-lg text-gray-600 ">
            Connect with us to integrate your service with QRDine-In Restaurant
            POS System
          </div>
        </div>
        <div className=" text-black font-semibold  rounded-md bg-[#ffe988] px-16 py-4 w-fit">
          Contact us
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

export default Integration_page;
