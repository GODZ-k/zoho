import React from 'react'
import { Container, OutletCard } from '../../../components';

const contentList = [
    {
        headOne:"Provides a relaxed and cozy dining experience",
        headTwo:"",
        image:"https://res.cloudinary.com/dlkzk9g9k/image/upload/v1722575672/Casual_Dinning_1_khwpot.png",
        transform:0,
        direction:0,
        content:"When it comes to dining out, finding a restaurant that provides a relaxed and cozy atmosphere is key to truly enjoying the experience. A cozy dining environment allows diners to unwind and fully appreciate their meal without feeling rushed or overwhelmed."
    },
    {
        headOne:"Improving Order Management and Boost Service Quality",
        headTwo:"",
        image:"https://res.cloudinary.com/dlkzk9g9k/image/upload/v1722575674/Casual_Dinning_2_vsmf2q.png",
        transform:1,
        direction:1,
        content:"Order management is the process of handling customer orders efficiently from start to finish. It includes tracking orders, managing inventory, and ensuring timely delivery. Effective order management helps in maintaining customer satisfaction by providing accurate order updates and resolving any issues quickly. "
    },
    {
        headOne:"Best Practices in Billing Management for Smooth Operations",
        headTwo:"",
        image:"https://res.cloudinary.com/dlkzk9g9k/image/upload/v1722575675/Casual_Dinning_3_u58ekl.png",
        transform:0,
        direction:0,
        content:" Effective billing management ensures smooth operations by focusing on key practices. Start with clear and accurate invoicing to prevent errors. Regularly track payments and follow up on overdue accounts. Training staff on billing procedures can improve efficiency. These steps help maintain financial accuracy, enhance cash flow, and keep customers satisfied with timely, clear billing information."
    }
]


function CasualDining_page() {
  return (
    <Container>
        <OutletCard 
        head="Casual Dining"
        headOne={"Delicious and Casual"}
        headTwo={"Dining Like Never Before"}
        headContent={"Casual Dining is the place for tasty food, relaxed vibes, and good times. Come in, eat well, and enjoy!"}
        frontImage={"https://res.cloudinary.com/dyslwsvb1/image/upload/v1722416082/Casual_Dining_mgyemc.png"}
        mainHead={"Gain customers with QRDine-In POS Systems. Simplify operations with restaurant software"}
        contentList={contentList}
        />
    </Container>
  );
}


export default CasualDining_page