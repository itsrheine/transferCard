import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';

import { QUERY_PRODUCTS } from "../utils/queries";
import spinner from '../assets/spinner.gif'
import { useStoreContext } from "../utils/GlobalState";
import {
    REMOVE_FROM_WALLET,
    UPDATE_WALLET_QUANTITY,
    ADD_TO_WALLET,
    UPDATE_PRODUCTS,
} from '../utils/actions';
import Wallet from '../components/Wallet';

function Detail() {
    const [state, dispatch] = useStoreContext();

    const { id } = useParams();

    const [currentProduct, setCurrentProduct] = useState({})

    const { loading, data } = useQuery(QUERY_PRODUCTS);

    const { products, wallet } = state;

    const addToWallet = () => {
        const itemInWallet = wallet.find((walletItem) => walletItem._id === id);

        if (itemInWallet) {
            dispatch({
                type: UPDATE_WALLET_QUANTITY,
                _id: id,
                purchaseQuantity: parseInt(itemInWallet.purchaseQuantity) + 1
            });
        } else {
            dispatch({
                type: ADD_TO_WALLET,
                product: { ...currentProduct, purchaseQuantity: 1 }
            });
        }
    };

    const removeFromWallet = () => {
        dispatch({
          type: REMOVE_FROM_WALLET,
          _id: currentProduct._id
        });
      };

    useEffect(() => {
        if (products.length) {
            setCurrentProduct(products.find(product => product._id === id));
        } else if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products
            });
        }
    }, [products, data, dispatch, id]);

    return (
        <>
            {currentProduct ? (
                <div className="container my-1">
                    <Link to="/">
                        ← Back to Products
                    </Link>

                    <h2>{currentProduct.name}</h2>

                    <p>
                        {currentProduct.description}
                    </p>

                    <p>
                        <strong>Price:</strong>
                        ${currentProduct.price}
                        {" "}
                        <button>
                            Add to Cart
                        </button>
                        <button 
                        disabled={!wallet.find(p => p._id === currentProduct._id)} 
                        onClick={removeFromWallet}
                        >
                        Remove from Cart
                        </button>
                    </p>

                    <img
                        src={`/images/${currentProduct.image}`}
                        alt={currentProduct.name}
                    />
                </div>
            ) : null}
            {
                loading ? <img src={spinner} alt="loading" /> : null
            }
            <Wallet />
        </>
    );
};

export default Detail;