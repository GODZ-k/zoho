import React from 'react'
import { Container, OutletCard } from '../../components';

const contentList = [
    {
        headOne:"Create a Successful Roadmap for Pop-Up Restaurant",
        headTwo:"",
        image:"./popupRestaurant/popupRestaurantsBanner.png",
        transform:0,
        direction:0,
        content:"Planning a pop-up restaurant involves key steps. Start by defining your unique concept and researching your market. Choose a strategic location and design a focused menu. Source quality ingredients and hire skilled staff. Promote your pop-up through social media and local channels. Set up operations efficiently and gather customer feedback. Evaluate your performance to refine future pop-ups. Following these steps will help ensure success."
    },
    {
        headOne:"Unlock Sales Potential Through Smart Item Categorization",
        headTwo:"",
        image:"./popupRestaurant/popupRestaurantsBanner.png",
        transform:1,
        direction:1,
        content:"To maximize sales by understanding item categories, start by analyzing which categories bring the most revenue. Group items into clear categories like appetizers, mains, and desserts. Track which categories are popular and adjust your offerings based on customer preferences. Promote high-margin categories and offer specials to boost sales. Regularly review sales data to refine your menu and strategies, ensuring you meet customer needs and increase profitability."
    },
    {
        headOne:"Generate Invoices and bills Instantly with QRDine-In Restaurant Software",
        headTwo:"",
        image:"./popupRestaurant/popupRestaurantsBanner.png",
        transform:0,
        direction:0,
        content:"QRDine-In Restaurant Software makes creating invoices and bills quick and easy. Generate accurate, professional invoices with just a few clicks, saving time and reducing errors. This software helps streamline the billing process, ensuring fast and efficient transactions. Ideal for busy restaurants, it simplifies financial management and improves overall efficiency, so you can focus on providing great service to your customers."
    }
]


function PopUpRestaurant_page() {
  return (
    <Container>
        <OutletCard 
        head="pop-up restaurant"
        headOne={"Explore New Tastes at the Latest Pop-Up Restaurants"}
        headContent={"Enjoy fresh, exciting meals at the latest pop-up restaurant. Experience new flavors and special dishes in a unique setting. It’s a great way to taste something different for a limited time."}
        frontImage={"https://res.cloudinary.com/dyslwsvb1/image/upload/v1722416095/popUp-Resturant_qsovpi.png"}
        // mainHead={"All-in-one billing solution in just one click"}
        contentList={contentList}
        />
    </Container>
  );
}


export default PopUpRestaurant_page