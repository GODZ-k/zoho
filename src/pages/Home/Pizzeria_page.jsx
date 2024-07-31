import React from 'react'
import { Container, OutletCard } from '../../components';

const contentList = [
    {
        headOne:"Optimize Your Service with Smart Online Ordering Integrations",
        headTwo:"",
        image:"",
        transform:0,
        direction:0,
        content:"Enhance your restaurant's efficiency with smart online ordering integrations. These tools connect your website or app with your kitchen, ensuring smooth order processing. With real-time updates, you can manage orders quickly and reduce mistakes. Offering a seamless online ordering experience improves customer satisfaction and streamlines operations, making it easier to handle high volumes of orders and boost your business's performance."
    },
    {
        headOne:"Simplify Menu Updates: Maintain Freshness with Ease",
        headTwo:"",
        image:"",
        transform:1,
        direction:1,
        content:"Keeping your menu up-to-date is easy with our solution. Quickly make changes to add new items or update existing ones. This ensures your menu always reflects the latest offerings and keeps customers interested. Simple tools let you refresh your menu without hassle, so you can focus on delivering great food and service. Enjoy a dynamic menu that adapts to your needs with minimal effort."
    },
    {
        headOne:"Manage Raw Materials and Inventory Management",
        headTwo:"",
        image:"",
        transform:0,
        direction:0,
        content:"Efficiently manage raw materials and inventory with simple solutions. Track stock levels, streamline ordering, and reduce waste. Keeping an organized inventory ensures you have the right materials when needed and prevents shortages. With effective management, you can improve your supply chain and maintain smooth operations. This approach helps in minimizing costs and maximizing efficiency, making it easier to run your business smoothly."
    }
]


function Pizzeria_page() {
  return (
    <Container>
        <OutletCard 
        head="Pizzeria"
        headOne={"Delivering Delight in Every Bite! Pizzeria"}
        headContent={"At the pizzeria, enjoy fresh, hot pizzas with a variety of toppings. Perfect for a delicious meal any time. Each pizza is made with care and served with a smile."}
        frontImage={""}
        // mainHead={"All-in-one billing solution in just one click"}
        contentList={contentList}
        />
    </Container>
  );
}


export default Pizzeria_page