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
      </Route>
    </Routes>
  );
}

export default App;
