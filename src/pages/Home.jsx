import React from "react";
import { Fragment } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";
import Testimonial from "../components/testimonials/Testimonial";


function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Products />
      <Testimonial />
      <Footer />
    </Fragment>
  );
}

export default Home;
