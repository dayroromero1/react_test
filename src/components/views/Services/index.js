import React from "react";

import "./Services.css";

const CHIP_IMAGE_1 = "/assets/images/Grupo 1164.svg";
const CHIP_IMAGE_2 = "/assets/images/Grupo 1255.svg";
const CHIP_IMAGE_3 = "/assets/images/Grupo 1279.svg";
const CHIP_IMAGE_4 = "/assets/images/Grupo 1265.svg";

function ServiceView() {
  return (
    <div className="pageServices">
      <div class="block">
        <h1>Vehicula mi quam odio himenaeos</h1>
      </div>
      <div className="separator" color="primary"></div>
      <div class="block">
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipiscing elit erat rutrum
          vehicula, semper ultricies quam platea nunc iaculis luctus est mattis
          porta nulla
        </p>
      </div>
      <div className="chipContainer">
        <div className="chip">
          <div className="chipContent">
            <img
              className="chipImages"
              src={window.location.href + CHIP_IMAGE_1}
              alt=""
            />
            <h4 className="chipText">Harvesting</h4>
          </div>
        </div>
        <div className="chip">
          <div className="chipContent">
            <img
              className="chipImages"
              src={window.location.href + CHIP_IMAGE_2}
              alt=""
            />
            <h4 className="chipText">Packing</h4>
          </div>
        </div>
        <div className="chip">
          <div className="chipContent">
            <img
              className="chipImages"
              src={window.location.href + CHIP_IMAGE_3}
              alt=""
            />
            <h4 className="chipText">Shipping</h4>
          </div>
        </div>
        <div className="chip">
          <div className="chipContent">
            <img
              className="chipImages"
              src={window.location.href + CHIP_IMAGE_4}
              alt=""
            />
            <h4 className="chipText">Delivery</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceView;
