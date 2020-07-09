import React from 'react';

import {
    CartItemContainer,
    ItemImage,
    ItemDetailsContainer,
    NameSpan,
    PriceSpan,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, quantity, name } }) => (
    <CartItemContainer>
        <ItemImage src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <NameSpan>{name}</NameSpan>
            <PriceSpan>
                {quantity} x ${price}
            </PriceSpan>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;
