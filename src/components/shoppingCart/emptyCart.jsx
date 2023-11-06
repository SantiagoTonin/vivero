import React from "react";
import css from "./ShoppingCart.module.css";

function emptyCart() {
  return (
    <div className={css.infoContainer}>
      <h2>Tu carrito esta vacío</h2>
    </div>
  );
}

export default emptyCart;
