import React, { useEffect } from "react";
import {Button, Container} from "../../index";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Dashboard() {
  const user = useSelector((state) => state.auth.userProfile);
  const navigate = useNavigate();

  // if (user && !user.subscription)
  //   return (
  //     <div className=" h-screen flex flex-col items-center justify-evenly pb-10 px-2">
  //       <div className=" flex justify-center items-center">
  //         <div className=" flex justify-center items-center flex-col w-auto gap-4">
  //           <span className=" font-bold text-2xl sm:text-3xl">
  //             Welcome to QRDine-in
  //           </span>
  //           <div className=" py-2">
  //             <p className=" text-center text-sm sm:text-lg">
  //               There are no subscriptions added yet.
  //             </p>
  //             <p className=" text-center text-sm sm:text-lg">
  //               Kickstart your business by adding a your first subscription
  //             </p>
  //           </div>
  //           <Button
  //             onClick={() => navigate("/user/subscription/purchase")}
  //             className=" bg-[#1e90ff] font-semibold text-white w-auto rounded-sm"
  //           >
  //             Add Subscription
  //           </Button>
  //         </div>
  //       </div>
  //       <div>
  //         <div className=" w-64 sm:w-80">
  //           {" "}
  //           <img
  //             src="https://preview.keenthemes.com/metronic8/demo25/assets/media/illustrations/sketchy-1/5.png"
  //             alt=""
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   );
  
  return (
    <div className=" dark:bg-[#0F1014] bg-[#f4f6fa]">
      <Container className={" pt-24 px-6 sm:px-8 md:px-10"}>
      <div className=" flex justify-between flex-wrap gap-3 items-center">
        <div><p className=" text-xl dark:!text-[#F5F5F5]  text-black pb-2 font-semibold">View Subscription</p>
        <p className=" text-sm font-semibold">Home<span className="px-2">/</span>User<span className="px-2">/</span>Dashboard</p></div>
        <div className=" dark:!bg-[#15171c] dark:text-[#B5B7C8] bg-white flex justify-center items-center py-3 px-6 md:mr-4 rounded-md font-semibold">
          Staff Count : 1
        </div>
      </div>

      <div className=" flex justify-between gap-6 md:gap-0 md:flex-row flex-col-reverse py-8">
        <div className="md:w-[64%] lg:w-[75%] w-full">

          <div className=" border dark:!border-[#1E2027] border-[#e9ebed] card-shadow mb-10 dark:!bg-[#15171c] rounded-xl px-4 py-4 w-full">
            <div className=" flex justify-between items-center mb-4">
              <p className=" font-semibold text-xl dark:!text-[#F5F5F5] text-black">
                Product Details
              </p>
              <button className=" px-4 py-2.5 rounded-md  bg-[#e9f3ff] dark:bg-[#172331] w-fit text-[#1b84ff] hover:bg-[#1e90ff] hover:text-white font-sans">
                Update Product
              </button>
            </div>
            <div className=" mb-5">
              <p className=" font-semibold dark:!text-[#F5F5F5] text-black">Billing Address:</p>
            </div>
            <div className=" w-full  flex lg:gap-6 lg:flex-row flex-col mb-7">
              <div className=" w-full  lg:w-[60%]">
                <div className=" mb-3   flex justify-between">
                  <div className="w-1/2">
                    <p className=" text-[15px] md:text-md dark:text-[#636674] font-sans">Bill to:</p>
                  </div>
                  <div className="w-1/2">
                    <p className=" text-[15px] md:text-md dark:!text-[#B5B7C8]  text-black font-sans">Smith@gmail.com</p>
                  </div>
                </div>
                <div className="  mb-3 flex justify-between">
                  <div className=" w-1/2">
                    <p className=" text-[15px] md:text-md dark:text-[#636674] font-sans">Customer Name:</p>
                  </div>
                  <div className=" w-1/2">
                    <p className=" text-[15px] md:text-md dark:!text-[#B5B7C8]   text-black font-sans">Emma Smith</p>
                  </div>
                </div>
                <div className="  mb-3 flex justify-between">
                  <div className=" w-1/2">
                    <p className="text-[15px] md:text-md dark:text-[#636674] font-sans">Address:</p>
                  </div>
                  <div className=" w-1/2">
                    <p className="text-[15px] md:text-md dark:!text-[#B5B7C8]  text-black font-sans">
                      Floor 10, 101 Avenue of the Light Square, New York , NY ,
                      10050
                    </p>
                  </div>
                </div>
                <div className="  mb-3 flex justify-between">
                  <div className=" w-1/2">
                    <p className="text-[15px] md:text-md dark:text-[#636674] font-sans">Phone:</p>
                  </div>
                  <div className=" w-1/2">
                    <p className="text-[15px] md:text-md dark:!text-[#B5B7C8]  text-black font-sans">+1231231231</p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className=" mb-3 flex justify-between">
                  <div className="w-1/2">
                    <p className="text-[15px] md:text-md dark:text-[#636674] font-sans">Subscribed Product:</p>
                  </div>
                  <div className="w-1/2">
                    <p className="text-[15px] md:text-md dark:!text-[#B5B7C8]  text-black font-sans">Basic</p>
                  </div>
                </div>
                <div className="  mb-3 flex justify-between">
                  <div className=" w-1/2">
                    <p className=" text-[15px] md:text-md dark:text-[#636674] font-sans">Subscription Fees:</p>
                  </div>
                  <div className=" w-1/2">
                    <p className=" text-[15px] md:text-md  dark:!text-[#B5B7C8]  text-black font-sans">$149.99 / Year</p>
                  </div>
                </div>
                <div className="  mb-3 flex justify-between">
                  <div className=" w-1/2">
                    <p className=" text-[15px] md:text-md dark:text-[#636674] font-sans">Billing Method:</p>
                  </div>
                  <div className=" w-1/2">
                    <p className=" text-[15px] md:text-md dark:!text-[#B5B7C8]  text-black font-sans">Annually</p>
                  </div>
                </div>
                <div className="  mb-3 flex justify-between">
                  <div className=" w-1/2">
                    <p className=" text-[15px] md:text-md dark:text-[#636674] font-sans">Currency:</p>
                  </div>
                  <div className=" w-1/2">
                    <p className=" text-[15px] md:text-md dark:!text-[#B5B7C8]   text-black font-sans">USD - US Dollar</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className=" font-semibold text-lg dark:!text-[#F5F5F5] text-black">
                Subscribed Products:
              </p>
              <div className=" overflow-scroll no-scrollbar my-5">
                <table className=" w-full  table align-middle table-row-dashed ps-6 mb-0">
                  <thead>
                    <tr className=" pb-4 text-[14px] md:text-md  border-b uppercase dark:border-b-[#26272F] border-b-gray-300 text-start font-semibold text-gray-300">
                      <td className=" dark:bg-[#15171c] dark:text-[#636674] min-w-[150px]">Product</td>
                      <td className="dark:bg-[#15171c] dark:text-[#636674] min-w-[125px]">SUBSCRIPTION ID</td>
                      <td className="dark:bg-[#15171c] dark:text-[#636674] min-w-[125px]">QTY</td>
                      <td className="dark:bg-[#15171c] dark:text-[#636674] min-w-[125px]">TOTAL</td>
                      <td className="dark:bg-[#15171c] dark:text-[#636674] min-w-[70px] text-end">ACTIONS</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" dark:border-b-[#26272F] border-dashed">
                      <td className="  dark:bg-[#15171c] text-[14px] md:text-md  pt-4">
                        <div className=" dark:!text-[#B5B7C8] font-semibold text-black">Basic</div>
                        <div className=" dark:text-[#808290] text-gray-500">Basic Yearly</div>
                      </td>
                      <td className=" dark:bg-[#15171c]">
                        <span className=" text-[14px] md:text-sm inline-flex items-center dark:bg-[#302024] bg-red-200 rounded-md px-2 text-red-500">
                          sub_33133_2322
                        </span>
                      </td>
                      <td>
                        <div className=" dark:!text-[#B5B7C8] dark:bg-[#15171c] text-[14px] md:text-md">1</div>
                      </td>
                      <td className=" dark:!text-[#B5B7C8] dark:bg-[#15171c] text-[14px] md:text-md">$149.99 / Year</td>
                      <td className="  dark:bg-[#15171c] text-end">
                        <button className="dark:!text-[#B5B7C8] text-black rounded-md p-2">
                          ...
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="  border dark:!border-[#1E2027] border-[#e9ebed]  card-shadow dark:bg-[#15171c] rounded-xl px-4 py-4 w-full">
            <div>
              <p className=" font-semibold text-lg dark:!text-[#F5F5F5] text-black">Invoices</p>
              <div className=" overflow-scroll no-scrollbar my-5">
                <table className=" w-full table align-middle table-row-dashed ps-6 mb-0">
                  <thead>
                    <tr className=" dark:border-b-[#26272F] border-dashed pb-4 text-[14px] md:text-md border-b uppercase border-b-gray-300 text-start font-semibold text-gray-300">
                      <td className="  dark:text-[#636674] min-w-[150px]">ORDER ID</td>
                      <td className=" dark:text-[#636674] min-w-[125px]">ANOUNT</td>
                      <td className=" dark:text-[#636674] min-w-[125px]">STATUS</td>
                      <td className=" dark:text-[#636674] min-w-[125px]">DATE</td>
                      <td className=" dark:text-[#636674] min-w-[75px] text-end">INVOICE</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" dark:border-b-[#26272F] border-dashed">
                      <td>
                        <div className=" dark:!text-[#B5B7C8] text-[14px] md:text-md font-semibold text-gray-600">
                          trans_2323_232323
                        </div>
                      </td>

                      <td>
                        <div className=" text-[14px] md:text-md text-green-500">$112.22</div>
                      </td>
                      <td>
                        <span className="text-[14px] dark:bg-[#302024] md:text-md inline-flex items-center bg-red-200 rounded-md px-2 text-red-500">
                          In progress
                        </span>
                      </td>
                      <td> <div className=" dark:!text-[#B5B7C8] text-[14px] md:text-md text-gray-600 ">Nov 01, 2020</div></td>
                      <td className=" text-end">
                        <button className=" dark:!text-[#B5B7C8] my-3 xt-[14px] md:text-md dark:bg-[#2d2d2d] bg-gray-200 text-gray-700 px-3 rounded-md py-2">
                          Download
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className=" flex justify-end w-full">
              <button className=' py-2 px-4 rounded-md w-fit text-white dark:!bg-[#172331] bg-blue-500 hover:text-white'><Link to="/user/payment/history" className=" hover:text-white">View all</Link></button>
            </div>
          </div>

        </div>

        <div className=" border dark:!border-[#1E2027]  border-[#e9ebed]  card-shadow w-full h-fit md:w-[20rem] md:ml-6 lg:mx-6  dark:bg-[#15171c] rounded-xl px-4 py-4">
          <div className=" flex justify-between items-center pb-6">
            <p className=" dark:!text-[#F5F5F5] text-black text-xl font-semibold">Summary</p>
            <button>...</button>
          </div>
          <div className=" flex mb-7 gap-2 items-center">
            <div className=" rounded-[50%] w-16 flex justify-center items-center h-16 bg-red-300">
              image
            </div>
            <div>
              <p className=" text-black dark:!text-[#F5F5F5] text-[15px] md:text-md font-semibold">Sean Bean</p>
              <p className="  text-sm">sean@dellito.com</p>
            </div>
          </div>
          <div className=" border-dashed dark:border-b-[#363843] border-b-[#dbdfe9] mb-7 border-b"></div>
          <div className=" mb-7 ">
            <p className=" text-black  dark:!text-[#F5F5F5] text-[16px] font-semibold mb-3">
              Product details
            </p>
            <div>
              <span className=" text-violet-500 dark:bg-[#272134] bg-gray-200 rounded-md mr-3 text-sm px-2 py-1">
                Basic
              </span>
              <span className=" text-sm font-semibold text-gray-500">
                $149.99/ Year
              </span>
            </div>
          </div>
          <div className=" border-dashed dark:border-b-[#363843] border-b-[#dbdfe9] mb-7 border-b"></div>
          <div className=" mb-10">
            <p className=" text-[16px] dark:!text-[#F5F5F5] text-black font-semibold pb-3">
              Payment detail
            </p>
            <div className=" text-[15px] md:text-md flex gap-2 items-center text-gray-500">
              Mastercard
              <img
                className=" w-7"
                src="https://preview.keenthemes.com/metronic8/demo25/assets/media/svg/card-logos/mastercard.svg"
                alt=""
              />
            </div>
            <div className=" text-[14px] md:text-md text-gray-500 py-1">Exipres Dec 2024</div>
          </div>
          <div className=" border-dashed dark:border-b-[#363843] border-b-[#dbdfe9] mb-7 border-b"></div>
          <div className=" mb-10">
            <p class=" text-lg text-black dark:!text-[#F5F5F5] font-semibold text-[16px] mb-2">
              Subscription Details
            </p>
            <table className=" w-full">
              <tbody>
                <tr className=" text-[14px] md:text-md">
                  <td className=" py-2 pr-2 dark:!text-[#636674] text-gray-500">Subscription ID:</td>
                  <td className=" py-2 pl-2 dark:text-[#B5B7C8] text-gray-800">sub_12121212121</td>
                </tr>
                <tr className=" text-[14px] md:text-md">
                  <td className=" py-2 pr-2 dark:!text-[#636674] text-gray-500">Started:</td>
                  <td className=" py-2 pl-2 dark:text-[#B5B7C8] text-gray-800">15 Apr 2021</td>
                </tr>
                <tr className=" text-[14px] md:text-md">
                  <td className=" py-2 pr-2 dark:!text-[#636674] text-gray-500">Status:</td>
                  <td className=" py-2 pl-2  rounded-md">
                    <span className=" text-[#17c653] text-[12px] font-semibold dark:bg-[#272134] bg-[#dfffea] px-2 py-1 rounded-md">
                      Active
                    </span>
                  </td>
                </tr>
                <tr className=" text-[15px]">
                  <td className=" py-2 pr-2 dark:!text-[#636674] text-gray-500">Next Invoice:</td>
                  <td className=" py-2 pl-2 dark:text-[#B5B7C8] text-gray-800">15 Apr 2022</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" w-fit mb-4">
            <Button className=" bg-blue-500 text-white rounded-sm">
              Manage Subscription
            </Button>
          </div>
        </div>

      </div>
      </Container>
    </div>
  );
}

export default Dashboard;
