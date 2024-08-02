

import React from 'react'
import { Container, OutletCard } from '../../../components';

const contentList = [
    {
        headOne:"Smart Inventory Solutions: Monitor Item Expiry and Stock",
        headTwo:"",
        image:"https://res.cloudinary.com/dlkzk9g9k/image/upload/v1722575647/40_f7tj0l.png",
        transform:0,
        direction:0,
        content:"Stay on top of inventory with smart solutions that track item expiry and stock levels. Easily manage stock to avoid wastage and ensure fresh items are always available. These tools help monitor expiration dates and maintain optimal stock levels, making inventory management simple and efficient. Keep your supplies in check and make informed decisions to enhance your business operations."
    },
    {
        headOne:"Improve Customer Service through Smart Order Management",
        headTwo:"",
        image:"https://res.cloudinary.com/dlkzk9g9k/image/upload/v1722575648/41_mk7mp7.png",
        transform:1,
        direction:1,
        content:"Enhance customer service with efficient order management. Use smart tools to track orders, manage inventory, and streamline processes. Quick responses and accurate order handling make customers feel valued and satisfied. By integrating user-friendly systems, ensure timely deliveries and clear communication. A well-organized order management system not only boosts efficiency but also creates a better experience for your customers, helping to build long-term loyalty."
    },
    {
        headOne:"Advance Solutions for Stock Management and Low Inventory Alerts",
        headTwo:"",
        image:"https://res.cloudinary.com/dlkzk9g9k/image/upload/v1722575650/42_vlm4bu.png",
        transform:0,
        direction:0,
        content:"Effective stock management is crucial for smooth operations. Advanced solutions help track inventory levels and send alerts when stock is low. This ensures timely reordering and prevents shortages. By using automated alerts, businesses can maintain optimal stock levels, reduce waste, and avoid disruptions. Streamline inventory processes with these smart tools to keep your operations running efficiently and keep customers satisfied."
    }
]


function YummyTreat_page() {
  return (
    <Container>
        <OutletCard 
        head="Ice Cream & Desserts"
        headOne={"Yummy Treats, Joyful Smiles"}
        headTwo={"Ice Cream & Dessert"}
        headContent={"Enjoy a range of delicious treats including ice cream, gelato, frozen yogurt, pastries, and cakes. Ideal for satisfying sweet cravings with a variety of delightful options available anytime."}
        frontImage={"https://res.cloudinary.com/dyslwsvb1/image/upload/v1722416092/Ice_Cream_mlwrho.png"}
        // mainHead={"All-in-one billing solution in just one click"}
        contentList={contentList}
        />
    </Container>
  );
}


export default YummyTreat_page