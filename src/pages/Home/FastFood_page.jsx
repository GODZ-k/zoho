import React from 'react'
import { Container, OutletCard } from '../../components';

const contentList = [
    {
        headOne:"QR Code Based Ordering",
        headTwo:"",
        image:"./fastFood/fastFoodBanner.png",
        transform:0,
        direction:0,
        content:"QR code-based ordering makes it easy and quick for customers to place their orders. Simply scan the QR code at your table with a smartphone, view the menu, and select your items. This system speeds up the ordering process, reduces wait times, and minimizes physical contact. It’s a convenient and modern way to enjoy a smooth dining experience while keeping everything simple and efficient."
    },
    {
        headOne:"Customer Feedback and Enhance Taste and Quality",
        headTwo:"",
        image:"./fastFood/fastFoodBanner.png",
        transform:1,
        direction:1,
        content:"Customer feedback is crucial for improving taste and quality. Collect reviews and feedback to understand what diners enjoy and what needs adjustment. Use this input to refine recipes, adjust seasoning, and ensure consistent quality. Regularly updating dishes based on feedback helps meet customer preferences and maintain high standards. QRDine-In provides software for restaurants to improve customer relationships."
    },
    {
        headOne:"Unlock Business Potential with Detailed Sales Reports",
        headTwo:"",
        image:"./fastFood/fastFoodBanner.png",
        transform:0,
        direction:0,
        content:"Detailed sales reports provide valuable insights into your business performance. They help track sales trends, identify top products, and understand customer preferences. By analyzing these reports, you can make informed decisions, spot areas for improvement, and drive growth. Regularly reviewing sales data helps optimize strategies and boost overall efficiency, leading to better outcomes and increased business success."
    }
]


function Fastfood_page() {
  return (
    <Container>
        <OutletCard 
        head="Fast Food"
        headOne={"Experience the Joy of Tasty Fast Food Delights!"}
        headContent={"Fast Food serves up quick and tasty meals for when you're on the move. Enjoy hot burgers, fries, and more, all served fast with a smile. Perfect for busy days!"}
        frontImage={"./fastFood/fastFood.png"}
        mainHead={"All-in-one billing solution in just one click"}
        contentList={contentList}
        />
    </Container>
  );
}


export default Fastfood_page