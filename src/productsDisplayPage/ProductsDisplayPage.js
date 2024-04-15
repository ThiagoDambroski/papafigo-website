import React, { useEffect, useState } from "react";
import "./ProductsDisplayPage.css";
import banner from "../assets/images/productsDisplay/banner.jpg";

function ProductsDisplayPage({ products }) {
  const sizes = ["PP", "P", "M", "G", "GG", "XG"];

  const bands = ["Guns and Rose", "Metallica"];

  const colors = ["Preto", "Branco"];

  const [sizeActive, setSizeActive] = useState(false);

  const [bandActive, setBandActive] = useState(false);

  const [colorActive, setColorActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSizeActive = () => {
    setSizeActive(!sizeActive);
  };

  const handleBandActive = () => {
    setBandActive(!bandActive);
  };

  const handleColorActive = () => {
    setColorActive(!colorActive);
  };

  return (
    <div className="product-display-page">
      <img className="product-display-page-banner" src={banner} />
      <div className="product-display-page-content">
        <div className="product-display-page-side-menu">
          <h3>Filtre </h3>
          <button onClick={handleSizeActive}>Tamanhos</button>
          <div className="product-display-page-side-menu-open">
            {sizeActive &&
              sizes.map((size) => (
                <div className="product-display-page-side-menu-open-div">
                  <label>{size}</label>
                  <input type="checkbox" />
                </div>
              ))}
          </div>

          <button onClick={handleBandActive}>Bandas</button>
          <div className="product-display-page-side-menu-open">
            {bandActive &&
              bands.map((band) => (
                <div className="product-display-page-side-menu-open-div">
                  <label>{band}</label>
                  <input type="checkbox" />
                </div>
              ))}
          </div>

          <button onClick={handleColorActive}>Cor</button>
          <div className="product-display-page-side-menu-open">
            {colorActive &&
              colors.map((color) => (
                <div className="product-display-page-side-menu-open-div">
                  <label>{color}</label>
                  <input type="checkbox" />
                </div>
              ))}
          </div>
        </div>
        <div className="product-display-page-products">
          {products.map((product) => (
            <div className="product-display-page-products-div">
              <img src={product.image} />
              <div className="product-display-page-products-informations">
                <span>{product.name}</span>
                <span>{product.price} R$</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsDisplayPage;
