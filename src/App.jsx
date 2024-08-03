import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "./components";


// Lazy load the Layout component
const Layout = lazy(() => import('./Layout'));

// Lazy load all pages
const Home_page = lazy(() => import('./pages/Home/Home_page'));
const FineDine_page = lazy(() => import("./pages/Home/outlet pages/FineDine_page"));
const CasualDining_page = lazy(() => import("./pages/Home/outlet pages/CasualDining_page"));
const FastCasual_page = lazy(() => import("./pages/Home/outlet pages/FastCasual_page"));
const Fastfood_page = lazy(() => import("./pages/Home/outlet pages/FastFood_page"));
const Cafe_page = lazy(() => import("./pages/Home/outlet pages/Cafe_page"));
const Buffet_page = lazy(() => import("./pages/Home/outlet pages/Buffet_page"));
const Bistro_page = lazy(() => import("./pages/Home/outlet pages/Bistro_page"));
const Brasserie_page = lazy(() => import("./pages/Home/outlet pages/Brasserie_page"));
const FoodTruck_page = lazy(() => import("./pages/Home/outlet pages/FoodTruck_page"));
const PopUpRestaurant_page = lazy(() => import("./pages/Home/outlet pages/PopUpRestaurant_page"));
const QSR_page = lazy(() => import("./pages/Home/outlet pages/QSR_page"));
const FoodCourt_page = lazy(() => import("./pages/Home/outlet pages/FoodCourt_page"));
const CloudKitchen_page = lazy(() => import("./pages/Home/outlet pages/CloudKitchen-page"));
const YummyTreat_page = lazy(() => import("./pages/Home/outlet pages/YummyTreat_page"));
const Bakery_page = lazy(() => import("./pages/Home/outlet pages/Bakery_page"));
const BarBrewery_page = lazy(() => import("./pages/Home/outlet pages/Bar&Brewery_page"));
const Pizzeria_page = lazy(() => import("./pages/Home/outlet pages/Pizzeria_page"));
const FoodChain_page = lazy(() => import("./pages/Home/outlet pages/FoodChain_page"));
const QR_ordering_page = lazy(() => import("./pages/Home/feature pages/OR_ordering_page"));
const Trackinventory_page = lazy(() => import("./pages/Home/feature pages/TrackInventory_page"));
const DetailingReport_page = lazy(() => import("./pages/Home/feature pages/DetailingReport_page"));
const CRM_page = lazy(() => import("./pages/Home/feature pages/Crm_page"));
const EBilling_page = lazy(() => import("./pages/Home/feature pages/EBilling_page"));
const Pos_page = lazy(() => import("./pages/Home/feature pages/Pos_page"));
const Integration_page = lazy(() => import("./pages/Home/additions/Integration_page"));
const Application_page = lazy(() => import("./pages/Home/additions/Application_page"));
const About_page = lazy(() => import("./pages/Home/About_page"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Suspense fallback={<Loader />}><Layout /></Suspense>}>
        <Route index element={<Suspense fallback={<Loader/>}><Home_page/></Suspense>} />
        {/* Outlet pages */}
        <Route path="/fine-dine" element={<Suspense fallback={<Loader/>}><FineDine_page /></Suspense>} />
        <Route path="/casual-dining" element={<Suspense fallback={<Loader/>}><CasualDining_page /></Suspense>} />
        <Route path="/fast-casual" element={<Suspense fallback={<Loader/>}><FastCasual_page /></Suspense>} />
        <Route path="/fast-food" element={<Suspense fallback={<Loader/>}><Fastfood_page /></Suspense>} />
        <Route path="/cafe" element={<Suspense fallback={<Loader/>}><Cafe_page /></Suspense>} />
        <Route path="/buffet" element={<Suspense fallback={<Loader/>}><Buffet_page /></Suspense>} />
        <Route path="/bistros" element={<Suspense fallback={<Loader/>}><Bistro_page /></Suspense>} />
        <Route path="/brasseries" element={<Suspense fallback={<Loader/>}><Brasserie_page /></Suspense>} />
        <Route path="/food-truck" element={<Suspense fallback={<Loader/>}><FoodTruck_page /></Suspense>} />
        <Route path="/popup-restaurant" element={<Suspense fallback={<Loader/>}><PopUpRestaurant_page /></Suspense>} />
        <Route path="/qsr" element={<Suspense fallback={<Loader/>}><QSR_page /></Suspense>} />
        <Route path="/food-court" element={<Suspense fallback={<Loader/>}><FoodCourt_page /></Suspense>} />
        <Route path="/cloud-kitchens" element={<Suspense fallback={<Loader/>}><CloudKitchen_page /></Suspense>} />
        <Route path="/icecream&dessert" element={<Suspense fallback={<Loader/>}><YummyTreat_page /></Suspense>} />
        <Route path="/bakery" element={<Suspense fallback={<Loader/>}><Bakery_page /></Suspense>} />
        <Route path="/bar&brewery" element={<Suspense fallback={<Loader/>}><BarBrewery_page /></Suspense>} />
        <Route path="/pizzeria" element={<Suspense fallback={<Loader/>}><Pizzeria_page /></Suspense>} />
        <Route path="/food-chain" element={<Suspense fallback={<Loader/>}><FoodChain_page /></Suspense>} />
        
        {/* Feature pages */}
        <Route path="/e-billing" element={<Suspense fallback={<Loader/>}><EBilling_page /></Suspense>} />
        <Route path="/qr-ordering" element={<Suspense fallback={<Loader/>}><QR_ordering_page /></Suspense>} />
        <Route path="/track-inventory" element={<Suspense fallback={<Loader/>}><Trackinventory_page /></Suspense>} />
        <Route path="/detailing-report" element={<Suspense fallback={<Loader/>}><DetailingReport_page /></Suspense>} />
        <Route path="/crm" element={<Suspense fallback={<Loader/>}><CRM_page /></Suspense>} />
        <Route path="/pos" element={<Suspense fallback={<Loader/>}><Pos_page /></Suspense>} />
        
        {/* Additions page */}
        <Route path="/integration" element={<Suspense fallback={<Loader/>}><Integration_page /></Suspense>} />
        <Route path="/application" element={<Suspense fallback={<Loader/>}><Application_page /></Suspense>} />
        <Route path="/about-us" element={<Suspense fallback={<Loader/>}><About_page /></Suspense>} />
      </Route>
    </Routes>
</Suspense>
  );
}

export default App;
