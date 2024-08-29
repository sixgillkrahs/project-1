import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeView from "../pages/homeview";
import AboutView from "../pages/aboutview";
import Header from "./header/header";
import Footer from "./footer/footer";
import Serviceview from "../pages/serviceview";
import Priceview from "../pages/priceview";
import Contactview from "../pages/contactview";
import { BlankLayout, LoginLayout, MainLayout } from "../layouts";
import ErrorView from "../pages/404";

const RouteRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/service" element={<Serviceview />} />
          <Route path="/price" element={<Priceview />} />
          <Route path="/contact" element={<Contactview />} />
        </Route>
        <Route path="/auth" element={<LoginLayout />}></Route>
        <Route path="*" element={<BlankLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteRoot;
