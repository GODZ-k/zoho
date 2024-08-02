import React from "react";
import { Container, Feature_card } from "../../../components";

function QR_ordering_page() {
  const titleOne = [
    {
      title: "Fast & Easy Orders",
      image: "10.png",
      content:
        "Quickly scan and order your favorite dishes with our user-friendly scan-to-order solutions.Get your food quickly with our faster delivery service. Track your order from the kitchen to your door in real time. QRDine-In restaurant POS System makes your dining experience smooth and distress-free with our reliable and quick service. Enjoy hot, fresh food delivered on time, every time.",
    },
    {
        title: "Quick and Safe Contactless Transactions",
        image: "10.png",
        content:
          "Enjoy the benefits and security of Fast and Safe Contactless Transactions. With just a touch or a scan QR Code, you can make payments quickly without the need for cash or cards. Our contactless technology ensures your information is protected, making your transactions both speedy and secure.",
      },
  ];

  const titleTwo = [
    {
        title: "Real-Time Updates, insides",
        image: "10.png",
        content:
          "Always stay informed with real-time updates on orders, services, and more. Get live information as it happens, tracking deliveries or checking request status. Enjoy the convenience of up-to-date details directly on your device."},
       {
        title: "Reduced Staff Workload",
        image: "10.png",
        content:
          "Make work easier with our POS system solutions that eliminates your staff tasks and makes working life easy. Our system helps automate jobs routine, table management, menu customization, order delivering system, so your team can focus on more crucial tasks. ",
      },
  ];
  return (
    <Feature_card
      headOne={"Dining,"}
      headTwo={"Made Simple"}
      content={"QR code ordering is a type of digital ordering that allows customers to view your order, menu food outlets, and pay on their own devices. Equally important, this contactless solution is helping restaurants improve their efficiency and benefits." }
      mainImage={"10.png"}
      mainHeadOne={
        "Make your restaurant"
      }
      mainHeadTwo={"Scan-to-Order management system quicker & more efficient"}
      titleOne={titleOne}
      titleTwo={titleTwo}
    />
  );
}

export default QR_ordering_page;
