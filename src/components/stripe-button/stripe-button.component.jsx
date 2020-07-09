import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H0qLPI9TmHKMorveprPUwOmvgvaDDCirB57bjsH91iOpCTiKmxiM4DZHMfxeHCNifVq9nk1SoGX9TTfgnlz17Nn00ZfPqbxx3';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    
    return (
        <StripeCheckout 
            label='Pay Now'
            name='LJ Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/Mch.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;