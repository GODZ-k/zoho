import React from 'react'
import { Container, OutletCard } from '../../components';

const contentList = [
    {
        headOne:"Manage All Your Menus in One Place with Ease",
        headTwo:"",
        image:"",
        transform:0,
        direction:0,
        content:"Effortlessly control your restaurant's menu with a centralized management system. Update and manage all your menus from a single platform, making changes quick and simple. This approach saves time and ensures consistency across all your locations. Whether updating prices or adding new items, having everything in one place makes menu management smooth and efficient. Enjoy a streamlined process and focus more on serving your customers."
    },
    {
        headOne:"Stay Informed with Real-Time Centralized Monitoring Reports",
        headTwo:"",
        image:"",
        transform:1,
        direction:1,
        content:"Keep your operations on track with real-time centralized monitoring. Our system provides instant updates and insights, allowing you to make quick decisions and stay ahead. Track performance, spot issues early, and ensure smooth operations with easy-to-read reports. Centralized monitoring helps you manage everything from one place, making it simpler to stay informed and in control."
    },
    {
        headOne:"All-in-One Restaurant Billing Software: Simplify Your Operations",
        headTwo:"",
        image:"",
        transform:0,
        direction:0,
        content:"Simplify restaurant management with our all-in-one billing software. Handle orders, track sales, and manage payments effortlessly from one platform. Designed for ease of use, it helps you streamline daily tasks and ensure accuracy. This software makes billing quick and easy, reducing errors and saving time. Perfect for busy restaurants, it provides everything you need to keep operations smooth and efficient."
    }
]


function FoodChain_page() {
  return (
    <Container>
        <OutletCard 
        head="Food Chain"
        headOne={"Enjoy Tasty Meals at Your Favorite Food Chain"}
        headContent={"A large food chain has many locations under one brand, often as franchises. Each outlet offers a consistent menu, making it easy to enjoy your favorite meals anywhere."}
        frontImage={"https://res.cloudinary.com/dyslwsvb1/image/upload/v1722416093/Large_Food_chain_vkowni.png"}
        // mainHead={"All-in-one billing solution in just one click"}
        contentList={contentList}
        />
    </Container>
  );
}


export default FoodChain_page