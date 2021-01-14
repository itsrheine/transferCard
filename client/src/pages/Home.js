import React, { useState } from "react";
import ProductList from "../components/ProductList";
import Wallet from '../components/Wallet';


const Home = () => {
  return (
    <div className="container">
    <ProductList />
    <Wallet />
  </div>
  );
};

export default Home;