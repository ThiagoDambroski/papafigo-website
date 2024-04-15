import React from "react";
import MenuBar from "../menuBar/MenuBar";
import CarrouselDisplay from "./carrouselDisplay/CarrouselDisplay";
import CategoryDisplay from "./categoryDisplay/CategoryDisplay";
import Banner from "./banner/Banner";
import ProductDisplay from "./productsDisplay/ProductDisplay";

function Home() {
  return (
    <>
      <CarrouselDisplay />
      <CategoryDisplay />
      <Banner />
      <ProductDisplay />
    </>
  );
}

export default Home;
