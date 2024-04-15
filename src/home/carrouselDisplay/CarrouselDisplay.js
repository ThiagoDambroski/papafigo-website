import React, { useState } from "react";
import { shirtsData } from "../../assets/dataBASE/shirts";

import CarouselItem from "./CarouselItem";
import "./CarrouselDisplay.css";

function CarrouselDisplay() {
  const [index, setIndex] = useState(0);
  const shirtsDisplay = shirtsData;

  return (
    <>
      <div className="carrousel-display">
        <div
          className="carousel-container"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {shirtsDisplay.map((shirt, i) => (
            <div key={i} className="carousel-item">
              <CarouselItem
                shirt={shirt}
                setIndex={setIndex}
                index={index}
                length={shirtsDisplay.length}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CarrouselDisplay;
