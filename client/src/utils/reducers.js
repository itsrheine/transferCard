import { useReducer } from 'react';

import {
    UPDATE_PRODUCTS,
    ADD_TO_WALLET,
    ADD_MULTIPLE_TO_WALLET,
    REMOVE_FROM_WALLET,
    UPDATE_WALLET_QUANTITY,
    CLEAR_WALLET,
    TOGGLE_WALLET
  } from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };
        case ADD_TO_WALLET:
            return {
                ...state,
                WALLETOpen: true,
                WALLET: [...state.WALLET, action.product]
            };
        case ADD_MULTIPLE_TO_WALLET:
            return {
                ...state,
                WALLET: [...state.WALLET, ...action.products],
            };
        case REMOVE_FROM_WALLET:
            let newState = state.WALLET.filter(product => {
                return product._id !== action._id;
            });

            return {
                ...state,
                WALLETOpen: newState.length > 0,
                WALLET: newState
            };
        case UPDATE_WALLET_QUANTITY:
            return {
                ...state,
                WALLETOpen: true,
                WALLET: state.WALLET.map(product => {
                    if (action._id === product._id) {
                        product.purchaseQuantity = action.purchaseQuantity;
                    }
                    return product;
                })
            };
        case CLEAR_WALLET:
            return {
                ...state,
                WALLETOpen: false,
                WALLET: []
            };
        case TOGGLE_WALLET:
            return {
                ...state,
                WALLETOpen: !state.WALLETOpen
            };
        default: 
            return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}