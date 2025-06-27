import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar/NAvbar";
import Footer from "../pages/shared/Footer/Footer";

const MainLayouts = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default MainLayouts;
