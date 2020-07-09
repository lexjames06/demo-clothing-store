import React from 'react';
import { connect } from 'react-redux';

import {
    clearItemFromCart,
    addItem,
    removeItem,
} from '../../redux/cart/cart.actions';

import {
    CheckoutItemContainer,
    ImageContainer,
    ItemImage,
    NameSpan,
    QuantitySpan,
    ArrowContainer,
    ValueSpan,
    PriceSpan,
    RemoveButtonContainer,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <ItemImage src={imageUrl} alt='item' />
            </ImageContainer>
            <NameSpan>{name}</NameSpan>
            <QuantitySpan>
                <ArrowContainer onClick={() => removeItem(cartItem)}>
                    &#10094;
                </ArrowContainer>
                <ValueSpan>{quantity}</ValueSpan>
                <ArrowContainer onClick={() => addItem(cartItem)}>
                    &#10095;
                </ArrowContainer>
            </QuantitySpan>
            <PriceSpan>{price}</PriceSpan>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
