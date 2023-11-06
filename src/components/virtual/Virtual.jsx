import React from "react";
import css from "./Virtual.module.css";
import Shade from "../../assets/shade.png";
import ImageSlider from "react-image-comparison";
import after from "../../assets/after.png";
import before from "../../assets/before.png";

function Virtual() {
  return (
    <div className={css.Virtual}>
      <div className={css.left}>
        <span> virtual Try-on</span>
        <span>never buy the wrong shade again</span>
        <span>Try now!</span>
        <img src={Shade} alt=""></img>
      </div>

      <div className={css.right}>
        <div className={css.wrapper}>
          <ImageSlider
            leftImage={after}
            rightImage={before}
            sliderLineColor="#000000"
          />
        </div>
      </div>
    </div>
  );
}

export default Virtual;
