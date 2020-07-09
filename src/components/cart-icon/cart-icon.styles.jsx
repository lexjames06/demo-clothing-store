import styled from 'styled-components';

import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';

export const CartIconContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ShoppingIconSVG = styled(ShoppingIcon)`
    width: 24px;
    height: 24px;
`;

export const ItemCountSpan = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 10px;
    right: auto;
`;