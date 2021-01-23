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
              <h5>First Name: {user.firstName}</h5>
              <h5>Last Name: {user.lastName}</h5>
          </>
        ) : null}

    </>)
        
}

export default UserInfo;
