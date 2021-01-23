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

        <div className="my-2">
            <div class="column">
                <h3>My TransferCard</h3>
            </div>

            <>
                {user ? (
                    <>
                        {user.orders.map((order) => (
                            <div key={order._id} className="flex-row">
                                {order.products.map(({ name, image }, index) => (
                                    <div key={index} className="flex-row">
                                        <img alt={name} src={`/images/${image}`} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </>
                ) : null}
            </>
        </div>

    )
};

export default TransferCard;