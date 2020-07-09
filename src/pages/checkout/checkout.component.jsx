import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import { CheckoutHeaderContainer, CheckoutPageContainer, HeaderBlock, TotalContainer, TestWarningContainer } from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlock>
                <span>PRODUCT</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>DESCRIPTION</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>QUANTITY</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>PRICE</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>REMOVE</span>
            </HeaderBlock>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }
        <TotalContainer>
            <span>TOTAL: ${total}</span>
        </TotalContainer>
        <TestWarningContainer>
            *Please use the following test credit card for payments*
            <br />
            Card number: 4242 4242 4242 4242
            <br />
            Exp: 01/25
            <br />
            CVV: 123
        </TestWarningContainer>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);