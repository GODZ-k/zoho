import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
// import Home_page from "./pages/Home/Home_page";
const Home_page  = lazy(()=> import('./pages/Home/Home_page'))
import FineDine_page from "./pages/Home/outlet pages/FineDine_page";
import CasualDining_page from "./pages/Home/outlet pages/CasualDining_page";
import FastCasual_page from "./pages/Home/outlet pages/FastCasual_page";
import Fastfood_page from "./pages/Home/outlet pages/FastFood_page";
import Cafe_page from "./pages/Home/outlet pages/Cafe_page";
import Buffet_page from "./pages/Home/outlet pages/Buffet_page";
import Bistro_page from "./pages/Home/outlet pages/Bistro_page";
import Brasserie_page from "./pages/Home/outlet pages/Brasserie_page";
import FoodTruck_page from "./pages/Home/outlet pages/FoodTruck_page";
import PopUpRestaurant_page from "./pages/Home/outlet pages/PopUpRestaurant_page";
import QSR_page from "./pages/Home/outlet pages/QSR_page";
import FoodCourt_page from "./pages/Home/outlet pages/FoodCourt_page";
import CloudKitchen_page from "./pages/Home/outlet pages/CloudKitchen-page";
import YummyTreat_page from "./pages/Home/outlet pages/YummyTreat_page";
import Bakery_page from "./pages/Home/outlet pages/Bakery_page";
import BarBrewery_page from "./pages/Home/outlet pages/Bar&Brewery_page";
import Pizzeria_page from "./pages/Home/outlet pages/Pizzeria_page";
import FoodChain_page from "./pages/Home/outlet pages/FoodChain_page";
import QR_ordering_page from "./pages/Home/feature pages/OR_ordering_page.jsx";
import Trackinventory_page from "./pages/Home/feature pages/TrackInventory_page.jsx";
import DetailingReport_page from "./pages/Home/feature pages/DetailingReport_page.jsx";
import CRM_page from "./pages/Home/feature pages/Crm_page.jsx";
import EBilling_page from "./pages/Home/feature pages/EBilling_page.jsx";
import Pos_page from "./pages/Home/feature pages/Pos_page.jsx";
import Integration_page from "./pages/Home/additions/Integration_page.jsx";
import Application_page from "./pages/Home/additions/Application_page.jsx";
import About_page from "./pages/Home/About_page.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Suspense fallback={<div>Loading ....</div>}><Home_page/></Suspense>} />
        {/* Outlet pages  */}
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
        <Route path="/cloud-kitchens" element={<CloudKitchen_page/>}/>
        <Route path="/icecream&dessert" element={<YummyTreat_page/>}/>
        <Route path="/bakery" element={<Bakery_page/>}/>
        <Route path="/bar&brewery" element={<BarBrewery_page/>}/>
        <Route path="/pizzeria" element={<Pizzeria_page/>}/>
        <Route path="/food-chain" element={<FoodChain_page/>}/>
        {/* features pages  */}
        <Route path="/e-billing" element={<EBilling_page/>}/>
        <Route path="/qr-ordering" element={<QR_ordering_page/>}/>
        <Route path="/track-inventory" element={<Trackinventory_page/>}/>
        <Route path="/detailing-report" element={<DetailingReport_page/>}/>
        <Route path="/crm" element={<CRM_page/>}/>
        <Route path="/pos" element={<Pos_page/>}/>

        {/* Additions page  */}
        <Route path="/integration" element={<Integration_page/>}/>
        <Route path="/application" element={<Application_page/>} />
        <Route path="/about-us" element={<About_page/>} />

      </Route>
    </Routes>
  );
}

export default App;
