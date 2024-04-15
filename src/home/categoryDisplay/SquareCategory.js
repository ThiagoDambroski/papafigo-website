import React from "react";
import { NavLink } from "react-router-dom";

function SquareCategory({ category }) {
  return (
    <>
      <NavLink className="square-catagory-link" to={"/productsDisplay"}>
        <div
          className="square-category"
          style={{ backgroundImage: `url(${category.image})` }}
        >
          <span className="square-category-name">{category.name} </span>
        </div>
      </NavLink>
    </>
  );
}

export default SquareCategory;
