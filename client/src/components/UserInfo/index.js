import React from "react";
import { Link } from "react-router-dom";

function UserInfo() {

    return (
        <div className="card px-1 py-1">
            <Link to={`/users`}>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
            </Link>
        </div>
    );
}

export default UserInfo;
