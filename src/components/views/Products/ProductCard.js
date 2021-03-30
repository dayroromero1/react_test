import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { productData } from "./ProductData";
import "./Products.css";
import { Button } from "@material-ui/core";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="cardContainer">
      <Slider {...settings}>
        <div className="card">
          <div className="productImage">
            <img
              className="image"
              src={window.location.href + productData[0].img}
              alt=""
            />
          </div>
          <div className="productDescription alignElement">
            <h1 className="title">{productData[0].title}</h1>
            <p className="text">{productData[0].subtitle}</p>
            <Button variant="contained" color="primary">
              Ver producto
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="productImage">
            <img
              className="image"
              src={window.location.href + productData[1].img}
              alt=""
            />
          </div>
          <div className="productDescription">
            <h1 className="title">{productData[1].title}</h1>
            <p className="text">{productData[1].subtitle}</p>
          </div>
        </div>
        <div className="card">
          <div className="productImage">
            <img
              className="image"
              src={window.location.href + productData[2].img}
              alt=""
            />
          </div>
          <div className="productDescription">
            <h1 className="title">{productData[2].title}</h1>
            <p className="text">{productData[2].subtitle}</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
