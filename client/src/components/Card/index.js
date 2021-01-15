import React from 'react';
<<<<<<< HEAD
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_WALLET, UPDATE_WALLET_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

const Card = ({ item }) => {
    const [, dispatch] = useStoreContext();
=======
import { useDispatch } from "react-redux";
import { REMOVE_FROM_WALLET, UPDATE_WALLET } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

const Card = ({ item }) => {
    const dispatch = useDispatch();
>>>>>>> develop

    const removeFromWallet = item => {
        dispatch({
            type: REMOVE_FROM_WALLET,
            _id: item._id
        });
<<<<<<< HEAD
        idbPromise('wallet', 'delete', { ...item });
=======
        idbPromise('card', 'delete', { ...item });
>>>>>>> develop
    };
    const onChange = (e) => {
        const value = e.target.value;
      
        if (value === '0') {
          dispatch({
            type: REMOVE_FROM_WALLET,
            _id: item._id
          });

          idbPromise('wallet', 'delete', { ...item });
        } else {
          dispatch({
            type: UPDATE_WALLET_QUANTITY,
            _id: item._id,
            purchaseQuantity: parseInt(value)
          });
          idbPromise('wallet', 'put', { ...item, purchaseQuantity: parseInt(value) });
        }
      };

    return (
        <div className="flex-row">
            <div>
                <img
                    src={`/images/${item.image}`}
                    alt=""
                />
            </div>
            <div>
                <div>{item.name}, ${item.price}</div>
                <div>
                    <span>Qty:</span>
                    <input
                        type="number"
                        placeholder="1"
                        value={item.purchaseQuantity}
                        onChange={onChange}
                    />
                    <span
                        role="img"
                        aria-label="trash"
                        onClick={() => removeFromWallet(item)}
                    >
                        🗑️
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Card;