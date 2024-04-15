import "./App.css";
import Home from "./home/Home";
import MenuBar from "./menuBar/MenuBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDisplay from "./home/productsDisplay/ProductDisplay";
import ProductsDisplayPage from "./productsDisplayPage/ProductsDisplayPage";
import { shirtsData } from "./assets/dataBASE/shirts";
import IndividualProduct from "./individualProduct/IndividualProduct";

function App() {
  return (
    <>
      <MenuBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/productsDisplay"
          element={<ProductsDisplayPage products={shirtsData} />}
        />
        <Route
          exact
          path="/shirt/1"
          element={<IndividualProduct product={shirtsData[0]} />}
        />
        <Route
          exact
          path="/shirt/2"
          element={<IndividualProduct product={shirtsData[1]} />}
        />
      </Routes>
    </>
  );
}

export default App;
