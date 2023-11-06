import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logoVivero.png";

function Footer() {
  return (
    <div className={css.cFooterWrapper}>
      <hr />

      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>Vivero</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact US</span>
            <span className={css.pngLine}>
              <span>11 north avenue Orlando , FL 32801</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
