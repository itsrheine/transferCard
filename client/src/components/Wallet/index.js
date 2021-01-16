import React, { useEffect } from 'react';
import Auth from '../../utils/auth';

import { TOGGLE_WALLET, ADD_MULTIPLE_TO_WALLET } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { QUERY_CHECKOUT } from '../../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/react-hooks';
import './style.css';
import { useDispatch, useSelector } from "react-redux";

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Wallet = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
    
    useEffect(() => {
        if (data) {
          stripePromise.then((res) => {
            res.redirectToCheckout({ sessionId: data.checkout.session });
          });
        }
      }, [data]);

    useEffect(() => {
        async function getWallet() {
            const wallet = await idbPromise('wallet', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_WALLET, products: [...wallet] });
        };

        if (!state.wallet.length) {
            getWallet();
        }
    }, [state.wallet.length, dispatch]);

    function toggleWallet() {
        dispatch({ type: TOGGLE_WALLET });
    }

    function calculateTotal() {
        let sum = 0;
        state.wallet.forEach(item => {
            sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    function submitCheckout() {
        const productIds = [];
        getCheckout({
            variables: { products: productIds }
        });
        state.wallet.forEach((item) => {
            for (let i = 0; i < item.purchaseQuantity; i++) {
                productIds.push(item._id);
            }
        });
    }

    if (!state.walletOpen) {
        return (
            <div className="wallet-closed" onClick={toggleWallet}>
                <span
                    role="img"
                    aria-label="trash">🛒</span>
            </div>
        );
    }
    return (
        <div className="wallet">
            <div className="close" onClick={toggleWallet}>[close]</div>
            <h2>Shopping Wallet</h2>
            {state.wallet.length ? (
                <div>
                    {state.wallet.map(item => (
                        <WalletItem key={item._id} item={item} />
                    ))}
                    <div className="flex-row space-between">
                        <strong>Total: ${calculateTotal()}</strong>
                        {
                            Auth.loggedIn() ?
                                <button onClick={submitCheckout}>
                                    Checkout
                          </button>
                                :
                                <span>(log in to check out)</span>
                        }
                    </div>
                </div>
            ) : (
                    <h3>
                        <span role="img" aria-label="shocked">
                            😱
                        </span>
                        You haven't added anything to your wallet yet!
                    </h3>
                )}
        </div>

    );
};

export default Wallet;