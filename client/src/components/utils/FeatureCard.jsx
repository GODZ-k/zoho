import React from "react";
import Container from "./Container";

function Feature_card({headOne , headTwo , content , mainImage , mainHeadOne , mainHeadTwo , titleOne , titleTwo}) {
  return (
    <Container className=" px-6 sm:px-8 md:px-10 lg:px-20 xl:px-28">
      <div className=" gap-10 flex justify-between md:flex-row flex-col">
        <div className=" mt-0 lg:mt-20 flex flex-col gap-5 w-full lg:w-[40rem]">
          {
            headOne && (
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                    {headOne}
          </div>
            )
          }
          {
            headTwo && (
                <div className=" text-3xl lg:text-4xl font-semibold">
            {headTwo}
          </div>
            )
          }

          {content && (
            <div className=" lg:text-lg text-base  text-gray-700 leading-7">
            {content}
          </div>
          )}
        </div>
        <div className=" w-full h-full flex justify-center items-center md:w-[40rem] md:h-[40rem]">
          <img src={mainImage} alt="" />
        </div>
      </div>
      {
        mainHeadOne && (
            <div className=" mt-20 flex justify-center">
        <div className="font-bold text-3xl sm:text-5xl text-center">
          {mainHeadOne}
        </div>
      </div>
        )
      }
      {
        mainHeadTwo && (
            <div className=" mt-5 mb-32 flex justify-center">
        <div className="font-bold text-3xl sm:text-4xl text-center">
          {mainHeadTwo}
        </div>
      </div>
        )
      }
      {
        titleOne && (
    <div className=" flex gap-10 my-20 justify-evenly md:flex-nowrap flex-wrap">
        {titleOne.map((item)=>(
            <div className=" border border-gray-500 px-5 pb-10 flex flex-col  rounded-3xl overflow-hidden w-full md:w-[30rem]">
            <div className=" w-full items-center justify-center">
              <img
                src={item.image}
                className=" h-full w-full object-center"
                alt=""
                srcset=""
              />
            </div>
            <div className="text-black px-10">
              <div className=" py-3 text-3xl font-semibold">
                {item.title}
              </div>
              <div className=" leading-7 ">
                {item.content}
              </div>
            </div>
          </div>
        ))}
    </div>
        )
      }
       {
        titleTwo && (
    <div className=" flex gap-10 my-20 justify-evenly md:flex-nowrap flex-wrap">
        {titleTwo.map((item)=>(
            <div className=" border border-gray-500 px-5 pb-10 flex flex-col  rounded-3xl overflow-hidden w-full md:w-[30rem]">
            <div className=" w-full items-center justify-center">
              <img
                src={item.image}
                className=" h-full w-full object-center"
                alt=""
                srcset=""
              />
            </div>
            <div className="text-black px-10">
              <div className=" py-3 text-3xl font-semibold">
                {item.title}
              </div>
              <div className=" leading-7 ">
                {item.content}
              </div>
            </div>
          </div>
        ))}
    </div>
        )
      }
    </Container>
  );
}

export default Feature_card;
