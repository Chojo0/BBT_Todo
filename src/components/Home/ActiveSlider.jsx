import React, {  useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { ServiceData } from "./constants";
import "./ActiveSlider.css";
import { Link } from 'react-router-dom';

const ActiveSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
        swiperRef.current.swiper.slideNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="best-sellers-slider section container">
      <h1 data-aos="fade-right" className="home-title">Bienvenido a nuestra licorera</h1>
      <p data-aos="fade-right" className="home-description">Explora nuestras categorías</p>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        autoplay={{delay: 3000}}
        pagination={{ clickable: true }}
        className="swiper"
        ref={swiperRef}
      >
        {ServiceData.map((item, index) => (
          <SwiperSlide key={index}>
            <div data-aos="fade-left" className="slide-container">
              <div
                className="slide-image"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="slide-content">
                <Link to={`/productos/${item.title}`}>
                  <h1 className="title"
                      style={{ color: "#fff" }}
                      onMouseEnter={(e) => e.target.style.color = "#00bcd4"}
                      onMouseLeave={(e) => e.target.style.color = "#fff"}>{item.title}</h1>
                </Link>
                <p className="content">{item.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
