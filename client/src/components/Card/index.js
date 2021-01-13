import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_PASSPORT, UPDATE_PASSPORT } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

const Card = ({ card }) => {
    const [, dispatch] = useStoreContext();

    const removeFromCart = item => {
        dispatch({
            type: REMOVE_FROM_PASSPORT,
            _id: item._id
        });
        idbPromise('card', 'delete', { ...item });
    };
    const onChange = (e) => {
        const value = e.target.value;
      
        if (value === '0') {
          dispatch({
            type: REMOVE_FROM_PASSPORT,
            _id: item._id
          });

          idbPromise('card', 'delete', { ...item });
        } else {
          dispatch({
            type: UPDATE_PASSPORT,
            _id: item._id,
            purchaseQuantity: parseInt(value)
          });
          idbPromise('card', 'put', { ...item, purchaseQuantity: parseInt(value) });
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
                        onClick={() => removeFromCart(item)}
                    >
                        🗑️
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Card;