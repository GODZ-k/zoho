import React from "react";
import { Container, OutletCard } from "../../components";

const contentList = [
  {
    headOne: "Fast and Accurate Billing  Services ",
    headTwo: "",
    image: "./cafe/cafeBanner.png",
    transform: 0,
    direction: 0,
    content:
      "Fast and accurate billing services streamline the payment process, ensuring quick transactions and precise invoicing. With efficient billing, customers enjoy smooth checkouts and clear, error-free bills. This approach minimizes delays, enhances customer satisfaction, and helps manage finances effectively. ",
  },
  {
    headOne:
      "Increase Customer Satisfaction with Customizable Item Variations and Add-Ons",
    headTwo: "",
    image: "./cafe/cafeBanner.png",
    transform: 1,
    direction: 1,
    content:
      "Customizable item variations and add-ons let customers tailor their orders to their preferences. This flexibility means they can choose exactly what they want, leading to higher satisfaction. By offering a range of options and extras, customers enjoy a more personalized experience and are more likely to return. It’s a simple way to boost happiness and improve overall service.",
  },
  {
    headOne: "QRDine-In POS Report: Enhancing Customer Service Quality",
    headTwo: "",
    image: "./cafe/cafeBanner.png",
    transform: 0,
    direction: 0,
    content:
      "QRDine-In POS system generates detailed reports that help restaurants serve customers better. By analyzing sales data and customer preferences, this tool improves service quality. It allows for quick adjustments to menu offerings, staffing, and inventory based on real-time insights. This way, restaurants can meet customer needs more effectively, ensure faster service, and enhance overall dining experiences.",
  },
];

function Cafe_page() {
  return (
    <Container>
      <OutletCard
        head="Cafés"
        headOne={"Cafés That Make Your Coffee Break Better"}
        headContent={
          "Cafés are cozy spots serving coffee, tea, pastries, and light meals. Enjoy a relaxed atmosphere perfect for chatting with friends or taking a break from your day."
        }
        frontImage={"https://res.cloudinary.com/dyslwsvb1/image/upload/v1722416081/Cafe_j5uvnr.png"}
        mainHead={"Elevate your service—delight your customers!"}
        contentList={contentList}
      />
    </Container>
  );
}

export default Cafe_page;
