import React from "react";
import { Container, Feature_card } from "../../../components";

function DetailingReport_page() {
  const titleOne = [
    {
      title: " Real-Time Sales and Order Tracking Reports",
      image: "10.png",
      content:
        "Create up-to-date sales and order reports with real-time data. Monitor order status, sales, and inventory for better decisions. Enjoy accurate, timely information to manage your restaurant efficiently and respond quickly to changes. Stay informed and track performance easily.",
    },
    {
        title: "One Dashboard for all reports",
        image: "10.png",
        content:
          "Manage reports and financial data in one dashboard with QRDine-In POS software. Review everything in one place without open multiple applications at a time. Downloadable reports simplify taxation. Track and filter income and download reports anytime with our user-friendly system.",
      },
  ];

  const titleTwo = [
    {
        title: " Easy-to-Manage Inventory Reports",
        image: "10.png",
        content:
          "Our inventory reports are designed to be easy to manage. View and track your stock levels without any hassle. Get clear, simple reports that show exactly what you need to know. With straightforward data and user-friendly tools, keeping your inventory organized and up-to-date is easy and stress-free. Enjoy a smooth experience in managing your inventory with our easy-to-use reporting system."},
       {
        title: "Multi-Location, Franchise Report",
        image: "10.png",
        content:
          "If you’re managing more restaurants, you need to know the status of your inventory, orders, and inside reports in multiple locations. QRDine restaurants software provides clear and simple reports to help you see how each site is doing and compare results. Stay on top of your franchise operations with easy access to key data.",
      },
  ];
  return (
    <Feature_card
      headOne={"Complete Reports "}
      headTwo={"Made Easy through just one click"}
      content={"Create complete reports quickly and easily with just one click. Save time and effort with our simple reporting system that makes creating detailed reports." }
      mainImage={"10.png"}
      mainHeadTwo={"QRDine-In inventory management software that saves your time and money"}
      titleOne={titleOne}
      titleTwo={titleTwo}
    />
  );
}

export default DetailingReport_page;
