import React from 'react'
import { Container, OutletCard } from '../../../components';

const contentList = [
    {
        headOne:"Boost Service Speed with Multi-Terminal Billing During Rush Hours",
        headTwo:"",
        image:"https://res.cloudinary.com/dlkzk9g9k/image/upload/v1722575657/46_eatbyr.png",
        transform:0,
        direction:0,
        content:"Handle busy periods with ease using multi-terminal billing. This system allows multiple registers to work simultaneously, speeding up transactions and reducing wait times. It helps maintain a smooth flow during rush hours, ensuring fast and efficient service. With multi-terminal billing, managing high customer volumes becomes straightforward, keeping operations running smoothly even during the busiest times."
    },
    {
        headOne:"Top Strategies for Effective Alcohol Inventory and Stock Control",
        headTwo:"",
        image:"https://res.cloudinary.com/dlkzk9g9k/image/upload/v1722575658/47_i0qoeb.png",
        transform:1,
        direction:1,
        content:"Keep alcohol inventory under control with these easy strategies. Regularly track stock levels to avoid shortages and overstock. Use clear labeling and organize storage for quick access. Implement a reliable system to monitor usage patterns and reorder supplies on time. These practices ensure you maintain the right amount of stock, reduce waste, and keep your bar or restaurant running smoothly."
    },
    {
        headOne:"Customized Receipts: Adjust Your Bill Format as Needed",
        headTwo:"",
        image:"https://res.cloudinary.com/dlkzk9g9k/image/upload/v1722575660/48_c5g2ne.png",
        transform:0,
        direction:0,
        content:"Easily customize receipts to fit your business needs with flexible bill formats. Tailor each invoice to include your logo, special details, and any unique elements required. This approach ensures that receipts are both professional and personalized, enhancing your brand's image while simplifying your billing process. Adjust formats as needed to match different services or promotions, making each transaction smooth and efficient."
    }
]


function BarBrewery_page() {
  return (
    <Container>
        <OutletCard 
        head="Bar & Brewery"
        headOne={"Enjoy Fresh, chill Beers and Drinks at the Bar & Brewery"}
        headContent={"A bar and brewery serves a variety of drinks and often brews its own beer. It’s a great place to enjoy fresh beverages and relax with friends in a welcoming atmosphere."}
        frontImage={"https://res.cloudinary.com/dyslwsvb1/image/upload/v1722416079/Bar_and_Brewery_pcqvf1.png"}
        // mainHead={"All-in-one billing solution in just one click"}
        contentList={contentList}
        />
    </Container>
  );
}


export default BarBrewery_page