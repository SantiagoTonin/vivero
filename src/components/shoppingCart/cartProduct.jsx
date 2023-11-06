import React, { Fragment } from "react";
import css from "./ShoppingCart.module.css";

function cardProduct({ data,deleteFromCart }) {
  return (
    <Fragment>
    <div className={css.card}>
      <div className={css.contador}>
        <span>X{data.count}</span>
      </div>
      <div className={css.imgProduct}>
        <img className={css.img} src={data.data} alt="planta" />
      </div>
      <div className={css.cardDivicion}>
        <div className={css.name}>
          <span>{data.title}</span>
          <span>{data.summary}</span>
          <span>${data.price}</span>
          <button  className={css.boton} onClick={()=>deleteFromCart(data.idCart)}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default cardProduct;
