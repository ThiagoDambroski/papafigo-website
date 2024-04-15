import React from "react";
import rockBanner from "../../assets/images/rockBanner.jpg";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner-page">
      <img src={rockBanner} />
    </div>
  );
}

export default Banner;
