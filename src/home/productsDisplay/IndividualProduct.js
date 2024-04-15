import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function IndividualProduct({ shirt }) {
  const handleDragStart = (event) => {
    // Prevent the default drag-and-drop behavior
    event.preventDefault();
  };
  return (
    <div className="product-container">
      <img src={shirt.image} onDragStart={handleDragStart} />
      <NavLink to={"/shirt/" + shirt.id}>
        <div className="product-container-description">
          <span className="product-container-description-name">
            {shirt.name}
          </span>
          <span className="product-container-description-price">
            R${shirt.price}
          </span>
        </div>
      </NavLink>
    </div>
  );
}

export default IndividualProduct;
