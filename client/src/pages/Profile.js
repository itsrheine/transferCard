import React from "react";
import UserInfo from "../components/UserInfo";
import OrderHistory from "../components/OrderHistory";

const Profile = () => {


  return (
    <div className="container">
      <div class="row">
        <div class="column">
          <h3>User Info</h3>
          <UserInfo />
        </div>
        <div class="column">
          <h3>Order History</h3>
          <OrderHistory />
        </div>
      </div>
    </div>
  );

};

export default Profile;