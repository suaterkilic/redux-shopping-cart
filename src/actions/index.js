export const addToCart = book => {
    return {
        type: 'ADD_TO_CART',
        payload: book
    };
}

export const removeItem = key => {
    return {
        type: 'REMOVE_ITEM',
        payload: key
    }
}