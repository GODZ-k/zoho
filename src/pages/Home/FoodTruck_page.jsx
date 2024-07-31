import React from 'react'
import { Container, OutletCard } from '../../components';

const contentList = [
    {
        headOne:"Managing Food Truck Finances",
        headTwo:"",
        image:"./foodTruck/foodTruckBanner.png",
        transform:0,
        direction:0,
        content:"Efficiently managing food truck finances is crucial for success. Track daily sales and expenses to keep your budget on track. Use simple tools to record transactions and monitor cash flow. Regularly review financial reports to make informed decisions and control costs. Staying organized helps ensure profitability and supports smooth operations, making it easier to grow and sustain your food truck business."
    },
    {
        headOne:"Innovative marketing strategies and collaborations",
        headTwo:"",
        image:"./foodTruck/foodTruckBanner.png",
        transform:1,
        direction:1,
        content:"Explore fresh marketing ideas and partner with others to boost your reach. Use social media and local events to attract attention. Team up with influencers or other businesses to create unique promotions. Engaging in community events and online collaborations can increase visibility and attract more customers. Simple, creative approaches can make a big difference in growing your business and connecting with a wider audience."
    },
    {
        headOne:"Customer Loyalty Programs for Food Trucks",
        headTwo:"",
        image:"./foodTruck/foodTruckBanner.png",
        transform:0,
        direction:0,
        content:"Boost customer return with simple loyalty programs. Offer rewards like discounts or free items after a certain number of purchases. Use punch cards or digital apps to track visits. Personalized offers and exclusive deals can keep customers coming back. Engage with your audience through social media and keep them updated on new rewards. A good loyalty program makes customers feel valued and encourages repeat business."
    }
]


function FoodTruck_page() {
  return (
    <Container>
        <OutletCard 
        head="Food Trucks"
        headOne={"Explore Delicious Dishes with Food Trucks"}
        headContent={"Food Trucks bring delicious meals right to you. Enjoy a variety of tasty dishes served quickly from a convenient spot. Perfect for grabbing a bite on the go and trying new flavors."}
        frontImage={"https://res.cloudinary.com/dyslwsvb1/image/upload/v1722416090/food_Truck_vivsyg.png"}
        // mainHead={"All-in-one billing solution in just one click"}
        contentList={contentList}
        />
    </Container>
  );
}


export default FoodTruck_page