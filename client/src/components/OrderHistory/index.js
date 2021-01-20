import React from "react";

import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../../utils/queries";

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
        {user ? (
          <>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h3>
                <div className="flex-row">
                  {order.products.map(({ name, price }, index) => (
                    <div key={index} className="card px-1 py-1">    
                        <p>{name}</p>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}

    </>)

};
export default OrderHistory;