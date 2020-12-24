import data from '../data';

const INITIAL_STATE = {
    bookList: data,
    cart: [],
    removeTest: ''
}

export const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        
        case 'ADD_TO_CART':

            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        case 'REMOVE_ITEM':
            state.cart.splice(action.payload, 1);
            return {
                ...state,
                cart: [...state.cart]
            }

        default:
            return state;
    }
}