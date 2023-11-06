import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { SliderProducts } from "../../data/products";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Slider() {
  const [MenuProducts, setMenuProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/products/custom")
      .then(res => {
        setMenuProducts(res.data)
      });
  }, [])

  return (
    <div className="s-container">
      <Swiper
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {MenuProducts.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="left-s" >
              <div className="name">
                <span>{slide.title}</span>
                <span>{slide.summery}</span>
              </div>
              <span>{slide.price}$</span>
              <Link to={`/private/cart/${slide.id}`}>
                <span>Añadir al carrito</span>
              </Link>
            </div>
            <img src={slide.data} alt="product" className="img-p"></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
