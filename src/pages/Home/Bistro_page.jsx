
import React from "react";
import Container from "../../components/utils/Container";
import { OutletCard } from "../../components";

const contentList = [
    {
        headOne:"Enhance Your Bistro Dining: Best Key and Tips",
        headTwo:"",
        image:"./bistro/bistroBanner.png",
        transform:0,
        direction:0,
        content:"Discover how to make your bistro visit memorable with a few simple tips. Opt for bistros that offer a warm and inviting atmosphere, delicious comfort food, and friendly service. Look for places with a diverse menu that caters to different tastes and preferences. Additionally, consider bistros with unique decor and a relaxed setting to enhance your dining experience. Enjoy great food and a pleasant ambiance with these easy tips!"
    },
    {
        headOne:"Master Order Control with Seamless Solutions",
        headTwo:"",
        image:"./bistro/bistroBanner.png",
        transform:1,
        direction:1,
        content:"Easily manage and track orders with simple, effective tools. Streamline the process from start to finish, ensuring orders are handled quickly and accurately. Seamless solutions help reduce errors and improve efficiency, so every order is processed smoothly. Enjoy a more organized system that enhances customer satisfaction and keeps your operations running smoothly. Perfect for busy environments where order accuracy and speed are crucial."
    },
    {
        headOne:"One Dashboard to Track Everything",
        headTwo:"",
        image:"./bistro/bistroBanner.png",
        transform:0,
        direction:0,
        content:"Managing multiple tasks and operations is easy with a single dashboard. Keep track of all your key metrics, tasks, and data in one place. This central hub simplifies monitoring, making it easy to view and manage everything efficiently. With one dashboard, gain quick insights and stay organized, streamlining your daily operations and improving overall productivity."
    }
]
function Bistro_page() {
  return (
    <Container>
        <OutletCard 
        head="Bistros"
        headOne={"Affordable Comfort"}
        headTwo={"Top Quality Bistros with a Taste to Remember"}
        headContent={"Bistros are casual restaurants serving simple, hearty meals at fair prices. Enjoy a cozy atmosphere and classic dishes inspired by French dining culture, perfect for a relaxed meal any time."}
        frontImage={"./bistro/bistro.png"}
        // mainHead={"Experience top-notch service with QRDine-In restaurant POS system "}
        contentList={contentList}
        />
    </Container>
  );
}

export default Bistro_page;
