import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home_page from "./pages/Home/Home_page";
import FineDine_page from "./pages/Home/FineDine_page";
import CasualDining_page from "./pages/Home/CasualDining_page";
import FastCasual_page from "./pages/Home/FastCasual_page";
import Fastfood_page from "./pages/Home/FastFood_page";
import Cafe_page from "./pages/Home/Cafe_page";
import Buffet_page from "./pages/Home/Buffet_page";
import Bistro_page from "./pages/Home/Bistro_page";
import Brasserie_page from "./pages/Home/Brasserie_page";
import FoodTruck_page from "./pages/Home/FoodTruck_page";
import PopUpRestaurant_page from "./pages/Home/PopUpRestaurant_page";
import QSR_page from "./pages/Home/QSR_page";
import FoodCourt_page from "./pages/Home/FoodCourt_page";
import CloudKitchen_page from "./pages/Home/CloudKitchen-page";
import YummyTreat_page from "./pages/Home/YummyTreat_page";
import Bakery_page from "./pages/Home/Bakery_page";
import BarBrewery_page from "./pages/Home/Bar&Brewery_page";
import Pizzeria_page from "./pages/Home/Pizzeria_page";
import FoodChain_page from "./pages/Home/FoodChain_page";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home_page />} />
        <Route path="/fine-dine" element={<FineDine_page/>}/>
        <Route path="/casual-dining" element={<CasualDining_page/>}/>
        <Route path="/fast-casual" element={<FastCasual_page/>}/>
        <Route path="/fast-food" element={<Fastfood_page/>}/>
        <Route path="/cafe" element={<Cafe_page/>}/>
        <Route path="/buffet" element={<Buffet_page/>}/>
        <Route path="/bistros" element={<Bistro_page/>}/>
        <Route path="/brasseries" element={<Brasserie_page/>}/>
        <Route path="/food-truck" element={<FoodTruck_page/>}/>
        <Route path="/popup-restaurant" element={<PopUpRestaurant_page/>}/>
        <Route path="/qsr" element={<QSR_page/>}/>
        <Route path="/food-court" element={<FoodCourt_page/>}/>
        <Route path="/cloud-kitchen" element={<CloudKitchen_page/>}/>
        <Route path="/icecream&dessert" element={<YummyTreat_page/>}/>
        <Route path="/bakery" element={<Bakery_page/>}/>
        <Route path="/bar&brewery" element={<BarBrewery_page/>}/>
        <Route path="/pizzeria" element={<Pizzeria_page/>}/>
        <Route path="/food-chain" element={<FoodChain_page/>}/>

      </Route>
    </Routes>
  );
}

export default App;
