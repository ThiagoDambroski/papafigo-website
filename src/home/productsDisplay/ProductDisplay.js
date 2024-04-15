import React, { useRef, useState, useEffect } from "react";
import { shirtsData } from "../../assets/dataBASE/shirts";
import IndividualProduct from "./IndividualProduct";
import "./Product.css";

function ProductDisplay() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [userClicked, setUserClicked] = useState(false);
  const [autoScrollInterval, setAutoScrollInterval] = useState(null);

  useEffect(() => {
    const handleMove = (e) => {
      if (!isDragging) return;
      const x = e.touches ? e.touches[0].pageX : e.pageX;
      const walk = (x - startX) * 1;
      scrollRef.current && (scrollRef.current.scrollLeft = scrollLeft - walk);
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    const interval = setInterval(() => {
      if (!isDragging && !userClicked && scrollRef.current) {
        scrollRef.current.scrollLeft += 1;

        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 30); // Adjust the interval as needed

    setAutoScrollInterval(interval);

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("touchmove", handleMove, { passive: false });
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchend", handleEnd);

    return () => {
      clearInterval(interval);
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, userClicked, startX, scrollLeft]);

  const handleStart = (e) => {
    clearInterval(autoScrollInterval);
    setIsDragging(true);
    setUserClicked(true);
    const x = e.touches ? e.touches[0].pageX : e.pageX;
    setStartX(x - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  return (
    <div className="product-page">
      <div className="product-page-title">
        <h1>Produtos em Destaque</h1>
      </div>

      <div
        className="product-display"
        ref={scrollRef}
        onTouchStart={handleStart}
        onMouseDown={handleStart}
      >
        {shirtsData.map((shirt, index) => (
          <IndividualProduct key={index} shirt={shirt} />
        ))}
      </div>
    </div>
  );
}

export default ProductDisplay;
