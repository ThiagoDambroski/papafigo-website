import React from "react";
import SquareCategory from "./SquareCategory";
import bandImage from "../../assets/images/categoryBanner/bands.jpeg";
import pernambucoImage from "../../assets/images/categoryBanner/pernambuco.jpg";
import shortsImage from "../../assets/images/categoryBanner/shorts.jpg";
import perfumeImage from "../../assets/images/categoryBanner/perfume.jpg";
import "./Category.css";

function CategoryDisplay() {
  const categorys = [
    { name: "Bandas", image: bandImage },
    { name: "Pernambuco", image: pernambucoImage },
    { name: "Bermudas", image: shortsImage },
    { name: "Perfumes", image: perfumeImage },
  ];

  return (
    <div className="category-display-pag">
      {categorys.map((category) => (
        <SquareCategory category={category} />
      ))}
    </div>
  );
}

export default CategoryDisplay;
