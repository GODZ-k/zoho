import React from "react";
import { Container, OutletCard } from "../../../components";

const contentList = [
    {
        headOne:" Introduce Restaurant Specials and Take Food Orders",
        headTwo:"",
        image:"https://res.cloudinary.com/dlkzk9g9k/image/upload/v1722575677/fine_Dine_1_ysazkk.png",
        transform:0,
        direction:0,
        content:"Introducing restaurant specials is a great way to highlight unique dishes and attract customers. Use simple menus and clear descriptions to showcase these specials. For taking food orders, ensure the process is quick and easy. Friendly staff should guide guests through the menu and answer any questions. Efficient ordering helps in providing a smooth dining experience, making it easier for customers to enjoy their meals."
    },
    {
        headOne:" Fine Dining: Perfecting Table Management for Superior Service",
        headTwo:"",
        image:"https://res.cloudinary.com/dlkzk9g9k/image/upload/v1722575679/fine_Dine_2_zgatr0.png",
        transform:1,
        direction:1,
        content:" Fine dining perfects table management for best service. Attention to detail, timely service, and a welcoming atmosphere create a memorable experience. Benefits include great food, personalized service, and a classy setting. Diners enjoy carefully prepared dishes, friendly staff, and an elegant environment, making fine dining perfect for special occasions and unforgettable foods."
    },
    {
        headOne:"  Creating Excellence strategy for Managing Staff in Fine Dining",
        headTwo:"",
        direction:0,
        content:"  QRDine POS system provides excellence services in fine dining and involves a clear strategy for managing staff. Key features and providing in depth training knowledge, setting clear expectations, and offering regular feedback. This approach ensures that staff  deliver top-notch service, maintain high standards, and create a welcoming atmosphere. Happy, well-trained staff contribute to a great dining experience, making fine dining enjoyable for every guest and enhancing the overall reputation of the restaurant."
    }
]
function FineDine_page() {
  return (
    <Container>
        <OutletCard 
        head="Fine Dine"
        headOne={"Make Better"}
        headTwo={"Your Fine Dine-In Experience"}
        headContent={"Fine Dine is where tasty food, a comfy vibe, and friendly faces come together. Come, eat, laugh, and have a blast!"}
        frontImage={"https://res.cloudinary.com/dyslwsvb1/image/upload/v1722416087/Fine_Dine_xdfkki.png"}
        mainHead={"Experience top-notch service with QRDine-In restaurant POS system "}
        contentList={contentList}
        />
    </Container>
  );
}

export default FineDine_page;
