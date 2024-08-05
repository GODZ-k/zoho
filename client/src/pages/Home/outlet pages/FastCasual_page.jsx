import React from 'react'
import { Container, OutletCard } from '../../../components';

const contentList = [
    {
        headOne:"Combining Speed and Quality for a Winning Dining Experience",
        headTwo:"",
        image:"https://res.cloudinary.com/dlkzk9g9k/image/upload/v1722575291/7_ymkg3y.png",
        transform:0,
        direction:0,
        content:"To ensure smooth billing operations, start with clear and accurate invoices to avoid errors. Regularly track payments and follow up on any overdue accounts. Keep billing records organized and resolve any issues quickly. Training staff on billing processes can also improve efficiency. By implementing these practices, billing becomes more efficient, cash flow improves, and customer satisfaction is enhanced with accurate and timely billing."
    },
    {
        headOne:"Boosting Sales with Strategic Item Combos and Variations",
        headTwo:"",
        image:"https://res.cloudinary.com/dlkzk9g9k/image/upload/v1722575300/8_pjf5vg.png",
        transform:1,
        direction:1,
        content:"Boosting sales can be achieved through thoughtful item combos and variations. Offer attractive meal bundles that provide value and convenience to customers. Create customizable options to cater to different tastes and dietary needs. Highlight special combos to attract attention and encourage upselling. By strategically designing menu items and combinations, you can enhance customer satisfaction, increase average order value, and drive higher sales for your restaurant."
    },
    {
        headOne:"Effective Strategies for Kitchen and Inventory Management",
        headTwo:"",
        image:"https://res.cloudinary.com/dlkzk9g9k/image/upload/v1722575294/9_mzqecx.png",
        transform:0,
        direction:0,
        content:"To excel in kitchen and inventory management, start by implementing a streamlined inventory tracking system to monitor stock levels and reduce waste. Regularly review inventory to forecast needs accurately and avoid overstocking or shortages. Regular training and clear communication can enhance team performance. QRDine POS systems help and maintain smooth operations, reduce costs, and improve overall efficiency."
    }
]


function FastCasual_page() {
  return (
    <Container>
        <OutletCard 
        head="Fast Casual"
        headOne={"Traditional Taste"}
        headTwo={"Embrace the Innovation Fast Casual the timeless table"}
        headContent={"Fast Casual is your go-to spot for quick, delicious meals. Enjoy a relaxed setting with friendly service. Perfect for a tasty bite on the go or a casual hangout."}
        frontImage={"https://res.cloudinary.com/dyslwsvb1/image/upload/v1722416085/Fast_Casual_b7u3l7.png"}
        contentList={contentList}
        />
    </Container>
  );
}


export default FastCasual_page