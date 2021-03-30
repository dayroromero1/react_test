import React from "react";
import SimpleSlider from "./ProductCard";

function ProductView() {
  return (
    <div className="pageProducts">
      <div class="block">
        <h1>Productos</h1>
      </div>
      <div className="separator" color="primary"></div>
      <div class="block">
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipiscing elit erat rutrum
          vehicula, semper ultricies quam platea nunc iaculis luctus est mattis
          porta nulla
        </p>
      </div>
      <SimpleSlider />
    </div>
  );
}

export default ProductView;
