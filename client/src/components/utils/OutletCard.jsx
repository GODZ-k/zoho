import React from "react";
import FreeDemo from "../Home/FreeDemo";

function OutletCard({
  head,
  frontImage,
  headOne,
  headTwo,
  headContent,
  mainHead,
  contentList,
}) {
  return (
    <>
      <div className=" px-6 sm:px-8 md:px-10 lg:px-20 xl:px-40 gap-10 flex justify-between md:flex-row flex-col">
        <div className=" mt-0 lg:mt-10 flex flex-col gap-10 w-full lg:w-[40rem]">
          <div className=" w-fit text-white font-semibold inline-block bg-black px-4 py-2 rounded-xl">
            {/* Fine Dine */}
            {head}
          </div>
          <div className=" flex flex-col gap-3">
            {headOne && (
              <div className=" text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                {/* Make Better */}
                {headOne}
              </div>
            )}
            {headTwo && (
              <div className=" text-3xl lg:text-4xl font-semibold">
                {/* Your Fine Dine-In Experience */}
                {headTwo}
              </div>
            )}
          </div>
          {headContent && (
            <div className="lg:text-xl text-base sm:text-lg text-gray-700">
              {/* Fine Dine is where tasty food, a comfy vibe, and friendly faces come
                together. Come, eat, laugh, and have a blast! */}
              {headContent}
            </div>
          )}
        </div>
        <div className=" w-full h-full flex justify-center items-center md:w-[40rem]">
          <img
            // src="fineDine/FineDine.png"
            src={frontImage}
            className=" w-full h-full object-center"
            alt=""
          />
        </div>
      </div>
      {mainHead && (
        <div className=" mt-20 mb-32">
          <div className=" px-6 sm:px-8 md:px-10 lg:px-20 xl:px-28 font-bold text-4xl md:text-center">
            {/* Experience top-notch service with QRDine-In restaurant POS system */}
            {mainHead}
          </div>
        </div>
      )}
      {contentList &&
        contentList.map((list) => (
          <div className={`${list.direction === 1 && 'md:flex-row-reverse' } md:flex-row flex my-20 md:my-32 flex-col gap-10 justify-between items-center`}>
            <div className=" px-6 sm:px-8 md:px-10 lg:px-20 xl:px-28 flex flex-col gap-5 w-full lg:w-[50rem]">
             {
                list?.headOne && (
                    <div className=" font-semibold  text-3xl sm:text-4xl md:text-5xl">
                    {/* Introduce Restaurant Specials and Take Food Orders */}
                    {list.headOne}
                  </div>
                )
             }
             {
                list?.headTwo && (
                    <div className=" font-semibold  text-3xl sm:text-4xl md:text-5xl">
                    {/* Introduce Restaurant Specials and Take Food Orders */}
                    {list.headTwo}
                  </div>
                )
             }
             {
                list?.content &&(
                    <div className=" text-base">
                    {/* Introducing restaurant specials is a great way to highlight
                    unique dishes and attract customers. Use simple menus and clear
                    descriptions to showcase these specials. For taking food orders,
                    ensure the process is quick and easy. Friendly staff should
                    guide guests through the menu and answer any questions.
                    Efficient ordering helps in providing a smooth dining
                    experience, making it easier for customers to enjoy their meals. */}
                    {list.content}
                  </div>
                )
             }
            </div>
            <div className={` ${list?.transform === 1 ? '-scale-x-100' : ""} overflow-hidden transform  w-full h-full flex justify-center items-center sm:w-[50rem] md:w-[40rem]`}>
              <img
                src={list?.image}
                className=" w-full h-full object-center"
                alt=""
              />
            </div>
          </div>
        ))}
      {/* take orders */}
      {/* <div className="  flex md:flex-row my-20 flex-col gap-10 justify-between items-center">
        <div className=" px-6 sm:px-8 md:px-10 lg:px-20 xl:px-28 flex flex-col gap-5 w-full lg:w-[50rem]">
          <div className=" font-semibold  text-3xl sm:text-4xl md:text-5xl">
            Introduce Restaurant Specials and Take Food Orders
          </div>
          <div className=" text-base">
            Introducing restaurant specials is a great way to highlight unique
            dishes and attract customers. Use simple menus and clear
            descriptions to showcase these specials. For taking food orders,
            ensure the process is quick and easy. Friendly staff should guide
            guests through the menu and answer any questions. Efficient ordering
            helps in providing a smooth dining experience, making it easier for
            customers to enjoy their meals.
          </div>
        </div>
        <div className=" w-full h-full flex justify-center items-center sm:w-[50rem] md:w-[40rem]">
          <img
            src="./fineDine/fineDineBanner.png"
            className=" w-full h-full object-center"
            alt=""
          />
        </div>
      </div> */}
      {/* fine dining */}
      {/* <div className="  flex md:flex-row-reverse my-20 flex-col gap-10 justify-between items-center">
        <div className=" px-6 sm:px-8 md:px-10 lg:px-20 xl:px-28 flex flex-col gap-5 w-full lg:w-[50rem]">
          <div className=" font-semibold  text-3xl sm:text-4xl md:text-5xl">
            Fine Dining: Perfecting Table Management for Superior Service
          </div>
          <div className=" text-base">
            Fine dining perfects table management for best service. Attention to
            detail, timely service, and a welcoming atmosphere create a
            memorable experience. Benefits include great food, personalized
            service, and a classy setting. Diners enjoy carefully prepared
            dishes, friendly staff, and an elegant environment, making fine
            dining perfect for special occasions and unforgettable foods.
          </div>
        </div>
        <div className=" w-full h-full transform -scale-x-100 flex justify-center items-center sm:w-[50rem] md:w-[40rem]">
          <img
            src="./fineDine/fineDineBanner.png"
            className="  flip w-full h-full object-center"
            alt=""
          />
        </div>
      </div> */}
      {/* staff management */}
      {/* <div className="  flex md:flex-row my-20 flex-col gap-10 justify-between items-center">
        <div className=" px-6 sm:px-8 md:px-10 lg:px-20 xl:px-28 flex flex-col gap-5 w-full lg:w-[50rem]">
          <div className=" font-semibold  text-3xl sm:text-4xl md:text-5xl">
            Creating Excellence strategy for Managing Staff in Fine Dining
          </div>
          <div className=" text-base">
            QRDine POS system provides excellence services in fine dining and
            involves a clear strategy for managing staff. Key features and
            providing in depth training knowledge, setting clear expectations,
            and offering regular feedback. This approach ensures that staff
            deliver top-notch service, maintain high standards, and create a
            welcoming atmosphere. Happy, well-trained staff contribute to a
            great dining experience, making fine dining enjoyable for every
            guest and enhancing the overall reputation of the restaurant.
          </div>
        </div>
        <div className=" w-full h-full flex justify-center items-center sm:w-[50rem] md:w-[40rem]">
          <img
            src="./fineDine/fineDineBanner.png"
            className="  flip w-full h-full object-center"
            alt=""
          />
        </div>
      </div> */}
      {/* Book a free demo */}
      <FreeDemo />
    </>
  );
}

export default OutletCard;
