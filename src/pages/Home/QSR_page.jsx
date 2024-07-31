import React from 'react'
import { Container, OutletCard } from '../../components';

const contentList = [
    {
        headOne:"QSR Marketing Strategies for Success",
        headTwo:"",
        image:"",
        transform:0,
        direction:0,
        content:"Effective QSR marketing focuses on attracting and keeping customers. Use social media to connect with your audience and showcase new offers. Offer loyalty programs to encourage repeat business. Local promotions and partnerships can drive foot traffic. Keep the menu exciting with limited-time specials to draw in new customers. Consistent branding and high-quality service help build a strong reputation and keep customers coming back."
    },
    {
        headOne:"The Simplest QSR Restaurant Inventory Management Software",
        headTwo:"",
        image:"",
        transform:1,
        direction:1,
        content:"Manage restaurant inventory with ease using simple software designed for QSR. Track stock levels, reorder supplies, and reduce waste effortlessly. The user-friendly interface ensures quick updates and accurate records. Get real-time insights into inventory needs and make informed decisions without the hassle. Streamline inventory tasks to focus on delivering great service and food. QRDine-In Restaurant software makes inventory management straightforward and efficient."
    },
    {
        headOne:"POS Point of Sale Software",
        headTwo:"",
        image:"",
        transform:0,
        direction:0,
        content:"Quick service POS system is a modern and advanced food service management software that helps you to manage your all business operations including customers, orders, sales, accounts, employees, kitchen, suppliers, production, and so on with a single automation system."
    }
]


function QSR_page() {
  return (
    <Container>
        <OutletCard 
        head="QSR"
        headOne={"Enjoy Quick and Smooth Dining at QSR"}
        headContent={"QSR provides fast service in a casual setting with simple seating and a focused menu. Ideal for quick, tasty meals when you're short on time and looking for convenience."}
        frontImage={"https://res.cloudinary.com/dyslwsvb1/image/upload/v1722416096/Quick_Service_Restaurant_epwbsy.png"}
        // mainHead={"All-in-one billing solution in just one click"}
        contentList={contentList}
        />
    </Container>
  );
}


export default QSR_page