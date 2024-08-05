
import React from 'react'
import { Container, OutletCard } from '../../../components';

const contentList = [
    {
        headOne:"Enjoy a Budget-Friendly Meal at the Food Court",
        headTwo:"",
        image:"https://res.cloudinary.com/dlkzk9g9k/image/upload/v1722575326/34_c3w9t0.png",
        transform:0,
        direction:0,
        content:"Savor delicious and affordable meals at the food court. With a variety of options from different vendors, there's something for everyone at a great price. Enjoy a casual dining experience where you can pick and choose from various cuisines without breaking the bank. The food court offers a relaxed atmosphere and tasty choices, making it easy to enjoy a satisfying meal on a budget."
    },
    {
        headOne:"Customize Digital Menu and boost Sales",
        headTwo:"",
        image:"https://res.cloudinary.com/dlkzk9g9k/image/upload/v1722575641/35_e9syy4.png",
        transform:1,
        direction:1,
        content:"Enhance your restaurant’s success by customizing a digital menu. Tailor the menu to highlight popular items and promotions, making it easy for customers to find what they want. A well-organized digital menu can attract more orders and increase sales. Update it easily to reflect current offerings and special deals. This approach not only improves the customer experience but also helps drive higher revenue and customer satisfaction."
    },
    {
        headOne:"Maximizing Customer Feedback with CRM in Food Courts",
        headTwo:"",
        image:"https://res.cloudinary.com/dlkzk9g9k/image/upload/v1722575641/36_ohlaxz.png",
        transform:0,
        direction:0,
        content:"Using CRM tools in food courts helps gather and manage customer feedback effectively. Track reviews, preferences, and suggestions to improve service and offerings. This approach helps address issues quickly and adapt to customer needs. By analyzing feedback, food court operators can make informed decisions, enhance customer satisfaction, and boost loyalty. CRM systems streamline the feedback process, making it easier to maintain high-quality service."
    }
]


function FoodCourt_page() {
  return (
    <Container>
        <OutletCard 
        head="Food Court"
        headOne={"The Food Court: Great Eats in One Place"}
        headContent={"A Food Court is a shared dining area where you can pick from different food options. It’s usually located in malls, airports, or parks, offering a range of quick meals."}
        frontImage={"https://res.cloudinary.com/dyslwsvb1/image/upload/v1722416088/Food_Court_ocqfhm.png"}
        // mainHead={"All-in-one billing solution in just one click"}
        contentList={contentList}
        />
    </Container>
  );
}


export default FoodCourt_page