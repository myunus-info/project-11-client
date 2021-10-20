import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import HeaderMain from "../HeaderMain/HeaderMain";

const Header = () => {
  return (
    <section className="header">
      <Navbar />
      <HeaderMain />
    </section>
  );
};

export default Header;
