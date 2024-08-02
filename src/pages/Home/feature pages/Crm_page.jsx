import React from "react";
import { Container, Feature_card } from "../../../components";

function CRM_page() {
  const titleOne = [
    {
      title: "Analyze Customer Trends and Behaviors through Automated CRM",
      image: "10.png",
      content:
        "Customer Relationship Management (CRM) systems, like QRDine-In, help businesses manage and improve customer interactions by collecting and organizing customer information. They enhance communication, improve customer relationships, and support better sales management. Additionally, they enable data-driven decisions through effective data collection, storage, analysis, and reporting.",
    },
    {
        title: "Increase Customer Loyalty with Automated CRM",
        image: "10.png",
        content:
          "QRDine-in Automated CRM helps simplify your customer relation and management. With giving an opportunity to follow up the clients’ needs and requirements. Get valuable insights into customer behavior and preferences to offer better service. And tracking their purchase history and special notes. Use all this data to improve overall service and win more customers. Enjoy a simpler way to increase customer satisfaction and loyalty.",
      },
  ];

  const titleTwo = [
    {
        title: "Unlock Business Potential with CRM Automation",
        image: "10.png",
        content:
          "Unlock your business’s future with QRDine-In CRM automation. Track customer interactions and purchase history, simplify routine tasks, and gain key insights. Organize everything in one place to boost efficiency and make better decisions. Simplify, streamline, and succeed!"},
  ];
  return (
    <Feature_card
      headOne={"Let's make your business"}
      headTwo={"flourish with QRDine-In "}
      content={"Drive results with QRDine-In automated CRM: streamline processes, save time, and manage customers smoothly. Unlock your business's potential and achieve top results effortlessly. Cut the clutter, follow the flow, and succeed!" }
      mainImage={"10.png"}
      mainHeadOne={
        "Transforming client and customer relationships for the better with us"
      }
    //   mainHeadTwo={"Scan-to-Order management system quicker & more efficient"}
      titleOne={titleOne}
      titleTwo={titleTwo}
    />
  );
}

export default CRM_page;
