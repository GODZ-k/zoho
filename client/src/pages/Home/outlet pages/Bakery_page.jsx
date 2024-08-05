import React from 'react'
import { Container, OutletCard } from '../../../components';

const contentList = [
    {
        headOne:"Elevate Your Service with Cutting-Edge Ordering Technology",
        headTwo:"",
        image:"https://res.cloudinary.com/dlkzk9g9k/image/upload/v1722575652/43_tyx5s8.png",
        transform:0,
        direction:0,
        content:"Upgrade the way orders are handled with advanced ordering technology. This system streamlines the process, making it faster and more efficient. Customers can place their orders quickly, and staff can manage them with ease. By adopting these modern tools, service becomes smoother and more accurate, leading to higher satisfaction and a better dining experience for everyone involved."
    },
    {
        headOne:"Improve Inventory Accuracy and Reduce Wastage with Modern Solutions",
        headTwo:"",
        image:"https://res.cloudinary.com/dlkzk9g9k/image/upload/v1722575654/44_yqs8ua.png",
        transform:1,
        direction:1,
        content:"Enhance inventory accuracy and cut down on waste using modern solutions. QRDine-In software can help track stock levels precisely, predict needs, and alert you before items run low. This means fewer errors, less excess inventory, and reduced wastage. With better tracking, make informed decisions, maintain optimal stock levels, and ensure efficient use of resources for smoother operations."
    },
    {
        headOne:"Advanced Billing software for All-Round Performance",
        headTwo:"",
        image:"https://res.cloudinary.com/dlkzk9g9k/image/upload/v1722575654/45_mxjaxe.png",
        transform:0,
        direction:0,
        content:"Enhance restaurant management with advanced billing software designed for comprehensive performance. This tool streamlines the billing process, reduces errors, and speeds up transactions. With features like easy integration, detailed reporting, and user-friendly interfaces, it helps manage all aspects of billing efficiently. Simplify operations, save time, and ensure accurate billing with this reliable solution tailored for optimal performance in every restaurant setting.   "
    }
]


function Bakery_page() {
  return (
    <Container>
        <OutletCard 
        head="Bakery"
        headOne={"Enjoy Fresh Bread and Sweet Treats from the Bakery"}
        headContent={"A bakery always offers fresh bread, cakes, pastries, and cookies are baked and sold. It’s the perfect spot to pick up delicious treats and enjoy homemade flavors."}
        frontImage={"https://res.cloudinary.com/dyslwsvb1/image/upload/v1722416080/Bakery_j9sf6h.png"}
        // mainHead={"All-in-one billing solution in just one click"}
        contentList={contentList}
        />
    </Container>
  );
}


export default Bakery_page