import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuBar.css";

function MenuBar() {
  return (
    <>
      <div className="menu-bar">
        <NavLink to={"/"}>
          <p className="menu-bar-logo">Papafigo</p>
        </NavLink>
        <div className="menu-bar-items">
          <NavLink to={"/productsDisplay"}>
            <p>Bandas</p>
          </NavLink>
          <NavLink to={"/productsDisplay"}>
            <p>Pernambuco</p>
          </NavLink>
          <NavLink to={"/productsDisplay"}>
            <p>Bermudas</p>
          </NavLink>
          <NavLink to={"/productsDisplay"}>
            <p>Perfumes</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default MenuBar;
