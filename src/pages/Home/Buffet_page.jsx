import React from 'react'
import { Container, OutletCard } from '../../components';

const contentList = [
    {
        headOne:"Elevate Your Buffet Service with Strategic Layout Designs",
        headTwo:"",
        image:"./buffet/buffetBanner.png",
        transform:0,
        direction:0,
        content:"Enhance your buffet experience with well-planned layouts that make serving and enjoying food easier. Strategic designs help in organizing food stations for smooth flow and easy access. With thoughtful placement, guests can easily navigate the buffet and find their favorites quickly. Good layout not only improves the dining experience but also boosts efficiency and satisfaction, making your buffet a standout choice for any occasion."
    },
    {
        headOne:"Match Your Table Setup with Your Event Theme",
        headTwo:"",
        image:"./buffet/buffetBanner.png",
        transform:1,
        direction:1,
        content:"Create a memorable event by matching your table setup to the theme. Choose table linens, napkins, and decorations that reflect your event's style. Coordinated colors and patterns make the table look cohesive and inviting. This attention to detail not only enhances the overall atmosphere but also makes guests feel more engaged and comfortable. A well-matched table setup brings your event theme to life and adds a special touch."
    },
    {
        headOne:"Simplify Your Restaurant’s Inventory Process",
        headTwo:"",
        image:"./buffet/buffetBanner.png",
        transform:0,
        direction:0,
        content:"Managing inventory doesn't have to be complicated. Simplify the process with easy-to-use tools and methods. Track stock levels, manage supplies, and avoid waste with a straightforward system. By streamlining inventory tasks, you can focus more on serving delicious meals and less on paperwork. Make inventory management smooth and efficient, saving time and reducing stress. Enjoy a well-organized kitchen and a better overall dining experience for your customers."
    }
]


function Buffet_page() {
  return (
    <Container>
        <OutletCard 
        head="Buffet"
        headOne={"Unlimited Delights: Discover the Perfect Buffet Solution"}
        headContent={"A Buffet offers a variety of dishes! Enjoy unlimited servings of a variety of tasty dishes for one simple cost. Eat as much as you like and enjoy a full and satisfying meal!"}
        frontImage={"https://res.cloudinary.com/dyslwsvb1/image/upload/v1722416081/Buffet_l1gnaq.png"}
        // mainHead={"All-in-one billing solution in just one click"}
        contentList={contentList}
        />
    </Container>
  );
}


export default Buffet_page