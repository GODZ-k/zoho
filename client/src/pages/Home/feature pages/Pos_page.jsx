import React from "react";
import { Container, Feature_card } from "../../../components";

function Pos_page() {
  const titleOne = [
    {
      title: "Fast and Efficient Restaurant Billing System",
      image: "10.png",
      content:
        "POS Billing Software is to manage your restaurant operations. Manage your Stores- sales, inventory, purchases, customers, and finances more easily with POS software. Additionally, users can Create & Print Professional Invoices & enjoy uninterrupted GST Billing & Return Filing.",
    },
    {
        title: "Inventory Management",
        image: "10.png",
        content:
          "Track your stock, set reorder points, and keep inventory up to date. Our  POS software with inventory tracking helps to streamline your entire business. import bills from any Excel, CSV, or PDF format to save time with 100% accuracy & map items/products with existing items managed easily.",
      },
  ];

  const titleTwo = [
    {
        title: "One System to Manage All Your Online Orders",
        image: "10.png",
        content:
          "One system to manage all your online orders simplifies the process. Easily track, organize, and fulfill orders in one place. Save time, reduce errors, and keep customers happy with smooth operations."},
      
  ];
  return (
    <Feature_card
      headOne={"Simplify Restaurant Management"}
      headTwo={"With Point of Sale Software"}
      content={"POS Billing Software to simplify billing and invoicing operations with high-margin profits. Scan products easily with the barcode scanners and quickly create professional bills for a better customer experience." }
      mainImage={"10.png"}
      mainHeadOne={
        "Make your restaurant"
      }
      mainHeadTwo={"Specially Designed POS Billing Software To Suit Your Restaurant Businesses"}
      titleOne={titleOne}
      titleTwo={titleTwo}
    />
  );
}

export default Pos_page;
