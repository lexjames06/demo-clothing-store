import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackgroundImageContainer, ContentContainer, TitleText, SubtitleSpan } from './menu-item.styles';

const MenuItem = ({ title, imageURL, linkURL, size, history, match }) => (
    <MenuItemContainer 
        size={size}
        onClick={() => history.push(`${match.url}${linkURL}`)}>
        <BackgroundImageContainer
            style={{
                backgroundImage: `url(${imageURL})`
            }} />
        <ContentContainer>
            <TitleText>{title.toUpperCase()}</TitleText>
            <SubtitleSpan>SHOP NOW</SubtitleSpan>
        </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);
