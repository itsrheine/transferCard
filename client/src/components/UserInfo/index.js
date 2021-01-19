import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../../utils/queries";

function UserInfo() {

    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
        user = data.user;
    }

    return (
        <>
        {user ? (
          <>
            <div className="card px-1 py-1">
              <p>First Name: {user.firstName}</p>
              <p>Last Name: {user.lastName}</p>
            </div>
          </>
        ) : null}

    </>)
        
}

export default UserInfo;
