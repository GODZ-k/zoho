

import React from 'react'
import { Container, OutletCard } from '../../components';

const contentList = [
    {
        headOne:"Kitchen Inventory Management Strategies",
        headTwo:"",
        // image:"./popupRestaurant/popupRestaurantsBanner.png",
        transform:0,
        direction:0,
        content:"Effective kitchen inventory management keeps track of ingredients and supplies, reducing waste and saving money. Regularly check stock levels and update inventory records. Use a system to monitor usage patterns and order supplies as needed. Implementing clear storage practices helps prevent spoilage and ensures easy access to items. Efficient inventory management leads to smoother kitchen operations, cost savings, and consistently high-quality dishes."
    },
    {
        headOne:"Improve Delivery Timeliness and Reliability with Smart Tools",
        headTwo:"",
        // image:"./popupRestaurant/popupRestaurantsBanner.png",
        transform:1,
        direction:1,
        content:"Enhance delivery efficiency using smart tools designed for quick and accurate service. These tools help track orders, optimize routes, and reduce delays, ensuring timely deliveries. By integrating smart technology, businesses can streamline operations and boost customer satisfaction. Keep deliveries on schedule and maintain reliability with advanced solutions that make managing and tracking orders simple and effective."
    },
    {
        headOne:"Boost Productivity with Smart Multiple Order Management Strategies",
        headTwo:"",
        // image:"./popupRestaurant/popupRestaurantsBanner.png",
        transform:0,
        direction:0,
        content:"Efficiently manage multiple orders with smart strategies. Use tools that streamline the order process, reduce errors, and speed up service. Implementing these strategies helps keep everything organized and ensures timely delivery. By optimizing workflows, it's possible to handle more orders effectively, improve customer satisfaction, and enhance overall productivity in your business. Make managing multiple orders simple and stress-free with the right approach."
    }
]


function CloudKitchen_page() {
  return (
    <Container>
        <OutletCard 
        head="Cloud Kitchens"
        headOne={"Cloud Kitchens"}
        headTwo={"Easy and Appetizing Meal Choices"}
        headContent={"A cloud kitchen is a specialized kitchen set up to prepare meals exclusively for delivery. It doesn’t offer a dine-in option, ensuring you get hot, fresh food delivered right to your door."}
        frontImage={"https://res.cloudinary.com/dyslwsvb1/image/upload/v1722416084/Cloud_Kitchen_yntvmn.png"}
        // mainHead={"All-in-one billing solution in just one click"}
        contentList={contentList}
        />
    </Container>
  );
}


export default CloudKitchen_page