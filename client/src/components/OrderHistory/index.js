import React from "react";
import { Link } from "react-router-dom";
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
                            {order.products.map(({ name, price, image }, index) => (
                                 <div key={index} className="card px-1 py-1">
                                 <Link to={`/images/${image}`}>
                                   <img
                                     alt={name}
                                     src={`/images/${image}`}
                                   />
                                   <p>{name}</p>
                                 </Link>
                                 <div>
                                   <span>${price}</span>
                                 </div>
                               </div>
                             ))}
                           </div>
                       ))}
                     </>
                   ) : null}
    </>)
};
export default OrderHistory;