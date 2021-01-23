import React from "react";
import UserInfo from "../components/UserInfo";
import OrderHistory from "../components/OrderHistory";

const Profile = () => {


  return (
    <div className="container">
      <div class="row">
        <div className="column px-1 py-1">
          <h2>User Info</h2>
          <UserInfo />
        </div>
          <div className="column">
          <h2>Order History</h2>
            <OrderHistory />  
            </div>
      </div>
    </div>
  );

};

export default Profile;