
import React from "react";
import Container from "../../components/utils/Container";
import { OutletCard } from "../../components";

const contentList = [
    {
        headOne:"Discovering the Best Brasserie Atmosphere for Your Dining Experience",
        headTwo:"",
        image:"./brasseries/brasseriesBanner.png",
        transform:0,
        direction:0,
        content:"Find the perfect brasserie atmosphere to make your dining out enjoyable. Look for a place with a relaxed and welcoming vibe, where the food is hearty and the menu diverse. A great brasserie combines a cozy setting with friendly service, making each visit comfortable and pleasant. Enjoy delicious meals in an inviting environment that makes every dining experience special."
    },
    {
        headOne:"Enjoy Seamless Ordering with Scan and Order",
        headTwo:"",
        image:"./brasseries/brasseriesBanner.png",
        transform:1,
        direction:1,
        content:"Scan and Order makes dining easier and faster. Simply scan a QR code to view the menu and place your order right from your phone. No more waiting for a server—get exactly what you want quickly and conveniently. This system reduces wait times and improves service, allowing you to enjoy your meal with minimal hassle. Perfect for a smooth and efficient dining experience."
    },
    {
        headOne:" Improving Customer Relationships with Automated CRM",
        headTwo:"",
        image:"./brasseries/brasseriesBanner.png",
        transform:0,
        direction:0,
        content:"Automated CRM helps build better connections with customers. It tracks interactions, manages follow-ups, and provides personalized service all in one place. By automating routine tasks, you can focus on creating meaningful relationships and addressing customer needs more effectively. This leads to happier customers and a more organized approach to managing communication, ultimately boosting satisfaction and loyalty."
    }
]
function Brasserie_page() {
  return (
    <Container>
        <OutletCard 
        head="brasseries"
        headOne={"Chill Out and Dine at a Classic Brasserie"}
        // headTwo={"Top Quality Bistros with a Taste to Remember"}
        headContent={"A brasserie is an informal French cafe offering beer and wine with simple, hearty food. The dining area is usually large and open, boasting a loud, boisterous atmosphere with many tables filling the space."}
        frontImage={"./brasseries/brasseries.png"}
        // mainHead={"Experience top-notch service with QRDine-In restaurant POS system "}
        contentList={contentList}
        />
    </Container>
  );
}

export default Brasserie_page;
