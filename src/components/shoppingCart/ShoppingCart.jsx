import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import css from "./ShoppingCart.module.css";
import { useParams } from "react-router-dom";
import CardProduct from "./cartProduct";
import EmptyCart from "../shoppingCart/emptyCart";
import Loading from "../loading/loading";


function ShoppingCart() {
  const [listaCarrito, setListaCarrito] = useState([]);
  const [userID, setUserID] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cancelToken, setCancelToken] = useState(null);
  const { id } = useParams();
  let idProduct = parseInt(id);

  useEffect(() => {
    const getUserID = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/logeado");
        setUserID(res.data[0].userID);
      } catch (error) {
        console.error(error);
      }
    };
    getUserID();
  }, []);

  const myCart = { productId: idProduct, userId: userID };

  if (id > 0) {

  }
  const addToCart = async () => {
    try {
      setIsSubmitting(true);
      const source = axios.CancelToken.source();
      setCancelToken(source);
      const res = await axios.post("http://localhost:4000/api/cart-items", myCart, { cancelToken: source.token });
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      } else {
        console.error(error);
      }
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    return () => {
      cancelToken && cancelToken.cancel('Canceling request because component is unmounting');
    }
  }, [cancelToken]);


  const getProduct = async () => {
    try {
      console.log("hola")
      const res = await axios.get(`http://localhost:4000/api/products/shopCart/${userID}`);
      setListaCarrito([res.data]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (isSubmitting) {
      return;
    } else if (id < 0) {
      getProduct();
    } else if (id > 0 && userID != null) {
     
      addToCart();
      setTimeout(() => {     
        getProduct();
      }, 2000);
    }
  }, [id, userID, isSubmitting]);

  const deleteFromCart = (idCart) => {
    axios.delete(`http://localhost:4000/api/cart-items/${idCart}`)
    window.location.reload();
  }

  const deleteAllProductcart = ()=>{
   const consulta =  axios.delete(`http://localhost:4000/api/cart-item/delete`)
   window.location.reload();
  }

  function sumarPrecios(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += (lista[i].price * lista[i].count);
    }
    return suma;
  }

  if (sessionStorage.getItem("pageReloaded")) {
    // history.pushState({}, "", "/private/cart/-1");
    // sessionStorage.removeItem("pageReloaded");
  } else {
    sessionStorage.setItem("pageReloaded", true);
  }




  return (
    <Fragment>
      <div className={css.container}>
        <ul className={css.tabContainer}>
          <li className={css.shopping}>
            {listaCarrito[0] === undefined ? <span className={css.textCar}>Carrito(...cargando)</span> : <span className={css.textCar}>Carrito({listaCarrito[0].length})</span>}
          </li>
        </ul>
        <hr />
        {
          listaCarrito[0] === undefined ? <p></p> : listaCarrito[0].length === 0 && <EmptyCart />
        }
        {console.log(listaCarrito)}
        {listaCarrito[0] === undefined ? <div className={css.loadingBox}><Loading /></div> : listaCarrito[0].map((productCart, i) => {
          return <CardProduct key={productCart.id + Math.random() * 50} data={productCart} indice={i} deleteFromCart={deleteFromCart} />
        })}
        <hr />
        <div className={css.totalPriceContainer}>
          {listaCarrito[0] === undefined ? <p>Total: ...cargando</p> : <p>Total:${sumarPrecios(listaCarrito[0])}</p>}
          <button className={css.deleteAll} onClick={()=>deleteAllProductcart()} >Limpiar Carrito</button>
        </div>
      </div>
      <div className={css.title}>
        <h2>OTRAS OFERTAS</h2>
        <hr className={css.divisor} />
      </div>

    </Fragment>
  );
}

export default ShoppingCart;



