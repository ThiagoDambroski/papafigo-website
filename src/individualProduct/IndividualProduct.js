import React, { useState } from "react";
import "./IndividualProduct.css";
function IndividualProduct({ product }) {
  const [sizeSelect, setSizeSelect] = useState(null);
  const [colorSelect, setColorSelect] = useState(null);

  const handleSizeSelectChange = (size) => {
    setSizeSelect(size);
  };

  const handleColorSelectChange = (color) => {
    setColorSelect(color);
  };

  return (
    <div className="individual-product-page">
      <div>
        <img className="individual-product-image" src={product.image} />
      </div>
      <div className="individual-product-information">
        <h2>{product.name}</h2>
        <span className="individual-product-information-dsc">
          {product.description}
        </span>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3>Tamanhos disponiveis:</h3>
        </div>
        <div className="individual-product-information-display">
          {product.sizes.map((size) => (
            <>
              {sizeSelect === size ? (
                <button
                  className="individual-product-size-display-select"
                  onClick={() => handleSizeSelectChange(size)}
                >
                  {size}
                </button>
              ) : (
                <button
                  className="individual-product-size-display"
                  onClick={() => handleSizeSelectChange(size)}
                >
                  {size}
                </button>
              )}
            </>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3>Cores disponiveis:</h3>
        </div>
        <div className="individual-product-information-display">
          {product.colors.map((color) => (
            <>
              {colorSelect === color ? (
                <button
                  className="individual-product-color-display-select"
                  onClick={() => handleColorSelectChange(color)}
                >
                  {color}
                </button>
              ) : (
                <button
                  className="individual-product-color-display"
                  onClick={() => handleColorSelectChange(color)}
                >
                  {color}
                </button>
              )}
            </>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3>Preço:</h3>
        </div>
        <p className="individual-product-price">{product.price} R$</p>
        <button className="individual-product-information-button">
          Compre Agora
        </button>
        <span className="individual-product-information-sub-desc">
          * Entrega gratis para toda regiao metropolitana do Recife
        </span>
      </div>
    </div>
  );
}

export default IndividualProduct;
