import React from "react";
import { Container, Feature_card } from "../../../components";

function EBilling_page() {
  const titleOne = [
    {
      title: "Quick Billing Software for Restaurants",
      image: "10.png",
      content:
        "QRDine-In restaurant billing software enables fast billing, invoice generation, and printing in seconds using a regular printer. You can connect via Bluetooth, Wi-Fi, or cable. Additionally, Sales invoices can be sent along with the bills through an email, and WhatsApp, in a single click. ",
    },
    {
        title: "Quick Billing Software for Restaurants",
        image: "10.png",
        content:
          "Make your restaurant’s customer experience better with customizable bill formats using QRDine-In. This software lets you design invoices that match your brand’s style, adjusting fonts, colors, and layouts. Personalizing your bills gives a professional look and makes transactions more memorable. ",
      },
  ];

  const titleTwo = [
    {
        title: "Quick Billing Software for Restaurants",
        image: "10.png",
        content:
          "QRDine-In restaurant billing software enables fast billing, invoice generation, and printing in seconds using a regular printer. You can connect via Bluetooth, Wi-Fi, or cable.",
      }, {
        title: "Quick Billing Software for Restaurants",
        image: "10.png",
        content:
          "Easily manage table and food reservations, monitor table status, and assign staff to specific areas to boost service speed and customer satisfaction, with advanced features and justified options. Whether you are running a small café or restaurant, QSR, Cloud Kitchen, the right POS system can make a difference in our day-to-day operations. ",
      },
  ];
  return (
    <Feature_card
      headOne={"The Perfect Billing "}
      headTwo={"Software for Restaurant Management"}
      content={"Upgrade your restaurant with multi-screen monitor billing software. Process orders and payments efficiently from different sections. Combine with other programs for real-time sales, inventory control, and reporting, ensuring smooth workflow and enhanced customer satisfaction."
      }
      mainImage={"10.png"}
      mainHeadOne={
        "All-in-one restaurant"
      }
      mainHeadTwo={"Billing POS system that handles all your operations on a single screen."}
      titleOne={titleOne}
      titleTwo={titleTwo}
    />
  );
}

export default EBilling_page;
