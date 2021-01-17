// import our actions
import {
    UPDATE_PRODUCTS,
    ADD_TO_WALLET,
    ADD_MULTIPLE_TO_WALLET,
    REMOVE_FROM_WALLET,
    UPDATE_WALLET_QUANTITY,
    CLEAR_WALLET,
    TOGGLE_WALLET
} from '../utils/actions';

import { reducer } from '../utils/reducers';

// create a sample of what our global state will look like
const initialState = {
    products: [],
    WALLET: [
        {
            _id: '1',
            name: 'One day pass',
            purchaseQuantity: 1
        },
        {
            _id: '2',
            name: 'One Week pass',
            purchaseQuantity: 2
        }
    ],
    WALLETOpen: false
};

test('UPDATE_PRODUCTS', () => {
    let newState = reducer(initialState, {
        type: UPDATE_PRODUCTS,
        products: [{}, {}]
    });

    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0)
})


test('ADD_TO_WALLET', () => {
    let newState = reducer(initialState, {
        type: ADD_TO_WALLET,
        product: { purchaseQuantity: 1 }
    });

    expect(newState.WALLET.length).toBe(3);
    expect(initialState.WALLET.length).toBe(2);
});

test('ADD_MULTIPLE_TO_WALLET', () => {
    let newState = reducer(initialState, {
        type: ADD_MULTIPLE_TO_WALLET,
        products: [{}, {}]
    });

    expect(newState.WALLET.length).toBe(4);
    expect(initialState.WALLET.length).toBe(2);
});

test('REMOVE_FROM_WALLET', () => {
    let newState1 = reducer(initialState, {
        type: REMOVE_FROM_WALLET,
        _id: '1'
    });

    // WALLET is still open
    expect(newState1.WALLETOpen).toBe(true);

    // the second item should now be the first
    expect(newState1.WALLET.length).toBe(1);
    expect(newState1.WALLET[0]._id).toBe('2');

    let newState2 = reducer(newState1, {
        type: REMOVE_FROM_WALLET,
        _id: '2'
    });

    // WALLET is empty and closed
    expect(newState2.WALLETOpen).toBe(false);
    expect(newState2.WALLET.length).toBe(0);

    expect(initialState.WALLET.length).toBe(2);
});

test('UPDATE_WALLET_QUANTITY', () => {
    let newState = reducer(initialState, {
        type: UPDATE_WALLET_QUANTITY,
        _id: '1',
        purchaseQuantity: 3
    });

    expect(newState.WALLETOpen).toBe(true);
    expect(newState.WALLET[0].purchaseQuantity).toBe(3);
    expect(newState.WALLET[1].purchaseQuantity).toBe(2);

    expect(initialState.WALLETOpen).toBe(false);
});

test('CLEAR_WALLET', () => {
    let newState = reducer(initialState, {
        type: CLEAR_WALLET
    });

    expect(newState.WALLETOpen).toBe(false);
    expect(newState.WALLET.length).toBe(0);
    expect(initialState.WALLET.length).toBe(2);
});

test('TOGGLE_WALLET', () => {
    let newState = reducer(initialState, {
        type: TOGGLE_WALLET
    });

    expect(newState.WALLETOpen).toBe(true);
    expect(initialState.WALLETOpen).toBe(false);

    let newState2 = reducer(newState, {
        type: TOGGLE_WALLET
    });

    expect(newState2.WALLETOpen).toBe(false);
});