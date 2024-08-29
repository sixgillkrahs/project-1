import React from "react";
import Header from "../component/header/header";
import { Outlet } from "react-router-dom";
import Footer from "../component/footer/footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
