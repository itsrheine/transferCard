import React from "react";

import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../../utils/queries";

function TransferCard() {

    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
        user = data.user;
        console.log(user);
    }

    return (
        <>
            <div className="container">
                <div class="row">
                    <div class="column">
                        <h2>My TransferCard</h2>
                        </div>
                        
                        {user ? (
                            <>
                                {user.orders.map((order) => (
                                    <div key={order._id} className="my-2">
                                        {order.products.map(({ name, image }, index) => (
                                            <div key={index} className="card px-1 py-1">
                                                <img alt={name} src={`/images/${image}`} />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </>
                        ) : null}
                </div>
            </div>
        </>)

};

export default TransferCard;