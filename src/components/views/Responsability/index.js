import React from "react";
import Button from "@material-ui/core/Button";

import "./Responsability.css";

const CONTAINER_IMAGE_1 = "/assets/images/Grupo 1590.png";
const CONTENT_IMAGE_1 = "/assets/images/740 2.png";

function ResponsabilityView() {
  return (
    <div className="pageResponsability">
      <div
        className="container"
        style={{
          backgroundImage: `url('${window.location.href + CONTAINER_IMAGE_1}')`,
        }}
      >
        <div className="content">
          <div className="productImage">
            <img
              className="image"
              src={window.location.href + CONTENT_IMAGE_1}
              alt=""
            />
          </div>
          <div className="productDescription">
            <h1 className="title">Sostenibilidad</h1>
            <p className="text">
              Vivamus accumsan potenti facilisis phasellus convallis pretium
              nisl ultricies eu habitasse urna risus per, blandit diam aenean
              luctus ut quis sollicitudin nisi molestie viverra tempus ligula.
            </p>
            <Button variant="contained" color="primary">
              Ver más
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsabilityView;
