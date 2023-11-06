import React from "react";
import { Fragment } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ShoppingCart from "../components/shoppingCart/ShoppingCart";
import Slider from "../components/slider/Slider";

function Carrito() {
  return (
    <Fragment>
      <Header />
      <ShoppingCart />
      <Slider />
      <Footer />
    </Fragment>
  );
}

export default Carrito;
