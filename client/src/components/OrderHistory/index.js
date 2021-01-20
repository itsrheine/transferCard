import React from "react";

import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../../utils/queries";

function OrderHistory() {
    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
        user = data.user;
        console.log(user);
    }

    return (
        <>
            {user ? (
                <>
                    {user.orders.map((order) => (
                        <div key={order._id} className="card px-1 py-1">
                            <p>Date Purchased: {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</p>
                            {order.products.map(({ name, price }, index) => (
                                <p key={index}>Ticket: {name} - ${price}</p>
                            ))}
                        </div>
                ))}
          </>
        ) : null}
    </>)
};
export default OrderHistory;