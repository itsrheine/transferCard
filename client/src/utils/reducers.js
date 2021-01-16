// import { useReducer } from 'react';

import {
    UPDATE_PRODUCTS,
    ADD_TO_WALLET,
    ADD_MULTIPLE_TO_WALLET,
    UPDATE_WALLET_QUANTITY,
    CLEAR_WALLET,
    TOGGLE_WALLET
  } from './actions';

  
const initialState = {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: ''
}
export const reducers = (state = initialState, action) => {
  
  
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };
        case ADD_TO_WALLET:
            return {
                ...state,
                walletOpen: true,
                wallet: [...state.wallet, action.product]
            };
        case ADD_MULTIPLE_TO_WALLET:
            return {
                ...state,
                WALLET: [...state.wallet, ...action.products],
            };
        case REMOVE_FROM_WALLET:
            let newState = state.wallet.filter(product => {
                return product._id !== action._id;
            });

            return {
                ...state,
                walletOpen: newState.length > 0,
                wallet: newState
            };
        case UPDATE_WALLET_QUANTITY:
            return {
                ...state,
                walletOpen: true,
                wallet: state.wallet.map(product => {
                    if (action._id === product._id) {
                        product.purchaseQuantity = action.purchaseQuantity;
                    }
                    return product;
                })
            };
        case CLEAR_WALLET:
            return {
                ...state,
                walletOpen: false,
                wallet: []
            };
        case TOGGLE_WALLET:
            return {
                ...state,
                walletOpen: !state.WALLETOpen
            };
        default: 
            return state;
    }
};

export default reducers;