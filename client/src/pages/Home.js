import React from "react";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Cart from "../components/Cart";
import { CardWrapper } from "../components/SignCard";

const Home = () => {
  const [show, setShow] = React.useState(false)
  return (
    <div className="container">
      <CardWrapper>
        {show ? (
          <Signup />
          ) : 
          <Login />
        } 
        <button onClick={() => setShow(!show)}>{show ? "Login" : "Signup"}</button>
      </CardWrapper>
      <Cart />
     
    </div>
  );
};
export default Home;