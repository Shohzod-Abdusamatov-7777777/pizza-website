import React from "react";
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import Future from "./components/Future/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products productData={productData} heading="Chosse your fovorite" />
      <Future />
      <Products productData={productDataTwo} heading="Sweets your product" />
      <Footer />
    </Router>
  );
}

export default App;
