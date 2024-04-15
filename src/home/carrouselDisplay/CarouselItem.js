import React from "react";
import { NavLink } from "react-router-dom";
import leftArrow from "../../assets/images/icons/compact-left-arrow.png";
import rightArrow from "../../assets/images/icons/compact-right-arrow.png";
import IndividualProduct from "../productsDisplay/IndividualProduct";

function CarouselItem({ shirt, index, setIndex, length }) {
  const handlePreviousIndex = () => {
    if (index - 1 < 0) {
      setIndex(length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNextIndex = () => {
    if (index + 1 > length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const openProduct = (product) => {
    return <IndividualProduct product={product} />;
  };

  return (
    <>
      <img
        src={leftArrow}
        className="carrousel-display-arrow"
        onClick={handlePreviousIndex}
      />
      <div className="carrousel-display-content">
        <img src={shirt.image} />
        <div className="carrousel-display-content-info">
          <h1>{shirt.name}</h1>
          <p>{shirt.description}</p>
          <span className="carrousel-display-content-info-price">
            R$ {shirt.price}
          </span>

          <NavLink to={"/shirt/" + shirt.id}>
            <button>Compre Agora</button>
          </NavLink>

          <span className="carrousel-display-content-info-sub">
            * Entrega gratis para toda regiao metropolitana do Recife
          </span>
        </div>
      </div>
      <img
        src={rightArrow}
        className="carrousel-display-arrow"
        onClick={handleNextIndex}
      />
    </>
  );
}

export default CarouselItem;
