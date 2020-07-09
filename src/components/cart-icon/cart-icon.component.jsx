import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartVisibility } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { CartIconContainer, ShoppingIconSVG, ItemCountSpan } from './cart-icon.styles';

const CartIcon = ({ toggleCartVisibility, itemCount }) => (
    <CartIconContainer onClick={toggleCartVisibility}>
        <ShoppingIconSVG />
        <ItemCountSpan>{itemCount}</ItemCountSpan>
    </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
