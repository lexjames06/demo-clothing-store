import styled, { css } from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`;

export const ItemImage = styled.img`
    width: 100%;
    height: 100%;
`;

const itemDetailsSpan = css`
    width: 23%;
`;

export const NameSpan = styled.span`
    ${itemDetailsSpan}
`;

export const QuantitySpan = styled.span`
    padding-left: 20px;
    display: flex;

    ${itemDetailsSpan}
`;

export const PriceSpan = styled.span`
    ${itemDetailsSpan}
`;

export const ArrowContainer = styled.div`
    cursor: pointer;
`;

export const ValueSpan = styled.span`
    margin: 0 10px;
`;

export const RemoveButtonContainer = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;
