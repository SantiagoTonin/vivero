import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

function Hero() {
  return (
    <div className={css.container}>
      {/*Left Side*/}
      <div className={css.h_sides}>
        <span className={css.text1}>skim proteccion</span>
        <div className={css.text2}>
          <span>Acerca de Nosotros</span>
          <span>
            Vivero,una empresa familiar,es el distribuidor lider en el cultivo de todo
            tipos de plantas.
            Desde hace mas de 40 años mantenemos el compromiso de ofrecer el mas alto nivel de servicio
            y producto de caldiad a nuestros clientes.
            Confíe en el Vivero para hacer crecer su negocio; no le fallaremos
          </span>
        </div>
      </div>

      {/* middle side*/}
      <div className={css.wrapper}>
        <div className={css.blueCircle}></div>
        <img src={HeroImg} alt="" width={600} />
        <div className={css.cart2}>
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>best signup offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* right side*/}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly traffic</span>
        </div>
        <div className={css.customers}>
          <samp>100k</samp>
          <samp>happy customers</samp>
        </div>
      </div>
    </div>
  );
}

export default Hero;
