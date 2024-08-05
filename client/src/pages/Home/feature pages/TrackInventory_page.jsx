import React from "react";
import { Container, Feature_card } from "../../../components";

function Trackinventory_page() {
  const titleOne = [
    {
      title: "Materials Requirement and Multi-stage recipe management",
      image: "10.png",
      content:
        "Managing materials and multi-stage recipes made it easy. Track what you need for each step of your recipe. Save time and reduce waste with simple planning. Keep your kitchen running smoothly by organizing ingredients and steps. Easy tools for better cooking and preparation.",
    },
    {
        title: "Effective Raw Material Management for Restaurant",
        image: "10.png",
        content:
          "Manage raw materials efficiently with easy-to-use tools. Track your needs, cut down on waste, and ensure you have the right supplies at all times. Good raw material management helps your restaurant operate smoothly, saving both time and money. Simple methods to keep your kitchen's ingredients organized and under control.",
      },
  ];

  const titleTwo = [
    {
        title: "Real-Time Insights and Detailed Reports for Better Business Management",
        image: "10.png",
        content:
          "Real-time insights and detailed reports help manage your business better. Simplify restaurant inventory management with advanced software. Easily track stock, reduce waste, and save money. Use simple tools for ordering and tracking to keep your kitchen running smoothly and efficiently. "},
  ];
  return (
    <Feature_card
      headOne={"Restaurant Inventory Management"}
      headTwo={"Made Easy! With Advance Software"}
      content={"Restaurant inventory management made it easy! Use advanced software to keep track of stock, reduce waste, and save money. Simple tools help you manage everything from ordering to tracking. Ensure your kitchen runs smoothly and efficiently with our easy-to-use inventory software." }
      mainImage={"10.png"}
      mainHeadOne={
        "The Importance of Inventory Software"
      }
      mainHeadTwo={"For Modern Restaurants"}
      titleOne={titleOne}
      titleTwo={titleTwo}
    />
  );
}

export default Trackinventory_page;
