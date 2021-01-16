import React from "react";
import ProductList from "../components/ProductList";
import Cart from '../components/Wallet';


const Home = () => {
  return (
    <div className="container">
    <ProductList />
    <Cart />
  </div>
  );
};

export default Home;