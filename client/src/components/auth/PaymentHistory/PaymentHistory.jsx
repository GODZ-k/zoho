import React, { useState } from "react";
import { Link } from "react-router-dom";

const PaymentHistory = () => {
  const itemsPerPage = 10; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Mock data for payment history
  const paymentData = [
    {
      orderId: "trans_2323_232323",
      amount: "$112.22",
      status: "In progress",
      date: "Nov 01, 2020",
    },
    {
      orderId: "trans_2323_232323",
      amount: "$112.22",
      status: "In progress",
      date: "Nov 01, 2020",
    }, {
      orderId: "trans_2323_232323",
      amount: "$112.22",
      status: "In progress",
      date: "Nov 01, 2020",
    }, {
      orderId: "trans_2323_232323",
      amount: "$112.22",
      status: "In progress",
      date: "Nov 01, 2020",
    }, {
      orderId: "trans_2323_232323",
      amount: "$112.22",
      status: "In progress",
      date: "Nov 01, 2020",
    }, {
      orderId: "trans_2323_232323",
      amount: "$112.22",
      status: "In progress",
      date: "Nov 01, 2020",
    }, {
      orderId: "trans_2323_232323",
      amount: "$112.22",
      status: "In progress",
      date: "Nov 01, 2020",
    }, {
      orderId: "trans_2323_232323",
      amount: "$112.22",
      status: "In progress",
      date: "Nov 01, 2020",
    }, {
      orderId: "trans_2323_232323",
      amount: "$112.22",
      status: "In progress",
      date: "Nov 01, 2020",
    }, {
      orderId: "trans_2323_232323",
      amount: "$112.22",
      status: "In progress",
      date: "Nov 01, 2020",
    }, {
      orderId: "trans_2323_232323",
      amount: "$112.22",
      status: "In progress",
      date: "Nov 01, 2020",
    }, {
      orderId: "trans_2323_232323",
      amount: "$112.22",
      status: "In progress",
      date: "Nov 01, 2020",
    },
    // Add more mock data as needed
  ];

  // Calculate the total number of pages
  const totalPages = Math.ceil(paymentData.length / itemsPerPage);

  // Get current items based on the current page
  const currentItems = paymentData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage  
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    
    <div className="card-shadow dark:bg-[#0F1014] bg-[#f4f6fa] py-4 px-3 sm:px-4 md:px-8 w-full">
      <div>
        <div className="flex justify-between flex-wrap gap-4 mt-6">
          <div>
          <p className="font-semibold dark:!text-[#F5F5F5]  text-lg pb-2  text-black">Payment history</p>
          <p className=" text-sm font-semibold">Home<span className="px-2">/</span>User<span className="px-2">/</span>Payment<span className="px-2">/</span>History</p>
          </div>
          <Link to="/user/dashboard">
            <button className="bg-gray-200 dark:bg-[#2d2d2d] dark:!text-[#B5B7C8] px-2 py-2 rounded-md text-gray-500">
              <i className="fa-solid fa-arrow-left px-2"></i>Back
            </button>
          </Link>
        </div>
        <div className="overflow-scroll px-3 py-4 md:px-12 md:py-8 dark:!bg-[#15171c] card-shadow border dark:!border-[#1E2027] border-[#e9ebed] bg-white rounded-xl card-shadow no-scrollbar my-5">
          <table className="w-full table align-middle table-row-dashed ps-6 mb-0">
            <thead>
              <tr className="pb-4 dark:border-b-[#26272F] text-[14px] md:text-md border-b uppercase border-b-gray-300 text-start font-semibold text-gray-300">
                <td className="dark:bg-[#15171c] dark:text-[#636674] min-w-[150px]">ORDER ID</td>
                <td className="dark:bg-[#15171c] dark:text-[#636674] min-w-[125px]">AMOUNT</td>
                <td className=" dark:bg-[#15171c] dark:text-[#636674] min-w-[125px]">STATUS</td>
                <td className="dark:bg-[#15171c] dark:text-[#636674] min-w-[125px]">DATE</td>
                <td className="dark:bg-[#15171c] dark:text-[#636674] min-w-[75px] text-end">INVOICE</td>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="text-[14px] dark:text-[#808290] md:text-md font-semibold text-gray-600">
                      {item.orderId}
                    </div>
                  </td>
                  <td>
                    <div className="text-[14px] md:text-md text-green-500">
                      {item.amount}
                    </div>
                  </td>
                  <td>
                    <span className="text-[14px] md:text-md inline-flex items-center  dark:bg-[#302024] bg-red-200 rounded-md px-2 text-red-500">
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <div className="text-[14px] dark:text-[#808290] md:text-md text-gray-600">
                      {item.date}
                    </div>
                  </td>
                  <td className="text-end">
                    <button className="text-[14px] dark:bg-[#2d2d2d] dark:!text-[#B5B7C8] md:text-md bg-gray-200 text-gray-700 px-3 rounded-md py-2">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex  justify-between items-center mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-[#1e90ff] text-white px-3 py-2 rounded-md text-sm md:text-md"
          >
            Previous
          </button>
          <span className="text-gray-600 text-sm md:text-md">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-[#1e90ff] text-white px-3 py-2 rounded-md text-sm md:text-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default PaymentHistory;
