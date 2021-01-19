import React from "react";

const Profile = () => {

  return (
    <div className="container">
      <div class="row">
        <div class="column">
          <h3><button onclick={userInfo()}>User Info</button></h3>
          <p id="demo"></p>
        </div>
        <div class="column">
          <h3>Order History</h3>
          <p>Some text..</p>
        </div>
      </div>
    </div>
  );

  function userInfo() {
    document.getElementById("demo").innerHTML = "Hello World";
  }
};

export default Profile;