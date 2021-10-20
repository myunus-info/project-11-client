import React from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header/Header";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Projects />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
