import { CartActionTypes } from './cart.types';

export const toggleCartVisibility = () => ({
    type: CartActionTypes.TOGGLE_CART_DROPDOWN_VISIBILITY,
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item,
})